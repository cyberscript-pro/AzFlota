import React from "react";
import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { Inputs, VehiculoPost } from "../../../types/vehiculo-types";
import useApiUpdate from "../../../hooks/useApiUpdate";
import InputSelect, { SelectOption } from "../components/InputSelect";
import { Form } from "@/components/ui/form";
import InputComponent from "@/app/components/InputComponent";
import { toast } from "sonner";
import useApiGet from "@/app/hooks/useApiGet";
import { Chofer } from "../../../types/choferes-types";
import { Tarjeta } from "../../../types/tarjeta-types";
import { AreaTrabajoBack } from "../../../types/area-types";

type UpdateChoferProps = {
  id: string;
  form: any;
  onClose: () => void;
  data: VehiculoPost;
  onSuccess?: () => Promise<void>;
};

function UpdateChofer({
  id,
  form,
  data: dataVehiculo,
  onClose,
  onSuccess,
}: UpdateChoferProps) {
  const { loading, error, updateData } = useApiUpdate<VehiculoPost>({
    url: `/api/vehiculos/${id}`,
    onSuccess: async () => {
      toast.success("Vehiculo actualizado correctamente");
      if (onSuccess) {
        await onSuccess();
      }
      onClose();
    },
  });

  const { data: choferData } = useApiGet<Chofer>({
    url: "/api/choferes?page=1",
  });

  const { data: tarjetaData } = useApiGet<Tarjeta>({
    url: "/api/tarjetas-combustible?page=1",
  });

  const { data: areaData } = useApiGet<AreaTrabajoBack>({
    url: "/api/areas-trabajo?page=1",
  });

  const handleSelectTarjeta = (): SelectOption[] => {
    const selectOptions: SelectOption[] = [];

    tarjetaData?.map((data) => {
      if (!data.vehiculo || data.vehiculo.chapa === dataVehiculo.chapa) {
        selectOptions.push({
          value: data.numero,
          label: `${data.numero}`,
        });
      }
    });

    return selectOptions;
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await updateData({
        chapa: data.chapa,
        marca: data.marca,
        tipo: data.tipo,
        consumo_km: data.consumo_km,
        chofer: data.chofer,
        tarjeta: data.tarjeta,
        area: data.area,
      });
    } catch (error) {
      toast.error("Error al actualizar el vehiculo");
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-4 space-y-4">
          <InputComponent
            name="chapa"
            label="Chapa del Vehiculo"
            placeholder="Ingresa la chapa"
            control={form.control}
          />

          <InputComponent
            name="marca"
            label="Marca del Vehiculo"
            placeholder="Ingresa la marca"
            control={form.control}
          />

          <InputComponent
            name="tipo"
            label="Tipo de Vehiculo"
            placeholder="Ingresa el tipo de vehiculo"
            control={form.control}
          />

          <InputComponent
            name="consumo_km"
            label="Consumo Km"
            placeholder="Ingresa el consumo de combustible en litros por Km"
            control={form.control}
          />

          <InputSelect
            label="Chofer"
            name="chofer"
            control={form.control}
            placeholder="Selecciona una opción"
            options={choferData?.map((data) => {
              return {
                value: data.ci,
                label: `${data.nombre} - ${data.ci}`,
              };
            })}
            required={true}
          />

          <InputSelect
            label="Tarjeta de Combustible"
            name="tarjeta"
            control={form.control}
            placeholder={
              handleSelectTarjeta().length > 0
                ? "Selecciona una opción"
                : "Por favor añada una tarjeta de combustible"
            }
            options={handleSelectTarjeta()}
            required={true}
          />

          <InputSelect
            label="Area de Trabajo"
            name="area"
            control={form.control}
            placeholder={"Selecciona una opción"}
            options={areaData?.map((data) => {
              return {
                value: data.uuid,
                label: `${data.nombre} - ${data.centro_costo}`,
              };
            })}
            required={true}
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
