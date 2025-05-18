import { z } from "zod";

export const viajesVehiculoSchema = z.object({
  fechaSalida: z
    .string()
    .refine((date) => new Date(date).toString() !== "Invalid Date", {
      message: "Por favor introduzca una fecha valida",
    }),
  fechaLlegada: z
    .string()
    .refine((date) => new Date(date).toString() !== "Invalid Date", {
      message: "Por favor introduzca una fecha valida",
    }),
  lugarDestino: z.string().min(1, {
    message: "El lugar es requerido",
  }),
  combustibleConsumido: z.number().positive().min(1, {
    message: "El combustible consumido en el viaje es requerido",
  }),
  vehiculoChapa: z.string().min(6, {
    message: "La chapa del vehiculo es requerida",
  }),
});

export const dateSchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/)
  .transform((val) => new Date(`${val}T00:00:00Z`));
