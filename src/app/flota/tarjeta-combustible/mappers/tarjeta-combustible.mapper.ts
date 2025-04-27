import { Inputs } from "../data/FormDataPost";
import {
  TarjetaCombustible,
  TarjetaCombustibleExcel,
  TarjetaCombustibleFront,
  TarjetaCombustiblePost,
} from "../utils/types";

enum State {
  ACTIVO = "Activo",
  INACTIVO = "Inactivo",
  BLOQUEADO = "Bloqueado",
  EXPIRADO = "Expirado",
}

enum StateToApi {
  ACTIVE = "Active",
  INACTIVE = "Inactive",
  BLOCKED = "Blocked",
  EXPIRED = "Expired",
}

export class TarjetaCombustibleMapper {
  static fromApiToExcel(tarjetas?: TarjetaCombustibleFront[]): {
    dataMap: TarjetaCombustibleExcel[];
  } {
    const dataMap: TarjetaCombustibleExcel[] = [];

    tarjetas?.map((tarjeta) =>
      dataMap.push({
        numero: tarjeta.numero,
        pin: tarjeta.pin,
        estado: tarjeta.estado ?? "",
        fecha_vencimiento: tarjeta.fecha_vencimiento,
      })
    );

    return {
      dataMap,
    };
  }

  static fromApiToFront(tarjetas?: TarjetaCombustible[]): {
    dataFront: TarjetaCombustibleFront[];
  } {
    const dataFront: TarjetaCombustibleFront[] = [];

    const stateMap: Record<string, State> = {
      Active: State.ACTIVO,
      Inactive: State.INACTIVO,
      Blocked: State.BLOQUEADO,
      Expired: State.EXPIRADO,
    };

    tarjetas?.map((tarjeta) =>
      dataFront.push({
        id: tarjeta.uuid,
        numero: tarjeta.numero,
        pin: tarjeta.pin,
        estado: stateMap[tarjeta.estado],
        fecha_vencimiento: tarjeta.fecha_vencimiento,
      })
    );

    return {
      dataFront,
    };
  }

  // static fromFrontToApi(tarjeta: Inputs): TarjetaCombustiblePost {
  //   let dataFront: TarjetaCombustiblePost;

  //   const stateMap: Record<string, string> = {
  //     Activo: StateToApi.ACTIVE,
  //     Inactivo: StateToApi.INACTIVE,
  //     Bloqueado: StateToApi.BLOCKED,
  //     Expirado: StateToApi.EXPIRED,
  //   };

  //   dataFront = {
  //     numero: tarjeta.numero,
  //     pin: tarjeta.pin,
  //     estado: stateMap[tarjeta.estado ?? 'Activo'],
  //     fecha_vencimiento: tarjeta.fecha_vencimiento
  //   }

  //   return dataFront;
  // }
}
