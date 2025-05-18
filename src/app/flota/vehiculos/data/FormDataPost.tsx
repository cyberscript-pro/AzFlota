import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import useApiPost from "../../../hooks/useApiPost";
import { Inputs, VehiculoPost } from "../../../types/vehiculo-types";
import { vehiculoSchemaPost } from "@/app/validations/frontend/vehiculo-post.schema";

type ChoferProps = {
  onClose: () => void;
};

export function useFormDataPost({ onClose }: ChoferProps) {
  const form = useForm<Inputs>({
    resolver: zodResolver(vehiculoSchemaPost),
    defaultValues: {
      chapa: "",
      marca: "",
      tipo: "",
      consumo_km: "",
      chofer: "",
      tarjeta: "",
      area: "",
    },
  });

  const { loadingPost, onSubmitData, submitSuccess, setSubmitSuccess } =
    useApiPost<VehiculoPost>({
      url: "/api/vehiculos/",
      onClose,
      reset: form.reset,
    });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    onSubmitData({
      chapa: data.chapa,
      marca: data.marca,
      tipo: data.tipo,
      consumo_km: data.consumo_km,
      chofer: data.chofer,
      tarjeta: data.tarjeta,
      area: data.area,
    });
  };

  return {
    form,
    submitSuccess,
    onSubmit,
    setSubmitSuccess,
    loadingPost,
  };
}
