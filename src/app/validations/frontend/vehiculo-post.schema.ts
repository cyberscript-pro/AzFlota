import { z } from "zod";

export const vehiculoSchemaPost = z.object({
  chapa: z
    .string()
    .min(6, { message: "La chapa del vehiculo es requerida" })
    .max(8, { message: "La chapa debe tener como maximo 7 caracteres" })
    .refine(
      async (chapa) => {
        if (chapa.length >= 6 && chapa.length <= 8) {
          const response = await fetch(
            `/api/vehiculos/checking?chapa=${chapa}`
          );
          const data = await response.json();
          return !data.chapa;
        }
      },
      {
        message: "Chapa ya registrada",
      }
    ),
  marca: z
    .string()
    .min(3, { message: "La marca de vehiculo es requerida" })
    .max(50),
  tipo: z
    .string()
    .min(3, { message: "El tipo de vehiculo es requerido" })
    .max(50),
  consumo_km: z.string().min(1, {
    message: "El consumo en (Km) por litro del vehiculo es requerido",
  }),
  chofer: z
    .string()
    .min(3, { message: "Por favor seleccione un chofer" })
    .max(50),
  tarjeta: z
    .string()
    .min(3, { message: "Por favor seleccione una tarjeta de combustible" })
    .max(50),
  area: z
    .string()
    .min(3, { message: "Por favor seleccione un area de trabajo" })
    .max(50),
});

export const vehiculoSchemaUpdate = z.object({
  marca: z
    .string()
    .min(3, { message: "La marca de vehiculo es requerida" })
    .max(50),
  tipo: z
    .string()
    .min(3, { message: "El tipo de vehiculo es requerido" })
    .max(50),
  consumo_km: z.string().min(1, {
    message: "El consumo en (Km) por litro del vehiculo es requerido",
  }),
  chofer: z
    .string()
    .min(3, { message: "Por favor seleccione un chofer" })
    .max(50),
  tarjeta: z
    .string()
    .min(3, { message: "Por favor seleccione una tarjeta de combustible" })
    .max(50),
  area: z
    .string()
    .min(3, { message: "Por favor seleccione un area de trabajo" })
    .max(50),
});
