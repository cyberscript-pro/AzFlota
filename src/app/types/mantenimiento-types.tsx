type Vehiculo = {
  chapa: string;
};

export type VehiculoMantenimientoBack = {
  uuid: string;
  descripcion: string;
  motivo: string;
  inicio: string;
  fin: string;
  vehiculo: Vehiculo;
};

export type VehiculoMantenimientoFront = {
  id: string;
  descripcion: string;
  motivo: string;
  inicio: string;
  fin: string;
  vehiculo: Vehiculo;
};

export type VehiculoMantenimientoPost = {
  descripcion: string;
  inicio: string;
  fin: string;
  vehiculoChapa: string;
};
