import React from "react";
import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { Inputs } from "../data/FormDataPost";

type AddTarjetaCombustibleProps = {
  onSubmit: SubmitHandler<Inputs>;
  register: UseFormRegister<Inputs>;
  handleSubmit: UseFormHandleSubmit<Inputs, Inputs>;
  errors: FieldErrors<Inputs>;
  onClose: () => void;
};

function AddTarjetaCombustible({
  onSubmit,
  handleSubmit,
  register,
  errors,
  onClose,
}: AddTarjetaCombustibleProps) {
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
        <div>
          <label
            htmlFor="numero"
            className="block text-sm font-medium text-gray-700"
          >
            Numero de Tarjeta de Combustible{" "}
            <span className="text-red-500 text-lg">*</span>
          </label>
          <input
            id="numero"
            type="text"
            {...register("numero")}
            className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
          {errors.numero?.message && (
            <span className="text-red-500 text-sm">
              {errors.numero.message}
            </span>
          )}
        </div>

        <div>
          <label
            htmlFor="pin"
            className="block text-sm font-medium text-gray-700"
          >
            Pin <span className="text-red-500 text-lg">*</span>
          </label>
          <input
            id="pin"
            type="text"
            {...register("pin")}
            className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
          {errors.pin?.message && (
            <span className="text-red-500 text-sm">{errors.pin.message}</span>
          )}
        </div>

        <div>
          <label
            htmlFor="estado"
            className="block text-sm font-medium text-gray-700"
          >
            Estado <span className="text-red-500 text-lg">*</span>
          </label>
          <select id="estado" {...register("estado")}>
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
            <option value="Bloqueado">Bloqueado</option>
            <option value="Expirado">Expirado</option>
          </select>
          {errors.estado?.message && (
            <span className="text-red-500 text-sm">
              {errors.estado.message}
            </span>
          )}
        </div>

        <div>
          <label
            htmlFor="fecha_vencimiento"
            className="block text-sm font-medium text-gray-700"
          >
            Fecha de Vencimiento <span className="text-red-500 text-lg">*</span>
          </label>
          <input
            id="fecha_vencimiento"
            type="date"
            {...register("fecha_vencimiento")}
            className="mt-1 block w-full rounded-md text-black border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
          />
          {errors.fecha_vencimiento?.message && (
            <span className="text-red-500 text-sm">
              {errors.fecha_vencimiento.message}
            </span>
          )}
        </div>

        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="submit"
            className={`inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto`}
          >
            Registrar
          </button>
          <button
            type="button"
            onClick={onClose}
            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTarjetaCombustible;
