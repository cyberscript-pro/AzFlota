import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import useApiPost from "../../hooks/useApiPost";
import { tarjetaSchemaPost } from "@/app/validations/frontend/tarjeta-post.schema";
import { TarjetaCombustibleMapper } from "../mappers/tarjeta-combustible.mapper";

type TarjetaCombustibleProps = {
  onClose: () => void;
};

export type Inputs = {
  numero: string;
  pin: string;
  estado?: "Activo" | "Inactivo" | "Bloqueado" | "Expirado";
  fecha_vencimiento: string;
};

function FormDataPost({ onClose }: TarjetaCombustibleProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    resolver: zodResolver(tarjetaSchemaPost),
  });

  const { onSubmitData, submitSuccess, setSubmitSuccess } = useApiPost({
    url: "http://localhost:3000/api/tarjetas-combustible/",
    onClose: onClose,
    reset: reset,
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    //TarjetaCombustibleMapper.fromFrontToApi(data)
    onSubmitData({
      numero: data.numero,
      pin: data.pin,
      estado: data.estado,
      fecha_vencimiento: data.fecha_vencimiento,
    });
  };

  return {
    register,
    handleSubmit,
    errors,
    submitSuccess,
    onSubmit,
    setSubmitSuccess,
  };
}

export default FormDataPost;
