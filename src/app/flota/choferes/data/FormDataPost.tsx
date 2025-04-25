import { choferSchema } from "@/validations/frontend/choferSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form"
import useApiPost from "../../hooks/useApiPost";

type ChoferProps = {
    onClose: () => void;
}

export type Inputs = {
    nombre: string;
    ci: string;
    licencia?: string;
}

function FormDataPost({ onClose }: ChoferProps) {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>({
        resolver: zodResolver(choferSchema)
    });

    const { onSubmitData, submitSuccess, setSubmitSuccess } = useApiPost({
        url: "http://localhost:3000/api/choferes/",
        onClose: onClose,
        reset: reset
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        onSubmitData({
            nombre: data.nombre,
            ci: data.ci,
            licencia: data.licencia
        });
    }

    return {
        register,
        handleSubmit,
        errors,
        submitSuccess,
        onSubmit, 
        setSubmitSuccess
    }
}

export default FormDataPost;