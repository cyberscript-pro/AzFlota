import { CargaBack, CargaFront } from "@/app/types/cargas-types";

export class CargasMapper {
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
          vehiculo: carga.vehiculo,
        })
      )
    );

    return {
      dataFront,
    };
  }
}
