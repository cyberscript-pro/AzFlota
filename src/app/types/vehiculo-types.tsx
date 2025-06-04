import { AreaTrabajoBack } from "./area-types";
import { Chofer } from "./choferes-types";
import { Tarjeta } from "./tarjeta-types";

export interface VehiculoBack {
  chapa: string;
  marca: string;
  tipo: string;
  consumo_km: string;
  chofer: Chofer;
  tarjeta: Tarjeta;
  areaTrabajo: AreaTrabajoBack;
}

export interface VehiculoFront {
  chapa: string;
  marca: string;
  tipo: string;
  consumo_km: string;
  chofer: Chofer;
  tarjeta: Tarjeta;
  area: AreaTrabajoBack;
}

export type VehiculoPost = {
  chapa: string;
  marca: string;
  tipo: string;
  consumo_km: string;
  chofer: string;
  tarjeta: string;
  area: string;
};

export type VehiculoUpdate = {
  id: string;
  chapa: string;
  marca: string;
  tipo: string;
  consumo_km: string;
  chofer: string;
  tarjeta: string;
  area: string;
};

export type DataViajesBack = {
  uuid: string;
  fechaSalida: string;
  fechaLlegada: string;
  lugarSalida: string;
  lugarDestino: string;
  kmRecorridos: number;
  combustibleConsumido: number;
  vehiculoChapa: string;
};

export type DataViajesFront = {
  id: string;
  fechaSalida: string;
  fechaLlegada: string;
  lugarSalida: string;
  lugarDestino: string;
  kmRecorridos: number;
  combustibleConsumido: number;
  vehiculoChapa: string;
};

export type DataViajesPost = {
  fechaSalida: string;
  fechaLlegada: string;
  lugarSalida: string;
  lugarDestino: string;
  kmRecorridos: number;
  combustibleConsumido: number;
  vehiculoChapa: string;
};

export type InputsDataViajes = {
  fechaSalida: string;
  fechaLlegada: string;
  lugarSalida: string;
  lugarDestino: string;
};

export type Inputs = {
  chapa: string;
  marca: string;
  tipo: string;
  consumo_km: string;
  chofer: string;
  tarjeta: string;
  area: string;
};

export type InputsUpdate = {
  marca: string;
  tipo: string;
  consumo_km: string;
  chofer: string;
  tarjeta: string;
  area: string;
};
