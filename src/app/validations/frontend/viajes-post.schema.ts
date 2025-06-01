import { z } from "zod";

export const viajesVehiculoSchema = z.object({
  fechaSalida: z
    .string()
    .refine((date) => new Date(date).toString() !== "Invalid Date", {
      message: "Por favor ingrese una fecha valida",
    }),
  fechaLlegada: z
    .string()
    .refine((date) => new Date(date).toString() !== "Invalid Date", {
      message: "Por favor ingrese una fecha valida",
    }),
  lugarSalida: z.string().min(1, {
    message: "Por favor ingrese un lugar de salida",
  }),
  lugarDestino: z.string().min(1, {
    message: "Por favor ingrese un lugar de destino",
  }),
});
