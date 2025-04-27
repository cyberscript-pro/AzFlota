/*import { choferSchema } from "@/app/validations/frontend/chofer.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import useApiPost from "../../hooks/useApiPost";
import { ChoferFront } from "../utils/types";
import useApiUpdate from "../../hooks/useApiUpdate";

type ChoferProps = {
  onClose: () => void;
};

export type Inputs = {
  nombre: string;
  ci: string;
  licencia: string;
};

function FormDataUpdate({ onClose }: ChoferProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    resolver: zodResolver(choferSchema),
  });

  // const submitData = (id: string) => {
    
  
  //   const onSubmit: SubmitHandler<Inputs> = (data) => {
  //     const { onSubmitData, submitSuccess, setSubmitSuccess } = useApiUpdate({
  //     url: `http://localhost:3000/api/choferes/${id}`,
  //     onClose: onClose,
  //     reset: reset,
  //   });
  //     onSubmitData({
  //       nombre: data.nombre,
  //       ci: data.ci,
  //       licencia: data.licencia,
  //     });
  //   };

  //   return {
  //     onSubmit
  //   }
  // }

  return {
    register,
    handleSubmit,
    errors,
    reset,
    
    // submitSuccess,
    // onSubmit,
    // setSubmitSuccess,
  };
}

export default FormDataUpdate;*/
