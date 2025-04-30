import { useState } from "react";
import AuthModal from "../components/AuthModal";
import InputModal from "../components/InputModal";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchemaPost } from "../validations/frontend/user-post.schema";
import ModalBasicStyle from "../components/ModalBasicStyle";
import InputSelect from "../components/InputSelect";
import useApiPost from "../hooks/useApiPost";
import { on } from "events";

export type Inputs = {
  nickname: string;
  nombre: string;
  ci: string;
  role: "ECONOMICO" | "DIRECTOR" | "ENCARGADO" | "SUPERVISOR";
  password: string;
  confirmPassword?: string;
};

type AddUserProps = {
  onClose: () => void;
  isOpen: boolean;
}

export default function AddUserForm({ isOpen, onClose }: AddUserProps) {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>({
    resolver: zodResolver(userSchemaPost),
  });

  const { onSubmitData, submitSuccess, setSubmitSuccess } = useApiPost<Inputs>({
      url: "http://localhost:3000/api/users/",
      onClose: onClose,
      reset: reset,
    });
  
    const onSubmit: SubmitHandler<Inputs> = (data) => {
      onSubmitData({
        nickname: data.nickname,
        nombre: data.nombre,
        ci: data.ci,
        password: data.password,
        role: data.role,
      });
    };

  return (
    <div>
      <AuthModal isOpen={isOpen} onClose={onClose}>
        <ModalBasicStyle title="Registar Usuario">
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputModal
              name="nickname"
              title="Nombre de Usuario"
              type="text"
              errors={errors.nickname?.message}
              register={register}
            />
            <InputModal
              name="nombre"
              title="Nombre y Apellidos"
              type="text"
              errors={errors.nombre?.message}
              register={register}
            />
            <InputModal
              name="ci"
              title="Carnet de Identidad"
              type="text"
              register={register}
              errors={errors.ci?.message}
            />

            <InputSelect
              id="role"
              label="Rol"
              options={[
                { value: "", label: "Selecciona un rol", disabled: true },
                { value: "ECONOMICO", label: "Economico" },
                { value: "DIRECTOR", label: "Director" },
                { value: "ENCARGADO", label: "Encargado" },
                { value: "SUPERVISOR", label: "Supervisor" },
              ]}
              register={register}
              errors={errors}
              required
            />

            <InputModal
              name="password"
              title="Contraseña"
              type="password"
              errors={errors.password?.message}
              register={register}
            />
            <InputModal
              name="confirmPassword"
              title="Confirmar Contraseña"
              type="password"
              errors={errors.confirmPassword?.message}
              register={register}
            />
            <button
              type="submit"
              className="mt-4 w-full rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
            >
              Registrar
            </button>
          </form>
        </ModalBasicStyle>
      </AuthModal>
    </div>
  );
}
