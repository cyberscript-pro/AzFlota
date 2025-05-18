import useApiGet from "@/app/hooks/useApiGet";
import { VehiculoBack } from "../../../types/vehiculo-types";
import { VehiculoMapper } from "../mappers/vehiculos.mapper";
import { GenerateExcel } from "../utils/GenerateExcel";

function GenerateData() {
  const { loading, data } = useApiGet<VehiculoBack>({
    url: "/api/vehiculos?page=1",
  });

  const { dataFront } = VehiculoMapper.fromApiToFront(data);


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
