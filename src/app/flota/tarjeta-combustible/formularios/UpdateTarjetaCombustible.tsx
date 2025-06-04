import React from "react";
import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import {
  Inputs,
  InputsUpdate,
  Tarjeta,
  TarjetaFront,
  TarjetaPost,
  TarjetaUpdate,
} from "../../../types/tarjeta-types";
import useApiUpdate from "../../../hooks/useApiUpdate";
import InputSelect from "../components/InputSelect";
import { Form } from "@/components/ui/form";
import InputComponent from "@/app/components/InputComponent";
import { toast } from "sonner";
import DateInput from "../components/DateInput";

type UpdateTarjetaCombustibleProps = {
  numero: string;
  tipo: string;
  form: any;
  onClose: () => void;
  data: TarjetaFront;
  onSuccess?: () => Promise<void>;
};

function UpdateTarjetaCombustible({
  numero,
  tipo,
  form,
  data,
  onClose,
  onSuccess,
}: UpdateTarjetaCombustibleProps) {
  const { loading, error, updateData } = useApiUpdate<TarjetaUpdate>({
    url: `/api/tarjetas-combustible/${numero}?tipo=${tipo}`,
    onSuccess: async () => {
      toast.success("Tarjeta Combustible actualizada correctamente");
      if (onSuccess) {
        await onSuccess();
      }
      onClose();
    },
  });

  const onSubmit: SubmitHandler<InputsUpdate> = async (data) => {
    try {
      console.log(data);
      await updateData({
        pin: data.pin,
        estado: data.estado,
        fecha_vencimiento: data.fecha_vencimiento,
      });
    } catch (error) {
      toast.error("Error al actualizar la tarjeta combustible");
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 space-y-4">
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

export default UpdateTarjetaCombustible;
