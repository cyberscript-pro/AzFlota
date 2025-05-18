import {
  VehiculoMantenimientoBack,
  VehiculoMantenimientoFront,
} from "@/app/types/mantenimiento-types";

export class MantenimientoMapper {
  static fromApiToFront(mantenimientos?: VehiculoMantenimientoBack[]): {
    dataFront: VehiculoMantenimientoFront[];
  } {
    const dataFront: VehiculoMantenimientoFront[] = [];

    mantenimientos?.map((mantenimiento) =>
      dataFront.push({
        id: mantenimiento.uuid,
        descripcion: mantenimiento.descripcion,
        inicio: mantenimiento.inicio,
        fin: mantenimiento.fin,
        vehiculo: mantenimiento.vehiculo,
      })
    );

    return {
      dataFront,
    };
  }
}
