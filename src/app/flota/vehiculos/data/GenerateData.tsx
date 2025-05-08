import useApiGet from "@/app/hooks/useApiGet";
import { VehiculoBack } from "../../../types/vehiculo-types";
import { AreaTrabajoMapper } from "../mappers/vehiculos.mapper";
import GeneratePDF from "../utils/GeneratePDF";
import { GenerateExcel } from "../utils/GenerateExcel";

function GenerateData() {
  const { loading, data } = useApiGet<VehiculoBack>({
    url: "/api/vehiculos?page=1",
  });

  const { dataFront } = AreaTrabajoMapper.fromApiToFront(data);

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
