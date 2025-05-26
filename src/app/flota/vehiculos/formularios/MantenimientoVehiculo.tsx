import InputComponent from "@/app/components/InputComponent";
import { Form } from "@/components/ui/form";
import React from "react";
import { useForm } from "react-hook-form";
import DateInput from "../../tarjeta-combustible/components/DateInput";

function MantenimientoVehiculo({
  onClose,
  onSubmit,
}: {
  onClose: () => void;
  onSubmit: (data: { inicio: string; descripcion: string }) => void;
}) {
  const form = useForm<{
    inicio: string;
    descripcion: string;
  }>({
    defaultValues: {
      inicio: "",
      descripcion: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-4 space-y-4 min-w-[450px]"
      >
        <DateInput
          name="inicio"
          label="Fecha de Incio del Mantenimiento"
          control={form.control}
        />

        <InputComponent
          name="descripcion"
          label="Descripción del Mantenimiento"
          placeholder="Ingresa la descripción del mantenimiento"
          control={form.control}
        />

        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="submit"
            disabled={form.formState.isSubmitting}
            className={`inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto ${
              form.formState.isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
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
  );
}

export default MantenimientoVehiculo;
