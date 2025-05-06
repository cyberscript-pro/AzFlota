export interface AreaTrabajoBack {
  uuid: string;
  nombre: string;
  centro_costo: string;
  jefe: string;
}

export interface AreaTrabajoFront {
  id: string;
  nombre: string;
  centro_costo: string;
  jefe: string;
}

export type AreaTrabajoPost = {
  nombre: string;
  centro_costo: string;
  jefe: string;
}