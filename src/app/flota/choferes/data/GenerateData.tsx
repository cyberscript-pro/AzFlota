import useApiGet from "@/app/hooks/useApiGet";
import { Chofer } from "../utils/types";
import { ChoferMapper } from "../mappers/chofer.mapper";
import GeneratePDF from "../utils/GeneratePDF";
import { GenerateExcel } from "../utils/GenerateExcel";

function GenerateData() {
  const { loading, data } = useApiGet<Chofer>({
    url: "http://localhost:3000/api/choferes?page=1",
  });

  const { dataFront } = ChoferMapper.fromApiToFront(data);

  // Instancia las funciones siempre, no condicionalmente
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

