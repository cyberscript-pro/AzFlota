import useApiGet from "@/app/hooks/useApiGet";
import { AreaTrabajoBack } from "../../../types/area-types";
import { TarjetaBajaMapper } from "../mappers/tarjeta-baja.mapper";
import GeneratePDF from "../utils/GeneratePDF";
import { GenerateExcel } from "../utils/GenerateExcel";
import { TarjetaBaja } from "@/app/types/tarjetas-baja-types";

function GenerateData() {
  const { loading, data } = useApiGet<TarjetaBaja>({
    url: "/api/area-trabajo?page=1",
  });

  const { dataFront } = TarjetaBajaMapper.fromApiToFront(data);

  const { generatePDF } = GeneratePDF({ data: dataFront });

  const generate = async (value: string) => {
    if (!loading) {
      if (value === "pdf") {
        generatePDF();
      } else if (value === "excel") {
        await GenerateExcel({ data: dataFront });
      }
    }
  };

  return {
    generate,
  };
}

export default GenerateData;
