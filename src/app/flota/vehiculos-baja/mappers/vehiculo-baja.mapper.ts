import {
  VehiculoBaja,
  VehiculoBajaFront,
} from "@/app/types/vehiculo-baja-types";

export class VehiculoBajaMapper {
  static fromApiToFront(bajas?: VehiculoBaja[]): {
    dataFront: VehiculoBajaFront[];
  } {
    const dataFront: VehiculoBajaFront[] = [];
    let fechaBaja: string;

    bajas?.map(
      (baja) => (
        (fechaBaja = baja.fecha_baja.split("T")[0]),
        dataFront.push({
          chapa: baja.vehiculo.chapa,
          marca: baja.vehiculo.marca,
          tipo: baja.vehiculo.tipo,
          baja: fechaBaja,
        })
      )
    );

    return {
      dataFront,
    };
  }
}
