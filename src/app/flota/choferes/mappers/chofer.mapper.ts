import { DataUpdate } from "../components/TableComponent";
import { Chofer, ChoferFront } from "../../../types/choferes-types";

export class ChoferMapper {
  static fromApiToFront(choferes?: Chofer[]): { dataFront: ChoferFront[] } {
    const dataFront: ChoferFront[] = [];

    choferes?.map((chofer) =>
      dataFront.push({
        nombre: chofer.nombre,
        edad: chofer.edad.toString(),
        sexo: chofer.sexo,
        ci: chofer.ci,
        licencia: chofer.licencia,
        telefono: chofer.telefono,
        vehiculos: chofer.vehiculos,
      })
    );

    return {
      dataFront,
    };
  }
}
