import { z } from "zod";

export const choferSchema = z.object({
  nombre: z.string().min(2, { message: "El nombre es requerido" }).max(200, {
    message: "El nombre debe tener como maximo 200 caracteres",
  }),

  edad: z
    .string()
    .refine((value) => /^\d{2}$/.test(value), {
      message: "La edad debe contener exactamente 2 dígitos numéricos",
    })
    .transform((val) => val.trim()),

  sexo: z.string().min(1, "Selecciona el sexo"),

  ci: z
    .string()
    .refine((value) => /^\d{11}$/.test(value), {
      message: "El carnet debe contener exactamente 11 dígitos numéricos",
    })
    .transform((val) => val.trim()),

  licencia: z
    .string()
    .refine((value) => /^\d{6}$/.test(value), {
      message: "El licencia debe contener exactamente 6 dígitos numéricos",
    })
    .transform((val) => val.trim()),

  telefono: z
    .string()
    .refine((value) => /^\d{8}$/.test(value), {
      message: "El teléfono debe contener exactamente 8 dígitos numéricos",
    })
    .transform((val) => val.trim()),
});
