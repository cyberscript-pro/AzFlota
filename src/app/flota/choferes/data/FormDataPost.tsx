import { choferSchema } from "@/app/validations/frontend/chofer.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import useApiPost from "../../../hooks/useApiPost";
import { Chofer } from "../utils/types";

type ChoferProps = {
  onClose: () => void;
};

export type Inputs = {
  nombre: string;
  edad: string;
  sexo: string;
  ci: string;
  licencia: string;
  telefono: string;
};

export function useFormDataPost({ onClose }: ChoferProps) {
  const form = useForm<Inputs>({
    resolver: zodResolver(choferSchema),
    defaultValues: {
      nombre: "",
      edad: "",
      sexo: "",
      ci: "",
      licencia: "",
      telefono: "",
    },
  });

  const { loadingPost, onSubmitData, submitSuccess, setSubmitSuccess } = useApiPost<Chofer>({
    url: "/api/choferes/",
    onClose,
    reset: form.reset,
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    onSubmitData({
      nombre: data.nombre,
      edad: parseInt(data.edad),
      sexo: data.sexo === "M" ? "M" : "F",
      ci: data.ci,
      licencia: data.licencia,
      telefono: data.telefono,
    });
  };

  return {
    form,
    submitSuccess,
    onSubmit,
    setSubmitSuccess,
    loadingPost
  };
}
