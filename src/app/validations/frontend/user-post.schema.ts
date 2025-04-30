import { z } from "zod";

const role = ["ECONOMICO", "DIRECTOR", "ENCARGADO", "SUPERVISOR"] as const;

export const userSchemaPost = z
  .object({
    nickname: z
      .string()
      .min(2, { message: "El nombre de usuario es requerido" })
      .max(200, {
        message: "El nombre de usuario debe tener como maximo 200 caracteres",
      })
      .refine(
        async (nickname) => {
          if (nickname.length > 2) {
            const response = await fetch(
              `http://localhost:3000/api/users/checking?nickname=${nickname}`
            );
            const data = await response.json();
            return !data.exists;
          }
        },
        {
          message: "El nombre de usuario ya existe",
        }
      ),

    nombre: z.string().min(2, { message: "El nombre es requerido" }).max(200, {
      message: "El nombre debe tener como maximo 200 caracteres",
    }),

    ci: z
      .string()
      .refine((value) => /^\d{11}$/.test(value), {
        message: "El carnet debe contener exactamente 11 dígitos numéricos",
      })
      .transform((val) => val.trim())
      .refine(
        async (ci) => {
          if (ci.length == 11) {
            const response = await fetch(
              `http://localhost:3000/api/users/checking?ci=${ci}`
            );
            const data = await response.json();
            return !data.exists;
          }
        },
        {
          message: "El carnet de identidad ya existe",
        }
      ),

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

    confirmPassword: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });
