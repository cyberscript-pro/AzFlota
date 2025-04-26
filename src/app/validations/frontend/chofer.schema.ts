import { z } from "zod";

export const choferSchema = z.object({
  nombre: z.string().min(2, { message: "El nombre es requerido" }).max(200, {
    message: "El nombre debe tener como maximo 200 caracteres",
  }),

  ci: z
    .string()
    .refine(value => /^\d{11}$/.test(value), {
      message: 'El carnet debe contener exactamente 11 dígitos numéricos'
    })
    .transform(val => val.trim()),

  licencia: z.string().optional(),
});
