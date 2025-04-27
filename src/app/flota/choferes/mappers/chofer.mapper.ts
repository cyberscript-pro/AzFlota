import { Chofer, ChoferExcel, ChoferFront } from "../utils/types";

export class ChoferMapper {
  static fromApiToExcel(choferes?: ChoferFront[]): { dataMap: ChoferExcel[] } {
    const dataMap: ChoferExcel[] = [];

    choferes?.map((chofer) =>
      dataMap.push({
        nombre: chofer.nombre,
        ci: chofer.ci,
        licencia: chofer.licencia ?? "",
      })
    );

    return {
      dataMap,
    };
  }

  static fromApiToFront(choferes?: Chofer[]): { dataFront: ChoferFront[] } {
    const dataFront: ChoferFront[] = [];

    choferes?.map((chofer) =>
      dataFront.push({
        id: chofer.uuid,
        nombre: chofer.nombre,
        ci: chofer.ci,
        licencia: chofer.licencia ?? "",
      })
    );

    return {
      dataFront,
    };
  }
}
