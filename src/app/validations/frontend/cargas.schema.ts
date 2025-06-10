import { VehiculoBack } from "@/app/types/vehiculo-types";
import { z } from "zod";

export const controlCargasSchema = z
  .object({
    folio: z
      .string()
      .min(1, {
        message: "Por favor ingrese el folio",
      })
      .refine(
        async (folio) => {
          if (folio.length > 0) {
            const response = await fetch(
              `/api/control-cargas/checking?folio=${folio}`
            );
            const data = await response.json();
            return !data.folio;
          }
        },
        {
          message: "Folio ya registrado",
        }
      ),
    comprobante: z
      .string()
      .min(1, {
        message: "Por favor ingrese el comprobante",
      })
      .refine(
        async (comprobante) => {
          if (comprobante.length > 0) {
            const response = await fetch(
              `/api/control-cargas/checking?comprobante=${comprobante}`
            );
            const data = await response.json();
            return !data.comprobante;
          }
        },
        {
          message: "Comprobante ya registrado",
        }
      ),
    fecha: z
      .string()
      .refine((date) => new Date(date).toString() !== "Invalid Date", {
        message: "Por favor ingrese una fecha valida",
      }),
    importe: z.string().min(1, {
      message: "Por favor ingrese el importe",
    }),
    km_recorridos: z.string().min(1, {
      message: "Por favor ingrese el consumo en dinero",
    }),
    vehiculoChapa: z.string().min(1, {
      message: "Por favor seleccione el vehiculo",
    }),
  })
  .refine(
    async (data) => {
      if (data.vehiculoChapa.length >= 6 && data.vehiculoChapa.length < 8) {
        const response = await fetch(
          `/api/control-cargas/checking/date?chapa=${encodeURIComponent(
            data.vehiculoChapa
          )}&fecha=${encodeURIComponent(data.fecha)}`
        );
        const present = await response.json();
        return !present.exists;
      }
    },
    {
      message: "La fecha debe ser posterior a la de la última carga registrada",
      path: ["fecha"],
    }
  )
  .refine(
    async (data) => {
      if (data.vehiculoChapa.length >= 6 && data.vehiculoChapa.length < 8) {
        const response = await fetch(
          `/api/vehiculos/${encodeURIComponent(data.vehiculoChapa)}`
        );
        const datos: VehiculoBack = await response.json();

        let precio = 0;

        switch (datos.tarjeta.tipo) {
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

        return parseInt(datos.tarjeta.saldo) + parseInt(data.importe) >=
          (parseInt(data.km_recorridos) / parseInt(datos.consumo_km)) * precio
          ? true
          : false;
      }
    },
    {
      message: "El Consumo es mayor al saldo disponible",
      path: ["km_recorridos"],
    }
  );
