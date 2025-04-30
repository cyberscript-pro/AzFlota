import { Chofer, ChoferExcel, ChoferFront } from "../utils/types";

export class ChoferMapper {
  // static fromApiToExcel(choferes?: ChoferFront[]): {dataExcel}
  // {
  //   const dataExcel: ChoferExcel[] = [];

  //   choferes?.map((chofer) =>
  //     dataExcel.push({
  //       nombre: chofer.nombre,
  //       ci: chofer.ci,
  //       licencia: chofer.licencia ?? "",
  //     })
  //   );

  //   return dataExcel;
  // }

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
