import { TarjetaBaja, TarjetaBajaFront } from "@/app/types/tarjetas-baja-types";

export class TarjetaBajaMapper {
  static fromApiToFront(bajas?: TarjetaBaja[]): {
    dataFront: TarjetaBajaFront[];
  } {
    const dataFront: TarjetaBajaFront[] = [];

    bajas?.map((baja) =>
      dataFront.push({
        numero: baja.tarjeta.numero,
        pin: baja.tarjeta.pin,
        estado: "Baja"
      })
    );

    return {
      dataFront,
    };
  }
}
