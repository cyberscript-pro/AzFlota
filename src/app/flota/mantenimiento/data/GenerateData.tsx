import useApiGet from "@/app/hooks/useApiGet";
import { AreaTrabajoBack } from "../../../types/area-types";
import { MantenimientoMapper } from "../mappers/mantenimiento.mapper";
import GeneratePDF from "../utils/GeneratePDF";
import { GenerateExcel } from "../utils/GenerateExcel";
import { VehiculoMantenimientoBack } from "@/app/types/mantenimiento-types";

function GenerateData() {
  const { loading, data } = useApiGet<VehiculoMantenimientoBack>({
    url: "/api/vehiculos-mantenimiento?page=1",
  });

  const { dataFront } = MantenimientoMapper.fromApiToFront(data);

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
