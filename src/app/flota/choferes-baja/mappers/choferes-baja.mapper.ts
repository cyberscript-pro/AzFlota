import { ChoferBaja, ChoferBajaFront } from "@/app/types/chofer-baja.types";

export class ChoferesBajaMapper {
  static fromApiToFront(bajas?: ChoferBaja[]): {
    dataFront: ChoferBajaFront[];
  } {
    const dataFront: ChoferBajaFront[] = [];

    bajas?.map((baja) =>
      dataFront.push({
        ci: baja.chofer.ci,
        nombre: baja.chofer.nombre,
        telefono: baja.chofer.telefono,
        licencia: baja.chofer.licencia,
        edad: baja.chofer.edad,
        sexo: baja.chofer.sexo,
      })
    );

    return {
      dataFront,
    };
  }
}
