import React from "react";
import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { Chofer, ChoferFront, ChoferPost } from "../../../types/choferes-types";
import useApiUpdate from "../../../hooks/useApiUpdate";
import InputSelect from "../components/InputSelect";
import { Form } from "@/components/ui/form";
import InputComponent from "@/app/components/InputComponent";
import { toast } from "sonner";

type UpdateChoferProps = {
  id: string;
  form: any;
  onClose: () => void;
  data: ChoferFront;
  onSuccess?: () => Promise<void>;
};

type Inputs = {
  nombre: string;
  edad: string;
  sexo: string;
  ci: string;
  licencia: string;
  telefono: string;
};

function UpdateChofer({
  id,
  form,
  data,
  onClose,
  onSuccess,
}: UpdateChoferProps) {
  const { loading, error, updateData } = useApiUpdate<Chofer>({
    url: `/api/choferes/${id}`,
    onSuccess: async () => {
      toast.success("Chofer actualizado correctamente");
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
        edad: Number(data.edad),
        sexo: data.sexo == "M" ? "M" : "F",
        ci: data.ci,
        licencia: data.licencia,
        telefono: data.telefono,
      });
    } catch (error) {
      toast.error("Error al actualizar el chofer");
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 space-y-4">
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
            placeholder="Ingresa tu numero de teléfono"
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
              {form.formState.isSubmitting ? "Actualizando..." : "Actualizar"}
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
