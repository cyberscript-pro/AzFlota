import useApiGet from "@/app/hooks/useApiGet";
import { AreaTrabajoBack } from "../../../types/area-types";
import { VehiculoBajaMapper } from "../mappers/vehiculo-baja.mapper";
import { GenerateExcel } from "../utils/GenerateExcel";
import { TarjetaBaja } from "@/app/types/tarjetas-baja-types";
import { VehiculoBaja } from "@/app/types/vehiculo-baja-types";

function GenerateData() {
  const { loading, data } = useApiGet<VehiculoBaja>({
    url: "/api/vehiculos-baja?page=1",
  });

  const { dataFront } = VehiculoBajaMapper.fromApiToFront(data);

  const generate = async (value: string) => {
    if (!loading) {
      if (value === "excel") {
        await GenerateExcel({ data: dataFront });
      }
    }
  };

  return {
    generate,
  };
}

export default GenerateData;
