enum State {
  ACTIVO = 'Activo',
  INACTIVO = 'Inactivo',
  BLOQUEADO = 'Bloqueado',
  EXPIRADO = 'Expirado'
}

export interface TarjetaCombustible {
  uuid: string;
  numero: string;
  pin: string;
  estado: "Active" | "Inactive" | "Blocked" | "Expired";
  fecha_vencimiento: string;
}

export interface TarjetaCombustibleFront {
  id: string;
  numero: string;
  pin: string;
  estado: State;
  fecha_vencimiento: string;
}

export type TarjetaCombustiblePost = {
  numero: string;
  pin: string;
  estado: State;
  fecha_vencimiento: string;
};

export interface TarjetaCombustibleExcel {
  numero: string;
  pin: string;
  estado: State;
  fecha_vencimiento: string;
}
