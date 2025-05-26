export type Vehiculo = {
  chapa: string;
  tarjeta: {
    numero: string;
    saldo: number;
  };
};

export interface CargaBack {
  uuid: string;
  folio: string;
  comprobante: string;
  fecha: string;
  existencia: number;
  importe: number;
  consumo_dinero: number;
  vehiculo: Vehiculo;
}

export interface CargaFront {
  id: string;
  folio: string;
  comprobante: string;
  fecha: string;
  existencia: number;
  importe: number;
  consumo_dinero: number;
  vehiculo: Vehiculo;
}

export interface CargaPost {
  folio: string;
  comprobante: string;
  fecha: string;
  existencia: number;
  importe: number;
  consumo_dinero: number;
  vehiculoChapa: string;
}

export type Inputs = {
  folio: string;
  comprobante: string;
  fecha: string;
  importe: string;
  consumo_dinero: string;
  vehiculoChapa: string;
};

export type DataUpdate = {
  id: string;
  folio: string;
  comprobante: string;
  fecha: string;
  importe: string;
  consumo_dinero: string;
  vehiculoChapa: string;
};
