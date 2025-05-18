import React from "react";
import { SubmitHandler } from "react-hook-form";
import { AreaTrabajoFront, AreaTrabajoPost } from "../../../types/area-types";
import useApiUpdate from "../../../hooks/useApiUpdate";
import { Form } from "@/components/ui/form";
import InputComponent from "@/app/components/InputComponent";
import { toast } from "sonner";

type UpdateChoferProps = {
  id: string;
  form: any;
  onClose: () => void;
  data: AreaTrabajoFront;
  onSuccess?: () => Promise<void>;
};

type Inputs = {
  nombre: string;
  centro_costo: string;
  jefe: string;
};

function UpdateChofer({
  id,
  form,
  data,
  onClose,
  onSuccess,
}: UpdateChoferProps) {
  const { loading, error, updateData } = useApiUpdate<AreaTrabajoPost>({
    url: `/api/areas-trabajo/${id}`,
    onSuccess: async () => {
      toast.success("Area de Trabajo actualizada correctamente");
      if (onSuccess) {
        await onSuccess();
      }
      onClose();
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await updateData({
        nombre: data.nombre,
        centro_costo: data.centro_costo,
        jefe: data.jefe,
      });
    } catch (error) {
      toast.error("Error al actualizar el area de trabajo");
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 space-y-4">
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
              disabled={loading}
              className={`inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Actualizando..." : "Actualizar"}
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

export default UpdateChofer;
