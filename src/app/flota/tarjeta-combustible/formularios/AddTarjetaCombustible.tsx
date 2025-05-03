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
import DateInput from "../components/DateInput";

type AddTarjetaCombustibleProps = {
  onSubmit: SubmitHandler<Inputs>;
  register?: UseFormRegister<Inputs>;
  handleSubmit?: UseFormHandleSubmit<Inputs, Inputs>;
  errors?: FieldErrors<Inputs>;
  onClose: () => void;
  form: any;
};

function AddTarjetaCombustible({
  form,
  onSubmit,
  handleSubmit,
  register,
  errors,
  onClose,
}: AddTarjetaCombustibleProps) {
  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-4 space-y-4"
        >
          <InputComponent
            name="numero"
            label="Numero de Tarjeta"
            placeholder="Ingresa el numero de la tarjeta"
            control={form.control}
          />

          <InputComponent
            name="pin"
            label="Pin"
            placeholder="Ingresa el pin de la tarjeta"
            control={form.control}
          />

          <InputSelect
            label="Estado"
            name="estado"
            control={form.control}
            placeholder="Selecciona una opción"
            options={[
              { value: "Active", label: "Activa" },
              { value: "Inactive", label: "Inactiva" },
              { value: "Blocked", label: "Bloqueada" },
              { value: "Expired", label: "Expirada" },
            ]}
            required={true}
          />

          <DateInput
            name="fecha_vencimiento"
            label="Fecha de Vencimiento"
            control={form.control}
            required
          />

          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="submit"
              className={`inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto`}
            >
              Registrar
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

export default AddTarjetaCombustible;
