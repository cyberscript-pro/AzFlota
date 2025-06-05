import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { AreaTrabajoFront } from "../../../types/area-types";
import { TarjetaBajaFront } from "@/app/types/tarjetas-baja-types";
import { VehiculoBajaFront } from "@/app/types/vehiculo-baja-types";

interface GenerateExcelProps {
  data: VehiculoBajaFront[];
  fileName?: string;
}

export async function GenerateExcel({ data }: GenerateExcelProps) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Reporte de Choferes");

  const columns = [
    { header: "Chapa", key: "chapa", width: 30 },
    { header: "Marca", key: "marca", width: 20 },
    { header: "Tipo", key: "tipo", width: 20 },
    { header: "Fecha de Baja", key: "baja", width: 30 },
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
    worksheet.getColumn(2).width = 20;
    worksheet.getColumn(3).width = 20;
    worksheet.getColumn(4).width = 20;
    worksheet.getColumn(5).width = 20;
  });

  data.forEach((item) => {
    const dataRow = worksheet.addRow([]);
    dataRow.getCell(2).value = item.chapa;
    dataRow.getCell(3).value = item.marca;
    dataRow.getCell(4).value = item.tipo;
    dataRow.getCell(5).value = item.baja;
    [2, 3, 4, 5].forEach((colNumber) => {
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
  saveAs(new Blob([buffer]), "reporte_vehiculos_baja.xlsx");
}
