import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { AreaTrabajoFront } from "../../../types/area-types";
import { TarjetaBajaFront } from "@/app/types/tarjetas-baja-types";
import { ChoferBajaFront } from "@/app/types/chofer-baja.types";

interface GenerateExcelProps {
  data: ChoferBajaFront[];
  fileName?: string;
}

export async function GenerateExcel({ data }: GenerateExcelProps) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Reporte de Choferes de Baja");

  const columns = [
    { header: "Nombre y Apellidos", key: "area", width: 30 },
    { header: "Edad", key: "costo", width: 20 },
    { header: "Sexo", key: "jefe", width: 20 },
    { header: "Carnet de Identidad", key: "ci", width: 30 },
    { header: "Licencia de Conducción", key: "licencia", width: 30 },
    { header: "Teléfono", key: "telefono", width: 30 },
    { header: "Estado", key: "status", width: 30 },
  ];

  worksheet.addRow([]);
  worksheet.addRow([]);

  const headerRow = worksheet.addRow([]);

  columns.forEach((col, index) => {
    const cell = headerRow.getCell(index + 2);
    cell.value = col.header;
    cell.style = {
      font: { bold: true, color: { argb: "00000000" } },
      fill: {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FFFFFFFF" },
      },
      alignment: { vertical: "middle", horizontal: "center" },
      border: {
        top: { style: "thin", color: { argb: "00000000" } },
        bottom: { style: "thin", color: { argb: "00000000" } },
        left: { style: "thin", color: { argb: "00000000" } },
        right: { style: "thin", color: { argb: "00000000" } },
      },
    };
    worksheet.getColumn(2).width = 30;
    worksheet.getColumn(3).width = 20;
    worksheet.getColumn(4).width = 20;
    worksheet.getColumn(5).width = 30;
    worksheet.getColumn(6).width = 30;
    worksheet.getColumn(7).width = 30;
    worksheet.getColumn(8).width = 20;
  });

  data.forEach((item) => {
    const dataRow = worksheet.addRow([]);
    dataRow.getCell(2).value = item.nombre;
    dataRow.getCell(3).value = item.edad;
    dataRow.getCell(4).value = item.sexo;
    dataRow.getCell(5).value = item.ci;
    dataRow.getCell(6).value = item.licencia;
    dataRow.getCell(7).value = item.telefono;
    dataRow.getCell(8).value = "Baja";
    [2, 3, 4, 5, 6, 7, 8].forEach((colNumber) => {
      const cell = dataRow.getCell(colNumber);
      cell.style = {
        font: { size: 11 },
        border: {
          top: { style: "thin", color: { argb: "00000000" } },
          bottom: { style: "thin", color: { argb: "00000000" } },
          left: { style: "thin", color: { argb: "00000000" } },
          right: { style: "thin", color: { argb: "00000000" } },
        },
        alignment: {
          vertical: "middle",
          horizontal: "center",
        },
      };
    });
  });

  worksheet.views = [{ state: "frozen", ySplit: 3 }];

  const buffer = await workbook.xlsx.writeBuffer();
  saveAs(new Blob([buffer]), "reporte_choferes_baja.xlsx");
}
