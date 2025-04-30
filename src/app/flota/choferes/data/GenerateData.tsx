import useApiGet from "@/app/hooks/useApiGet";
import { Chofer, ChoferExcel } from "../utils/types";
import { ChoferMapper } from "../mappers/chofer.mapper";
import GeneratePDF from "../utils/GeneratePDF";
import { GenerateExcel } from "../utils/GenerateExcel";

function GenerateData() {
  const { data, loading } = useApiGet<Chofer>({
    url: `http://localhost:3000/api/choferes`,
  });

  const { dataFront } = ChoferMapper.fromApiToFront(data);

  const { generatePDF } = GeneratePDF({ data: dataFront });
  

  const generate = (value: string) => {
    if (!loading) {
      if (value == "pdf") {
        generatePDF();
      } else if (value == "excel") {
        GenerateExcel({ data: dataFront });
      }
    }
  };

  return {
    generate
  }
}

export default GenerateData;
