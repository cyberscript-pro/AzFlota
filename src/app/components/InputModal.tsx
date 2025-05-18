import React from "react";
import { UseFormRegister } from "react-hook-form";
import { Inputs } from "../formularios/AddUser";

type InputModalProps = {
  register: UseFormRegister<Inputs>;
  errors?: string;
  name:
    | "password"
    | "nombre"
    | "ci"
    | "role"
    | "confirmPassword"
    | "nickname"
    | "clave";
  type: string;
  title: string;
};

function InputModal<T>({
  name,
  title,
  type,
  errors,
  register,
}: InputModalProps) {
  console.log(errors);
  return (
    <div>
      <label
        htmlFor={name}
        className="mt-2 block text-sm font-medium text-gray-700"
      >
        {title}
      </label>
      <input
        id={name}
        type={type}
        {...register(name)}
        className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
      />
      {errors && <span className="text-red-500 text-sm">{errors}</span>}
    </div>
  );
}

export default InputModal;
