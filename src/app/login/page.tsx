"use client";
import Image from "next/image";
import { useState } from "react";
import { Toaster, toast } from "sonner";
import AuthModal from "../components/AuthModal";
import ModalBasicStyle from "../components/ModalBasicStyle";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchemaLogin } from "../validations/frontend/user-login.schema";
import AddUserForm from "../formularios/AddUser";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";

export type LoginInputs = {
  nickname: string;
  password: string;
};

export default function Login() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginInputs>({
    resolver: zodResolver(userSchemaLogin),
  });

  const [loginError, setLoginError] = useState("");

  const onSubmit = async (data: LoginInputs) => {
    setIsLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      nickname: data.nickname,
      password: data.password,
    });

    if (res && res.ok) {
      toast.success("Usted a iniciado sesion correctamente");
      router.push("/dashboard");
      router.refresh();
    } else {
      setLoginError("Usuario o contraseña incorrectos");
      setIsLoading(false);
    }
  };

  if(loginError !== "") {
    toast.error(loginError);
  }

  return (
    <div>
      <Toaster richColors />
      <AuthModal isOpen={!isLogin} onClose={() => setIsLogin(false)}>
        <ModalBasicStyle title="Inicio de Sesion">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="nickname"
                className="mt-2 block text-sm font-medium text-gray-700"
              >
                Nombre de Usuario
              </label>
              <input
                id="nickname"
                type="text"
                {...register("nickname")}
                className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
              />
              {errors.nickname?.message && (
                <span className="text-red-500 text-sm">
                  {errors.nickname.message}
                </span>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="mt-2 block text-sm font-medium text-gray-700"
              >
                Contraseña
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password")}
                  className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  aria-label={
                    showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                  }
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                  ) : (
                    <EyeIcon className="h-5 w-5 text-gray-500" />
                  )}
                </button>
              </div>

              {errors.password?.message && (
                <span className="text-red-500 text-sm">
                  {errors.password.message}
                </span>
              )}
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse justify-between sm:px-6">
              <button
                type="submit"
                className={`inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto ${isLoading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
              >
                {isLoading ? "Iniciando Sesion..." : "Iniciar Sesion"}
              </button>
              <button
                type="button"
                onClick={() => setIsRegister(true)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Registrarme
              </button>
            </div>
          </form>
        </ModalBasicStyle>
      </AuthModal>
      <AddUserForm isOpen={isRegister} onClose={() => setIsRegister(false)} />
    </div>
  );
}
