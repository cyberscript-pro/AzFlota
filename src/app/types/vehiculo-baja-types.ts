export type VehiculoBaja = {
  vehiculo: {
    chapa: string;
    marca: string;
    tipo: string;
  };
  fecha_baja: string;
};

export type VehiculoBajaFront = {
  chapa: string;
  marca: string;
  tipo: string;
  baja: string;
};
