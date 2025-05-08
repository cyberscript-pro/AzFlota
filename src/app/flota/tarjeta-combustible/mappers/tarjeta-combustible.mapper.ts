import { Tarjeta, TarjetaFront } from "../../../types/tarjeta-types";

export class TarjetaCombustibleMapper {
  static fromApiToFront(tarjetas?: Tarjeta[]): { dataFront: TarjetaFront[] } {
    const dataFront: TarjetaFront[] = [];

    let fechaFormateada: string;
    tarjetas?.map(
      (tarjeta) => (
        (fechaFormateada = tarjeta.fecha_vencimiento.split("T")[0]),
        dataFront.push({
          id: tarjeta.uuid,
          numero: tarjeta.numero,
          pin: tarjeta.pin,
          estado: tarjeta.estado,
          fecha_vencimiento: fechaFormateada,
          vehiculo: tarjeta.vehiculo,
        })
      )
    );

    return {
      dataFront,
    };
  }
}
