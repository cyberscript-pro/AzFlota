import { LoginInputs } from "@/app/page";
import bcrypt from "bcryptjs";
import { z } from "zod";

export const userSchemaLogin = z
  .object({
    nickname: z
      .string()
      .min(2, { message: "El nombre de usuario es requerido" })
      .max(200, {
        message: "El nombre de usuario debe tener como maximo 200 caracteres",
      }),

    password: z.string().min(8, {
      message: "La contraseña es requerida",
    }),
  });
