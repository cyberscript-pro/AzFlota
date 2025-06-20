import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Chofer, ChoferFront } from "../../../types/choferes-types";

interface GenerateReporte {
  data: ChoferFront[] | undefined;
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
        [
          "Nombre y Apellidos",
          "Edad",
          "Sexo",
          "Carnet de Identidad",
          "Numero de Licencia",
          "Teléfono",
        ],
      ],
      body: data?.map((item) => [
        item.nombre,
        item.edad,
        item.sexo,
        item.ci,
        item.licencia,
        item.telefono,
      ]),
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
