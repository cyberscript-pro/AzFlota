import { z } from "zod";

export const areaSchemaPost = z.object({
    nombre: z
        .string()
        .min(2, {
            message: "El nombre es requerido"
        }),
    centro_costo: z
        .string()
        .min(2, {
            message: "El centro de costo es requerido"
        }),
    jefe: z
        .string()
        .min(2, {
            message: "El nombre del jefe es requerido"
        }),
});
