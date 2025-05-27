import {
  VehiculoBaja,
  VehiculoBajaFront,
} from "@/app/types/vehiculo-baja-types";

export class VehiculoBajaMapper {
  static fromApiToFront(bajas?: VehiculoBaja[]): {
    dataFront: VehiculoBajaFront[];
  } {
    const dataFront: VehiculoBajaFront[] = [];

    bajas?.map((baja) =>
      dataFront.push({
        chapa: baja.vehiculo.chapa,
        marca: baja.vehiculo.marca,
        tipo: baja.vehiculo.tipo,
      })
    );

    return {
      dataFront,
    };
  }
}
