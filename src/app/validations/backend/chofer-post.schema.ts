import { z } from "zod";

export const choferSchemaPost = z.object({
  nombre: z.string({ required_error: "El nombre es requerido" }).min(2).max(200), 

  ci: z
    .string()
    .refine(value => /^\d{11}$/.test(value), {
      message: 'El carnet debe contener exactamente 11 dígitos numéricos'
    })
    .transform(val => val.trim()),

  licencia: z.string().optional(),
});