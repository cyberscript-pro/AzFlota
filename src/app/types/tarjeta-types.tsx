type Vehiculo = {
  chapa: string;
};

export interface Tarjeta {
  uuid: string;
  numero: string;
  pin: string;
  estado: string;
  fecha_vencimiento: string;
  vehiculo?: Vehiculo;
}

export interface TarjetaFront {
  id: string;
  numero: string;
  pin: string;
  estado: string;
  fecha_vencimiento: string;
  vehiculo?: Vehiculo;
}

export interface TarjetaPost {
  numero: string;
  pin: string;
  estado: string;
  fecha_vencimiento: string;
}

export type TarjetaUpdate = Partial<Omit<TarjetaPost, "pin">> & {
  pin?: number;
};
