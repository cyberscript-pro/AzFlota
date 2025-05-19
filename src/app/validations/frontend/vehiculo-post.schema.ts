import { z } from "zod";

export const vehiculoSchemaPost = z.object({
  chapa: z.string().min(6).max(8),
  marca: z.string().min(3).max(50),
  tipo: z.string().min(3).max(50),
  consumo_km: z.string(),
  chofer: z.string().min(3).max(50),
  tarjeta: z.string().min(3).max(50),
  area: z.string().min(3).max(50),
});
