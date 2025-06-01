import { z } from "zod";

export const mantenimientoSchemaInicio = z.object({
  inicio: z.string().min(1, {
    message: "Fecha de inicio es requerida",
  }),
  motivo: z.string().min(1, {
    message: "Motivo es requerido",
  }),
})

export const mantenimientoSchemaFin = z.object({
  fin: z.string().min(1, {
    message: "Fecha de fin es requerida",
  }),
  descripcion: z.string().min(1, {
    message: "Descripcion es requerida",
  }),
})