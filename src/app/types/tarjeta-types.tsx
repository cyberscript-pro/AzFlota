export type Inputs = {
  numero: string;
  pin: string;
  estado: string;
  fecha_vencimiento: string;
  saldo: string;
  tipo: string;
};

type Vehiculo = {
  chapa: string;
};

export interface Tarjeta {
  numero: string;
  pin: string;
  estado: string;
  fecha_vencimiento: string;
  saldo: string;
  tipo: string;
  vehiculo?: Vehiculo;
}

export interface TarjetaFront {
  numero: string;
  pin: string;
  estado: string;
  fecha_vencimiento: string;
  saldo: string;
  tipo: string;
  vehiculo?: Vehiculo;
}

export interface TarjetaPost {
  numero: string;
  pin: string;
  estado: string;
  fecha_vencimiento: string;
  saldo: number;
  tipo: string;
}

export type TarjetaUpdate = Partial<TarjetaPost>;
