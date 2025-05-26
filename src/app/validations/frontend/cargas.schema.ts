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
    consumo_dinero: z.string().min(1, {
      message: "Por favor ingrese el consumo en dinero",
    }),
    vehiculoChapa: z.string().min(1, {
      message: "Por favor seleccione el vehiculo",
    }),
  })
  .refine(
    async (data) => {
      if (data.vehiculoChapa.length > 6 && data.vehiculoChapa.length < 8) {
        const response = await fetch(
          `/api/vehiculos/${encodeURIComponent(data.vehiculoChapa)}`
        );
        const datos = await response.json();
        return datos.tarjeta.saldo + parseInt(data.importe) >=
          parseInt(data.consumo_dinero)
          ? true
          : false;
      }
    },
    {
      message: "El Consumo es mayor al saldo disponible",
      path: ["consumo_dinero"],
    }
  );
