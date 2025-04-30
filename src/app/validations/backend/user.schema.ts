import { z } from "zod";

const role = ["ECONOMICO", "DIRECTOR", "ENCARGADO", "SUPERVISOR"] as const;

export const userSchemaBack = z
  .object({
    nickname: z
      .string()
      .min(2, { message: "El nombre de usuario es requerido" })
      .max(200, {
        message: "El nombre de usuario debe tener como maximo 200 caracteres",
      }),

    nombre: z.string().min(2, { message: "El nombre es requerido" }).max(200, {
      message: "El nombre debe tener como maximo 200 caracteres",
    }),

    ci: z
      .string()
      .refine((value) => /^\d{11}$/.test(value), {
        message: "El carnet debe contener exactamente 11 dígitos numéricos",
      })
      .transform((val) => val.trim()),

    role: z.enum(role, {
      errorMap: () => ({
        message: "Por favor seleccione un rol",
        path: ["role"],
      }),
    }),

    password: z
      .string()
      .min(8, { message: "La contraseña debe tener como minimo 8 caracteres" })
      .max(20, {
        message: "La contraseña debe tener como maximo 20 caracteres",
      }),
  });
