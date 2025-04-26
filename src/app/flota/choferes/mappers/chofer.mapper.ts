import { Chofer, ChoferExcel } from "../types";

export class ChoferMapper {
  static fromApiToExcel(choferes?: Chofer[]): {dataMap: ChoferExcel[]} {
    
    const dataMap: ChoferExcel[] = [];

    choferes?.map((chofer) => (
      dataMap.push({
        nombre: chofer.nombre,
        ci: chofer.ci,
        licencia: chofer.licencia ?? ''
      })
    ))
    
    return {
      dataMap
    };
  }
}