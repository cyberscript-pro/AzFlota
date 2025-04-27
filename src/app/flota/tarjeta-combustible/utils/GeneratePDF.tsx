import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { TarjetaCombustibleFront } from "../utils/types";

interface GenerateReporte {
  data: TarjetaCombustibleFront[] | undefined;
}

const GeneratePDF = ({ data }: GenerateReporte) => {
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Reporte de Choferes", 14, 22);

    autoTable(doc, {
      startY: 30,
      head: [
        ["Número de Tarjeta", "Pin", "Estado", "Fecha de Vencimiento", "Vehiculo"],
      ],
      body: data?.map((item) => [item.numero, item.pin, item.estado, item.fecha_vencimiento, item.vehiculo ?? ""]),
      styles: {
        fontSize: 10,
        cellPadding: 1.5,
        halign: "left",
      },
      headStyles: {
        fillColor: [41, 128, 185],
        textColor: 255,
        fontStyle: "bold",
      },
      alternateRowStyles: {
        fillColor: [245, 245, 245],
      },
    });

    doc.save("reporte.pdf");
  };

  return {
    generatePDF,
  };
};

export default GeneratePDF;
