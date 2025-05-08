import { AreaTrabajoBack } from "./area-types";
import { Chofer } from "./choferes-types";
import { Tarjeta } from "./tarjeta-types";

export interface VehiculoBack {
  uuid: string;
  chapa: string;
  marca: string;
  tipo: string;
  chofer: Chofer;
  tarjeta: Tarjeta;
  areaTrabajo: AreaTrabajoBack;
}

export interface VehiculoFront {
  id: string;
  chapa: string;
  marca: string;
  tipo: string;
  chofer: Chofer;
  tarjeta: Tarjeta;
  area: AreaTrabajoBack;
}

export type VehiculoPost = {
  chapa: string;
  marca: string;
  tipo: string;
  chofer: string;
  tarjeta: string;
  area: string;
};

export type VehiculoUpdate = {
  id: string;
  chapa: string;
  marca: string;
  tipo: string;
  chofer: string;
  tarjeta: string;
  area: string;
};

export type Inputs = {
  chapa: string;
  marca: string;
  tipo: string;
  chofer: string;
  tarjeta: string;
  area: string;
};
