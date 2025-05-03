import { z } from "zod";

export const choferSchemaUpdate = z.object({
  nombre: z
    .string({ required_error: "El nombre es requerido" })
    .min(2)
    .max(200)
    .optional(),

  edad: z.number({ required_error: "La edad es requerida" }).positive(), 
  
  sexo: z.enum(['M', 'F'], { required_error: "El sexo es requerido" }),

  ci: z
    .string()
    .refine((value) => /^\d{11}$/.test(value), {
      message: "El carnet debe contener exactamente 11 dígitos numéricos",
    })
    .transform((val) => val.trim())
    .optional(),

  licencia: z.string()
    .refine(value => /^\d{6}$/.test(value), {
      message: 'El licencia debe contener exactamente 6 dígitos numéricos'
    })
    .transform(val => val.trim())
    .optional(),

  telefono: z.string()
    .refine(value => /^\d{8}$/.test(value), {
      message: 'El teléfono debe contener exactamente 8 dígitos numéricos'
    })
    .transform(val => val.trim())
    .optional(),

  isAvailable: z.boolean().optional(),
});
