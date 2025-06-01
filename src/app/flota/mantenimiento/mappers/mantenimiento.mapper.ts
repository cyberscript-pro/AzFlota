import {
  VehiculoMantenimientoBack,
  VehiculoMantenimientoFront,
} from "@/app/types/mantenimiento-types";

export class MantenimientoMapper {
  static fromApiToFront(mantenimientos?: VehiculoMantenimientoBack[]): {
    dataFront: VehiculoMantenimientoFront[];
  } {
    const dataFront: VehiculoMantenimientoFront[] = [];

    let fechaInicio: string;
    let fechaFin: string;
    mantenimientos?.map(
      (mantenimiento) => (
        (fechaInicio = mantenimiento.inicio.split("T")[0]),
        (fechaFin = mantenimiento.fin.split("T")[0]),
        dataFront.push({
          id: mantenimiento.uuid,
          descripcion: mantenimiento.descripcion,
          motivo: mantenimiento.motivo,
          inicio: fechaInicio,
          fin: fechaFin,
          vehiculo: mantenimiento.vehiculo,
        })
      )
    );

    return {
      dataFront,
    };
  }
}
