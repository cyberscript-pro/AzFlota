import { choferSchema } from "@/app/validations/frontend/chofer.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import useApiPost from "../../../hooks/useApiPost";
import { AreaTrabajoPost } from "../utils/types";
import { areaSchemaPost } from "@/app/validations/frontend/area-trabajo.schema";

type ChoferProps = {
  onClose: () => void;
};

export type Inputs = {
  nombre: string;
  centro_costo: string;
  jefe: string;
};

export function useFormDataPost({ onClose }: ChoferProps) {
  const form = useForm<Inputs>({
    resolver: zodResolver(areaSchemaPost),
    defaultValues: {
      nombre: "",
      centro_costo: "",
      jefe: "",
    },
  });

  const { loadingPost, onSubmitData, submitSuccess, setSubmitSuccess } = useApiPost<AreaTrabajoPost>({
    url: "/api/areas-trabajo/",
    onClose,
    reset: form.reset,
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    onSubmitData({
      nombre: data.nombre,
      centro_costo: data.centro_costo,
      jefe: data.jefe
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
