import { z } from "zod";

const State = ["Active", "Inactive", "Blocked", "Expired"] as const;

export const tarjetaSchemaPost = z.object({
  numero: z.string()
    .refine((value) => /^\d{7}$/.test(value), {
      message: "El numero de tarjeta debe contener exactamente 7 dígitos numéricos",
    })
    .transform((val) => val.trim()),
  pin: z
    .string()
    .refine((value) => /^\d{4}$/.test(value), {
      message: "El pin debe contener exactamente 4 dígitos numéricos",
    })
    .transform((val) => val.trim()),
  estado: z.enum(State).optional(),
  fecha_vencimiento: z
    .string()
    .refine((date) => new Date(date).toString() !== "Invalid Date", {
      message: "Por favor ingrese una fecha valida",
    }),
});

export const tarjetaSchemaUpdate = z.object({
  numero: z.string()
    .refine((value) => /^\d{7}$/.test(value), {
      message: "El numero de tarjeta debe contener exactamente 7 dígitos numéricos",
    })
    .transform((val) => val.trim())
    .optional(),
  pin: z
    .number()
    .min(1000)
    .max(9999)
    .optional(),
  estado: z.enum(State).optional(),
  fecha_vencimiento: z
    .string()
    .refine((date) => new Date(date).toString() !== "Invalid Date", {
      message: "Por favor ingrese una fecha valida",
    })
    .optional(),
});

export const dateSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/)
  .transform((val) => new Date(`${val}T00:00:00Z`)); 


