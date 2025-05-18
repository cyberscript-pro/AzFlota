import { choferSchema } from "@/app/validations/frontend/chofer.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import useApiPost from "../../../hooks/useApiPost";
import { Inputs, TarjetaPost } from "../../../types/tarjeta-types";
import { tarjetaSchemaPost } from "@/app/validations/frontend/tarjeta-post.schema";

type ChoferProps = {
  onClose: () => void;
};

export function useFormDataPost({ onClose }: ChoferProps) {
  const form = useForm<Inputs>({
    resolver: zodResolver(tarjetaSchemaPost),
    defaultValues: {
      numero: "",
      pin: "",
      estado: "",
      tipo: "",
      fecha_vencimiento: "",
      saldo: "0",
    },
  });

  const { onSubmitData, loadingPost, submitSuccess, setSubmitSuccess } =
    useApiPost<TarjetaPost>({
      url: "/api/tarjetas-combustible/",
      onClose,
      reset: form.reset,
    });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    onSubmitData({
      numero: data.numero,
      pin: data.pin,
      estado: data.estado,
      fecha_vencimiento: data.fecha_vencimiento,
      saldo: parseInt(data.saldo),
      tipo: data.tipo,
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
