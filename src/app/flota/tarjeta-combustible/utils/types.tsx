export interface Tarjeta {
  uuid: string;
  numero: string;
  pin: string;
  estado: string;
  fecha_vencimiento: string;
}

export interface TarjetaFront {
  id: string;
  numero: string;
  pin: string;
  estado: string;
  fecha_vencimiento: string;
}

export interface TarjetaPost {
  numero: string;
  pin: string;
  estado: string;
  fecha_vencimiento: string;
}

export type TarjetaUpdate = Partial<Omit<TarjetaPost, 'pin'>> & { pin?: number };