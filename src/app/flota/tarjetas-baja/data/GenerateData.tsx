import useApiGet from "@/app/hooks/useApiGet";
import { AreaTrabajoBack } from "../../../types/area-types";
import { TarjetaBajaMapper } from "../mappers/tarjeta-baja.mapper";
import { GenerateExcel } from "../utils/GenerateExcel";
import { TarjetaBaja } from "@/app/types/tarjetas-baja-types";

function GenerateData() {
  const { loading, data } = useApiGet<TarjetaBaja>({
    url: "/api/tarjetas-combustible-baja?page=1",
  });

  const { dataFront } = TarjetaBajaMapper.fromApiToFront(data);

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
