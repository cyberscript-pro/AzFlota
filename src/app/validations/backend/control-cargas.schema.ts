import { z } from "zod";

export const controlCargasSchema = z.object({
  folio: z.string().min(1),
  comprobante: z.string().min(1),
  fecha: z
    .string()
    .refine((date) => new Date(date).toString() !== "Invalid Date", {
      message: "Por favor ingrese una fecha valida",
    }),
  existencia: z.number().min(0),
  importe: z.number().min(1),
  consumo_dinero: z.number().min(1),
  vehiculoChapa: z.string().min(1),
});

export const dateSchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/)
  .transform((val) => new Date(`${val}T00:00:00Z`));
