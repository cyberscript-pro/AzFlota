export interface CargaBack {
  uuid: string;
  folio: string;
  comprobante: string;
  fecha: string;
  existencia: number;
  importe: number;
  consumo_dinero: number;
  vehiculoChapa: string;
}

export interface CargaFront {
  id: string;
  folio: string;
  comprobante: string;
  fecha: string;
  existencia: number;
  importe: number;
  consumo_dinero: number;
  vehiculo: {
    chapa: string;
  };
}

export class CargasCoincidenciasMapper {
  static fromApiToFront(cargas?: CargaBack[]): {
    dataFront: CargaFront[];
  } {
    const dataFront: CargaFront[] = [];

    let fechaFormateada: string;

    cargas?.map(
      (carga) => (
        (fechaFormateada = carga.fecha.split("T")[0]),
        dataFront.push({
          id: carga.uuid,
          folio: carga.folio,
          comprobante: carga.comprobante,
          fecha: fechaFormateada,
          existencia: carga.existencia,
          importe: carga.importe,
          consumo_dinero: carga.consumo_dinero,
          vehiculo: { chapa: carga.vehiculoChapa },
        })
      )
    );

    return {
      dataFront,
    };
  }
}
