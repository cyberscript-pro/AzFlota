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
    .transform((val) => val.trim())
    .refine(
      async (ci) => {
        if (ci.length == 11) {
          const response = await fetch(`/api/choferes/checking?ci=${ci}`);
          const data = await response.json();
          return !data.ci;
        }
      },
      {
        message:
          "El carnet de identidad ya registrado compuebe los choferes despedidos",
      }
    ),

  licencia: z
    .string()
    .refine((value) => /^\d{6}$/.test(value), {
      message: "El licencia debe contener exactamente 6 dígitos numéricos",
    })
    .transform((val) => val.trim())
    .refine(
      async (licencia) => {
        if (licencia.length == 6) {
          const response = await fetch(
            `/api/choferes/checking?licencia=${licencia}`
          );
          const data = await response.json();
          return !data.licencia;
        }
      },
      {
        message: "Licencia ya registrada compruebe los choferes despedidos",
      }
    ),

  telefono: z
    .string()
    .refine((value) => /^\d{8}$/.test(value), {
      message: "El teléfono debe contener exactamente 8 dígitos numéricos",
    })
    .transform((val) => val.trim()),
});
