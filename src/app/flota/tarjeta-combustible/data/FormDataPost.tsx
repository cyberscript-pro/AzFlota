import { choferSchema } from "@/app/validations/frontend/chofer.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import useApiPost from "../../../hooks/useApiPost";
import { Tarjeta, TarjetaPost } from "../utils/types";
import { tarjetaSchemaPost } from "@/app/validations/frontend/tarjeta-post.schema";

type ChoferProps = {
  onClose: () => void;
};

export type Inputs = {
  numero: string;
  pin: string;
  estado: string;
  fecha_vencimiento: string;
};

export function useFormDataPost({ onClose }: ChoferProps) {
  const form = useForm<Inputs>({
    resolver: zodResolver(tarjetaSchemaPost),
    defaultValues: {
      numero: "",
      pin: "",
      estado: "",
      fecha_vencimiento: "",
    },
  });

  const { onSubmitData, submitSuccess, setSubmitSuccess } = useApiPost<TarjetaPost>({
    url: "http://localhost:3000/api/tarjetas-combustible/",
    onClose,
    reset: form.reset,
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    onSubmitData({
      numero: data.numero,
      pin: data.pin,
      estado: data.estado,
      fecha_vencimiento: data.fecha_vencimiento,
    });
  };

  return {
    form,
    submitSuccess,
    onSubmit,
    setSubmitSuccess,
  };
}
