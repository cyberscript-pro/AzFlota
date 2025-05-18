import { Tarjeta, TarjetaFront } from "../../../types/tarjeta-types";

function mapStatus(backendStatus: string) {
  switch (backendStatus) {
    case "Active":
      return "Activa";
    case "Inactive":
      return "Inactiva";
    case "Blocked":
      return "Bloqueada";
    case "Expired":
      return "Expirada";
    default:
      return backendStatus;
  }
}
export class TarjetaCombustibleMapper {
  static fromApiToFront(tarjetas?: Tarjeta[]): { dataFront: TarjetaFront[] } {
    const dataFront: TarjetaFront[] = [];

    let fechaFormateada: string;
    tarjetas?.map(
      (tarjeta) => (
        (fechaFormateada = tarjeta.fecha_vencimiento.split("T")[0]),
        dataFront.push({
          numero: tarjeta.numero,
          pin: tarjeta.pin,
          estado: mapStatus(tarjeta.estado),
          fecha_vencimiento: fechaFormateada,
          saldo: tarjeta.saldo,
          tipo: tarjeta.tipo,
          vehiculo: tarjeta.vehiculo,
        })
      )
    );

    return {
      dataFront,
    };
  }
}
