import { z } from "zod";

export const choferSchema = z.object({

    nombre: z.string().min(2, {
        message: 'El nombre debe tener al menos dos caracteres'
    }).max(200, {
        message: 'El nombre debe tener como maximo 200 caracteres'
    }),

    ci: z.string().min(11, {
        message: 'El carnet de identidad solo puede contener 11 caracteres'
    }).max(11, {
        message: 'El carnet de identidad debe contener 11 caracteres'
    }).refine(ci => !isNaN(parseInt(ci)), {
        message: 'El carnet de identidad solo puede contener numeros'
    }),

    licencia: z.string().optional()
})