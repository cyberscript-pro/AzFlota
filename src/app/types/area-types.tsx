type Vehiculo = {
  chapa: string;
};

export interface AreaTrabajoBack {
  uuid: string;
  nombre: string;
  centro_costo: string;
  jefe: string;
  vehiculos?: Vehiculo[];
}

export interface AreaTrabajoFront {
  id: string;
  nombre: string;
  centro_costo: string;
  jefe: string;
  vehiculos?: Vehiculo[];
}

export type AreaTrabajoPost = {
  nombre: string;
  centro_costo: string;
  jefe: string;
};
