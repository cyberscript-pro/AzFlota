import React from "react";
import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { Inputs } from "../data/FormDataPost";
import InputSelect from "../components/InputSelect";
import { Form } from "@/components/ui/form";
import InputComponent from "@/app/components/InputComponent";

type AddChoferProps = {
  onSubmit: SubmitHandler<Inputs>;
  register?: UseFormRegister<Inputs>;
  handleSubmit?: UseFormHandleSubmit<Inputs, Inputs>;
  errors?: FieldErrors<Inputs>;
  onClose: () => void;
  form: any;
  loading: boolean;
};

function AddChofer({
  loading,
  form,
  onSubmit,
  handleSubmit,
  register,
  errors,
  onClose,
}: AddChoferProps) {
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-4 space-y-4"
        >
          <InputComponent
            name="nombre"
            label="Nombre y Apellidos"
            placeholder="Ingresa tu nombre"
            control={form.control}
          />

          <InputComponent
            name="edad"
            label="Edad"
            placeholder="Ingresa tu edad"
            control={form.control}
          />

          <InputSelect
            label="Sexo"
            name="sexo"
            control={form.control}
            placeholder="Selecciona una opción"
            options={[
              { value: "M", label: "Masculino" },
              { value: "F", label: "Femenino" },
            ]}
            required={true}
          />

          <InputComponent
            name="ci"
            label="Carnet de Identidad"
            placeholder="Ingresa tu CI"
            control={form.control}
          />

          <InputComponent
            name="licencia"
            label="Licencia de Conducción"
            placeholder="Ingresa tu Licencia"
            control={form.control}
          />

          <InputComponent
            name="telefono"
            label="Teléfono"
            placeholder="Ingresa tu teléfono"
            control={form.control}
          />

          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="submit"
              className={`inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto`}
            >
              {loading ? "Registrando..." : "Registrar"}
            </button>
            <button
              type="button"
              onClick={()=> {
                onClose();
                form.reset();
              }}
              className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              Cancelar
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default AddChofer;
