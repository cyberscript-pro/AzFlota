import useApiGet from "@/app/hooks/useApiGet";
import { Tarjeta } from "../utils/types";
import { TarjetaCombustibleMapper } from "../mappers/tarjeta-combustible.mapper";
import GeneratePDF from "../utils/GeneratePDF";
import { GenerateExcel } from "../utils/GenerateExcel";

function GenerateData() {
  const { loading, data } = useApiGet<Tarjeta>({
    url: "http://localhost:3000/api/tarjetas-combustible?page=1",
  });

  const { dataFront } = TarjetaCombustibleMapper.fromApiToFront(data);

  const { generatePDF } = GeneratePDF({ data: dataFront });

  const generate = async(value: string) => {
    if (!loading) {
      if (value === "pdf") {
        generatePDF();
      } else if (value === "excel") {
        await GenerateExcel({ data: dataFront });
      }
    }
  };

  return {
    generate
  }
}

export default GenerateData;

