import useApiGet from "@/app/hooks/useApiGet";
import { CargasMapper } from "../mappers/cargas.mapper";
import { GenerateExcel } from "../utils/GenerateExcel";
import { CargaBack } from "@/app/types/cargas-types";

function GenerateData() {
  const { loading, data } = useApiGet<CargaBack>({
    url: "/api/control-cargas?page=1",
  });

  const { dataFront } = CargasMapper.fromApiToFront(data);

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
