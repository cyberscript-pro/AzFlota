import React, { useState } from "react";
import {
  FieldErrors,
  SubmitHandler,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { Form } from "@/components/ui/form";
import InputComponent from "@/app/components/InputComponent";
import DateInput from "../../tarjeta-combustible/components/DateInput";
import useApiGet from "@/app/hooks/useApiGet";
import {
  DataViajesPost,
  InputsDataViajes,
  VehiculoBack,
} from "@/app/types/vehiculo-types";
import InputSelect, { SelectOption } from "../components/InputSelect";
import { zodResolver } from "@hookform/resolvers/zod";
import { viajesVehiculoSchema } from "@/app/validations/frontend/viajes-post.schema";
import { CargaPost, Inputs } from "@/app/types/cargas-types";
import axios from "axios";
import useApiPost from "@/app/hooks/useApiPost";

type AddAreaTrabajoProps = {
  onClose: () => void;
  dataCarga: Inputs;
  form2: any;
};

function AddViajes({ onClose, dataCarga, form2 }: AddAreaTrabajoProps) {
  // const { data } = useApiGet<VehiculoBack>({
  //   url: "/api/vehiculos?page=1",
  // });

  const buscarVehiculo = async (chapa: string) => {
    try {
      const { data } = await axios.get(
        `/api/vehiculos/${encodeURIComponent(chapa)}`
      );

      return data;
    } catch (err) {
      if (axios.isCancel(err)) {
        return err;
      }
    }
  };

  const updateTarjeta = async (numero: string, saldo: number) => {
    try {
      const { data } = await axios.patch(
        `/api/tarjetas-combustible/${encodeURIComponent(numero)}`,
        {
          saldo,
        }
      );

      return data;
    } catch (err) {
      if (axios.isCancel(err)) {
        return err;
      }
    }
  };

  const form = useForm<InputsDataViajes>({
    resolver: zodResolver(viajesVehiculoSchema),
    defaultValues: {
      fechaSalida: "",
      fechaLlegada: "",
      lugarSalida: "",
      lugarDestino: "",
    },
  });

  const {
    loadingPost: cargaLoading,
    onSubmitData: onSubmitCarga,
    submitSuccess: submitSuccessCarga,
    setSubmitSuccess: setSubmitSuccessCarga,
  } = useApiPost<CargaPost>({
    url: "/api/control-cargas/",
    reset: form2.reset,
  });

  const {
    loadingPost: viajeLoading,
    onSubmitData: onSubmitViaje,
    submitSuccess: submitSuccessViaje,
    setSubmitSuccess: setSubmitSuccessViaje,
  } = useApiPost<DataViajesPost>({
    url: "/api/viajes-vehiculo/",
    onClose,
    reset: form.reset,
  });

  const onSubmit: SubmitHandler<InputsDataViajes> = async (data) => {
    const result = await buscarVehiculo(dataCarga.vehiculoChapa);

    let precio = 0;

    switch (result.tarjeta.tipo) {
      case "Diesel":
        precio = 13.9;
        break;
      case "Especial":
        precio = 17.4;
        break;
      case "B91":
        precio = 16.4;
        break;
      case "B83":
        precio = 14.6;
        break;
    }

    console.log(result.tarjeta.saldo);

    onSubmitCarga({
      folio: dataCarga.folio,
      comprobante: dataCarga.comprobante,
      fecha: dataCarga.fecha,
      existencia: parseInt(result.tarjeta.saldo),
      importe: parseInt(dataCarga.importe),
      consumo_dinero:
        (parseInt(dataCarga.km_recorridos) / parseInt(result.consumo_km)) *
        precio,
      vehiculoChapa: dataCarga.vehiculoChapa,
    });

    const saldo =
      parseInt(result.tarjeta.saldo) +
      parseInt(dataCarga.importe) -
      (parseInt(dataCarga.km_recorridos) / parseInt(result.consumo_km)) *
        precio;

    await updateTarjeta(result.tarjeta.numero, saldo);

    onSubmitViaje({
      fechaSalida: data.fechaSalida,
      fechaLlegada: data.fechaLlegada,
      lugarSalida: data.lugarSalida,
      lugarDestino: data.lugarDestino,
      kmRecorridos: parseInt(dataCarga.km_recorridos),
      combustibleConsumido:
        parseInt(dataCarga.km_recorridos) / parseInt(result.consumo_km),
      vehiculoChapa: dataCarga.vehiculoChapa,
    });
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-4 space-y-4 min-w-[400px]"
        >
          <DateInput
            name="fechaSalida"
            label="Fecha de Salida"
            control={form.control}
            required
          />

          <DateInput
            name="fechaLlegada"
            label="Fecha de Llegada"
            control={form.control}
            required
          />

          <InputComponent
            name="lugarSalida"
            label="Lugar de Salida"
            placeholder="Ingresa el lugar de salida"
            control={form.control}
          />

          <InputComponent
            name="lugarDestino"
            label="Lugar de Destino"
            placeholder="Ingresa el lugar de destino"
            control={form.control}
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

export default AddViajes;

/**
 * import React, { useState } from "react";
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
/* 
          <InputComponent
            name="consumo_dinero"
            label="Consumo en dinero"
            placeholder="Ingresa el consumo en dinero"
            control={form.control}
          /> 

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

export default AddVehiculo;

 */
