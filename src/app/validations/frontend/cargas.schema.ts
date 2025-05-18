import { z } from "zod";

export const controlCargasSchema = z.object({
  folio: z.string().min(1),
  comprobante: z.string().min(1),
  fecha: z.string()
  .refine((date) => new Date(date).toString() !== "Invalid Date", {
    message: "Por favor ingrese una fecha valida",
  }),
  importe: z.string().min(1),
  consumo_dinero: z.string().min(1),
  vehiculoChapa: z.string().min(1),
}) 