import { z } from "zod";

export const vehiculoSchemaPost = z.object({
  chapa: z.string().min(7).max(8),
  marca: z.string().min(3).max(50),
  tipo: z.string().min(3).max(50),
  chofer: z.string().min(3).max(50),
  tarjeta: z.string().min(3).max(50), 
  area: z.string().min(3).max(50),
})