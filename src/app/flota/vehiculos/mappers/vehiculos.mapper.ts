import { DataUpdate } from "../components/TableComponent";
import { VehiculoBack, VehiculoFront } from "../../../types/vehiculo-types";

export class AreaTrabajoMapper {
  static fromApiToFront(vehiculos?: VehiculoBack[]): {
    dataFront: VehiculoFront[];
  } {
    const dataFront: VehiculoFront[] = [];

    vehiculos?.map((vehiculo) =>
      dataFront.push({
        id: vehiculo.uuid,
        chapa: vehiculo.chapa,
        marca: vehiculo.marca,
        tipo: vehiculo.tipo,
        chofer: vehiculo.chofer,
        tarjeta: vehiculo.tarjeta,
        area: vehiculo.areaTrabajo,
      })
    );

    return {
      dataFront,
    };
  }
}
