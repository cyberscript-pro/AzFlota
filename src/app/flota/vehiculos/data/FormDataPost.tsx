import { choferSchema } from "@/app/validations/frontend/chofer.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import useApiPost from "../../../hooks/useApiPost";
import { VehiculoPost } from "../../../types/vehiculo-types";
import { areaSchemaPost } from "@/app/validations/frontend/area-trabajo.schema";
import { vehiculoSchemaPost } from "@/app/validations/frontend/vehiculo-post.schema";

type ChoferProps = {
  onClose: () => void;
};

export type Inputs = {
  chapa: string;
  marca: string;
  tipo: string;
  chofer: string;
  tarjeta: string;
  area: string;
};

export function useFormDataPost({ onClose }: ChoferProps) {
  const form = useForm<Inputs>({
    resolver: zodResolver(vehiculoSchemaPost),
    defaultValues: {
      chapa: "",
      marca: "",
      tipo: "",
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
