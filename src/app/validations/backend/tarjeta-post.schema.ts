import { z } from "zod";

const State = ["Active", "Inactive", "Blocked", "Expired"] as const;

export const tarjetaSchemaPost = z.object({
  numero: z.string().min(2),
  pin: z.number().int().positive(),
  estado: z.enum(State).optional(),
  fecha_vencimiento: z
    .string()
    .refine((date) => new Date(date).toString() !== "Invalid Date", {
      message: "Por favor ingrese una fecha valida",
    }),
});

export const dateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/)
  .transform((val) => new Date(`${val}T00:00:00Z`)); 
