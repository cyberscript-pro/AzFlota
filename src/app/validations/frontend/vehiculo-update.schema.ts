import { z } from "zod";

export const vehiculoSchemaUpdate = z.object({
  chapa: z.string().min(7).max(8).optional(),
  marca: z.string().min(3).max(50).optional(),
  tipo: z.string().min(3).max(50).optional(),
  chofer: z.string().min(3).max(50).optional(),
  tarjeta: z.string().min(3).max(50).optional(), 
  area: z.string().min(3).max(50).optional(),
})