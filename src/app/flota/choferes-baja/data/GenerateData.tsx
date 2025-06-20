import useApiGet from "@/app/hooks/useApiGet";
import { AreaTrabajoBack } from "../../../types/area-types";
import { ChoferesBajaMapper } from "../mappers/choferes-baja.mapper";
import { GenerateExcel } from "../utils/GenerateExcel";
import { TarjetaBaja } from "@/app/types/tarjetas-baja-types";
import { ChoferBaja } from "@/app/types/chofer-baja.types";

function GenerateData() {
  const { loading, data } = useApiGet<ChoferBaja>({
    url: "/api/choferes-despedidos?page=1",
  });

  const { dataFront } = ChoferesBajaMapper.fromApiToFront(data);

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
