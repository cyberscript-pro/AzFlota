import React, { useState } from "react";
import {
  FieldErrors,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { Form } from "@/components/ui/form";
import InputComponent from "@/app/components/InputComponent";
import { Inputs } from "@/app/types/cargas-types";
import DateInput from "../../tarjeta-combustible/components/DateInput";
import useApiGet from "@/app/hooks/useApiGet";
import { VehiculoBack } from "@/app/types/vehiculo-types";
import InputSelect, { SelectOption } from "../components/InputSelect";
import { set } from "zod";
import Modal from "@/app/components/modal";
import ModalBasicStyle from "@/app/components/ModalBasicStyle";
import AddViajes from "./AddViajes";
import { on } from "events";

type AddAreaTrabajoProps = {
  onSubmit: SubmitHandler<Inputs>;
  register?: UseFormRegister<Inputs>;
  handleSubmit?: UseFormHandleSubmit<Inputs, Inputs>;
  errors?: FieldErrors<Inputs>;
  onClose: () => void;
  form: any;
  loadingAdd: boolean;
};

function AddVehiculo({
  loadingAdd,
  form,
  onSubmit,
  handleSubmit,
  register,
  errors,
  onClose,
}: AddAreaTrabajoProps) {

  const { data } = useApiGet<VehiculoBack>({
    url: "/api/vehiculos?page=1",
  });

  const handleSelectVehiculo = (): SelectOption[] => {
    const selectOptions: SelectOption[] = [];

    data?.map((dato) => {
      if (!(dato.tarjeta.estado === "Blocked") && dato.chofer.isAvailable) {
        selectOptions.push({
          value: dato.chapa,
          label: `${dato.chapa} - ${dato.tipo}`,
        });
      }
    });

    return selectOptions;
  };

  const kmRecorridos = parseInt(form.watch("km_recorridos"));

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-4 space-y-4 min-w-[400px]"
        >
          <InputComponent
            name="folio"
            label="Folio"
            placeholder="Ingresa el folio"
            control={form.control}
          />

          <InputComponent
            name="comprobante"
            label="Comprobante"
            placeholder="Ingresa el numero de comprobante"
            control={form.control}
          />

          <DateInput
            name="fecha"
            label="Fecha"
            control={form.control}
            required
          />

          <InputComponent
            name="importe"
            label="Importe"
            placeholder="Ingresa el importe"
            control={form.control}
          />

          <InputComponent
            name="km_recorridos"
            label="Cantidad de km recorridos"
            placeholder="Ingresa la cantidad de km recorridos"
            control={form.control}
          />
          {/* 
          <InputComponent
            name="consumo_dinero"
            label="Consumo en dinero"
            placeholder="Ingresa el consumo en dinero"
            control={form.control}
          /> */}

          <InputSelect
            label="Vehiculo"
            name="vehiculoChapa"
            control={form.control}
            placeholder="Selecciona una opción"
            options={handleSelectVehiculo()}
            required={true}
          />

          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button
              type="submit"
              className={`inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto ${
                form.formState.isSubmitting
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
            >
              {kmRecorridos > 0
                ? "Siguiente"
                : form.formState.isSubmitting
                ? "Registrando..."
                : "Registrar"}
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

export default AddVehiculo;
