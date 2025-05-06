import { DataUpdate } from "../components/TableComponent";
import { AreaTrabajoBack, AreaTrabajoFront } from "../utils/types";

export class AreaTrabajoMapper {

  static fromApiToFront(areas?: AreaTrabajoBack[]): { dataFront: AreaTrabajoFront[] } {
    const dataFront: AreaTrabajoFront[] = [];

    areas?.map((area) =>
      dataFront.push({
        id: area.uuid,
        nombre: area.nombre,
        centro_costo: area.centro_costo,
        jefe: area.jefe
      })
    );

    return {
      dataFront,
    };
  }

}
