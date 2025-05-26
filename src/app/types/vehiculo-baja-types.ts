export type VehiculoBaja = {
    vehiculoChapa: string;
    fecha_baja: Date;
    vehiculo: {
        chapa: string;
        marca: string;
        tipo: string;
    };
}; 