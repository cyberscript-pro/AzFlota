import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import useApiPost from "../../../hooks/useApiPost";
import { CargaPost, Inputs } from "@/app/types/cargas-types";
import { controlCargasSchema } from "@/app/validations/frontend/cargas.schema";

type CargasProps = {
  onClose: () => void;
};

export function useFormDataPost({ onClose }: CargasProps) {
  const buscarVehiculo = async (chapa: string) => {
    try {
      const { data } = await axios.get(
        `/api/vehiculos/${encodeURIComponent(chapa)}`,
        {
          params: { t: Date.now() },
        }
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
          numero,
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
      importe: "",
      consumo_dinero: "",
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
    const result = await buscarVehiculo(data.vehiculoChapa);

    onSubmitData({
      folio: data.folio,
      comprobante: data.comprobante,
      fecha: data.fecha,
      existencia: parseInt(result.tarjeta.saldo),
      importe: parseInt(data.importe),
      consumo_dinero: parseInt(data.consumo_dinero),
      vehiculoChapa: data.vehiculoChapa,
    });
    
    const saldo =
      parseInt(result.tarjeta.saldo) +
      parseInt(data.importe) -
      parseInt(data.consumo_dinero);

    await updateTarjeta(
      result.tarjeta.numero,
      saldo
    );
  };

  return {
    form,
    submitSuccess,
    onSubmit,
    setSubmitSuccess,
    loadingPost,
  };
}
