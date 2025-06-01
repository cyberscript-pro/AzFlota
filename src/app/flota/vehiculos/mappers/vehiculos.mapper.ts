import { DataUpdate } from "../components/TableComponent";
import {
  DataViajesBack,
  DataViajesFront,
  VehiculoBack,
  VehiculoFront,
} from "../../../types/vehiculo-types";

export class VehiculoMapper {
  static fromApiToFront(vehiculos?: VehiculoBack[]): {
    dataFront: VehiculoFront[];
  } {
    const dataFront: VehiculoFront[] = [];

    vehiculos?.map((vehiculo) =>
      dataFront.push({
        chapa: vehiculo.chapa,
        marca: vehiculo.marca,
        tipo: vehiculo.tipo,
        consumo_km: vehiculo.consumo_km,
        chofer: vehiculo.chofer,
        tarjeta: vehiculo.tarjeta,
        area: vehiculo.areaTrabajo,
      })
    );

    return {
      dataFront,
    };
  }

  static fromApiViajestoFront(viajes?: DataViajesBack[]): {
    dataFront: DataViajesFront[];
  } {
    const dataFront: DataViajesFront[] = [];

    let salida: string;
    let llegada: string;
    viajes?.map(
      (viaje) => (
        (salida = viaje.fechaSalida.split("T")[0]),
        (llegada = viaje.fechaLlegada.split("T")[0]),
        dataFront.push({
          id: viaje.uuid,
          fechaSalida: salida,
          fechaLlegada: llegada,
          lugarSalida: viaje.lugarSalida,
          lugarDestino: viaje.lugarDestino,
          kmRecorridos: viaje.kmRecorridos,
          combustibleConsumido: viaje.combustibleConsumido,
          vehiculoChapa: viaje.vehiculoChapa,
        })
      )
    );

    return {
      dataFront,
    };
  }
}
