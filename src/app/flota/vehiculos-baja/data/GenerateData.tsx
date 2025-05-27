import useApiGet from "@/app/hooks/useApiGet";
import { AreaTrabajoBack } from "../../../types/area-types";
import { VehiculoBajaMapper } from "../mappers/vehiculo-baja.mapper";
import GeneratePDF from "../utils/GeneratePDF";
import { GenerateExcel } from "../utils/GenerateExcel";
import { TarjetaBaja } from "@/app/types/tarjetas-baja-types";
import { VehiculoBaja } from "@/app/types/vehiculo-baja-types";

function GenerateData() {
  const { loading, data } = useApiGet<VehiculoBaja>({
    url: "/api/vehiculos-baja?page=1",
  });

  const { dataFront } = VehiculoBajaMapper.fromApiToFront(data);

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
