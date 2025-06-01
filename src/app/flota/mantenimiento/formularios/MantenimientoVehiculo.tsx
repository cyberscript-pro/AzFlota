import InputComponent from "@/app/components/InputComponent";
import { Form } from "@/components/ui/form";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import DateInput from "../../tarjeta-combustible/components/DateInput";
import useApiUpdate from "@/app/hooks/useApiUpdate";
import { toast } from "sonner";
import { dateSchema } from "@/app/validations/frontend/tarjeta-post.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { mantenimientoSchemaFin } from "@/app/validations/frontend/mantenimiento.schema";

function MantenimientoVehiculo({
  id,
  onClose,
  dataUpdate,
  onSuccess,
}: {
  id: string;
  onClose: () => void;
  dataUpdate: { chapa: string; inicio: string; motivo: string };
  onSuccess: () => void;
}) {
  const { updateData } = useApiUpdate({
    url: `/api/vehiculos-mantenimiento/${id}`,
    onSuccess: async () => {
      toast.success("Mantenimiento terminado correctamente");
      onSuccess();
    },
  });

  const onSubmit: SubmitHandler<{
    fin: string;
    descripcion: string;
  }> = async (data) => {
    try {
      const fecha_inicio = dataUpdate.inicio.split("T")[0];
      await updateData({
        chapa: dataUpdate.chapa,
        inicio: fecha_inicio,
        motivo: dataUpdate.motivo,
        fin: data.fin,
        descripcion: data.descripcion,
      });
      console.log({
        chapa: dataUpdate.chapa,
        inicio: fecha_inicio,
        motivo: dataUpdate.motivo,
        fin: data.fin,
        descripcion: data.descripcion,
      });
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  };

  const form = useForm<{
    fin: string;
    descripcion: string;
  }>({
    defaultValues: {
      fin: "",
      descripcion: "",
    },
    resolver: zodResolver(mantenimientoSchemaFin),
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-4 space-y-4 min-w-[450px]"
      >
        <DateInput
          name="fin"
          label="Fecha de Fin del Mantenimiento"
          control={form.control}
        />

        <InputComponent
          name="descripcion"
          label="Descripción del Mantenimiento Realizado"
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
            {form.formState.isSubmitting ? "Terminando..." : "Terminar"}
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
