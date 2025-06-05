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

type AddAreaTrabajoProps = {
  onSubmit: SubmitHandler<Inputs>;
  register?: UseFormRegister<Inputs>;
  handleSubmit?: UseFormHandleSubmit<Inputs, Inputs>;
  errors?: FieldErrors<Inputs>;
  onClose: () => void;
  form: any;
  loading: boolean;
};

function AddAreaTrabajo({
  loading,
  form,
  onSubmit,
  handleSubmit,
  register,
  errors,
  onClose,
}: AddAreaTrabajoProps) {
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-4 space-y-4 min-w-[350px]"
        >
          <InputComponent
            name="nombre"
            label="Nombre del Area de Trabajo"
            placeholder="Ingresa el nombre"
            control={form.control}
          />

          <InputComponent
            name="centro_costo"
            label="Centro de Costo"
            placeholder="Ingresa el centro de costo"
            control={form.control}
          />

          <InputComponent
            name="jefe"
            label="Nombre del Jefe del Area de Trabajo"
            placeholder="Ingresa el nombre del jefe"
            control={form.control}
          />

          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="submit"
              disabled={form.formState.isSubmitting}
              className={`inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto`}
            >
              {form.formState.isSubmitting ? "Registrando..." : "Registrar"}
            </button>
            <button
              type="button"
              onClick={() => {
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

export default AddAreaTrabajo;
