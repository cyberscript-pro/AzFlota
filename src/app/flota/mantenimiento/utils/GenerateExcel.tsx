import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { CargaFront } from "@/app/types/cargas-types";
import { VehiculoMantenimientoFront } from "@/app/types/mantenimiento-types";

interface GenerateExcelProps {
  data: VehiculoMantenimientoFront[];
  fileName?: string;
}

export async function GenerateExcel({ data }: GenerateExcelProps) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Reporte de Choferes");

  const columns = [
    { header: "Vehiculo", key: "vehicle", width: 30 },
    { header: "Fecha Inicio", key: "inicio", width: 20 },
    { header: "Fecha Fin", key: "fin", width: 20 },
    { header: "Motivo", key: "motivo", width: 20 },
    { header: "Descripcion", key: "description", width: 20 },
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
    worksheet.getColumn(3).width = 30;
    worksheet.getColumn(4).width = 30;
    worksheet.getColumn(5).width = 50;
    worksheet.getColumn(6).width = 50;
  });

  data.forEach((item) => {
    const dataRow = worksheet.addRow([]);
    dataRow.getCell(2).value = item.vehiculo.chapa;
    dataRow.getCell(3).value = item.inicio;
    dataRow.getCell(4).value = item.fin;
    dataRow.getCell(5).value = item.motivo;
    dataRow.getCell(6).value = item.descripcion;
    [2, 3, 4, 5, 6].forEach((colNumber) => {
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
  saveAs(new Blob([buffer]), "reporte_mantenimiento.xlsx");
}
