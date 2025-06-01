import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import useApiPost from "../../../hooks/useApiPost";
import { CargaPost, Inputs } from "@/app/types/cargas-types";
import { controlCargasSchema } from "@/app/validations/frontend/cargas.schema";
import { on } from "events";

type CargasProps = {
  onClose: () => void;
  onViajes: () => void;
  onSubmitCarga: (data: Inputs) => void;
};

export function useFormDataPost({
  onClose,
  onViajes,
  onSubmitCarga,
}: CargasProps) {
  const buscarVehiculo = async (chapa: string) => {
    try {
      const { data } = await axios.get(
        `/api/vehiculos/${encodeURIComponent(chapa)}`
      );

      return data;
    } catch (err) {
      if (axios.isCancel(err)) {
        return err;
      }
    }
  };

  const updateTarjeta = async (numero: string, saldo: number) => {
    try {
      const { data } = await axios.patch(
        `/api/tarjetas-combustible/${encodeURIComponent(numero)}`,
        {
          saldo,
        }
      );

      return data;
    } catch (err) {
      if (axios.isCancel(err)) {
        return err;
      }
    }
  };

  const form = useForm<Inputs>({
    resolver: zodResolver(controlCargasSchema),
    defaultValues: {
      folio: "",
      comprobante: "",
      fecha: "",
      importe: "0",
      km_recorridos: "0",
      vehiculoChapa: "",
    },
  });

  const { loadingPost, onSubmitData, submitSuccess, setSubmitSuccess } =
    useApiPost<CargaPost>({
      url: "/api/control-cargas/",
      onClose,
      reset: form.reset,
    });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (parseInt(data.km_recorridos) > 0) {
      onClose();
      onSubmitCarga(data);
      onViajes();
    } else {
      const result = await buscarVehiculo(data.vehiculoChapa);

      onSubmitData({
        folio: data.folio,
        comprobante: data.comprobante,
        fecha: data.fecha,
        existencia: parseInt(result.tarjeta.saldo),
        importe: parseInt(data.importe),
        consumo_dinero: 0,
        vehiculoChapa: data.vehiculoChapa,
      });

      const saldo =
        parseInt(result.tarjeta.saldo) +
        parseInt(data.importe) -
        parseInt("0");

      await updateTarjeta(result.tarjeta.numero, saldo);
    }
  };

  return {
    form,
    submitSuccess,
    onSubmit,
    setSubmitSuccess,
    loadingPost,
  };
}
