import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { TarjetaFront } from "../../../types/tarjeta-types";

interface GenerateExcelProps {
  data: TarjetaFront[];
  fileName?: string;
}

export async function GenerateExcel({ data }: GenerateExcelProps) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Reporte de Tarjetas de Combustible");

  const columns = [
    { header: "Tarjeta", key: "numero", width: 30 },
    { header: "Pin", key: "pin", width: 20 },
    { header: "Estado", key: "estado", width: 20 },
    { header: "Tipo", key: "tipo", width: 20 },
    { header: "Fecha de Vencimiento", key: "fecha_vencimiento", width: 20 },
    { header: "Saldo", key: "saldo", width: 20 },
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
  });

  data.forEach((item) => {
    const dataRow = worksheet.addRow([]);
    dataRow.getCell(2).value = item.numero;
    dataRow.getCell(3).value = item.pin;
    dataRow.getCell(4).value = item.estado;
    dataRow.getCell(5).value = item.tipo;
    dataRow.getCell(6).value = item.fecha_vencimiento;
    dataRow.getCell(7).value = item.saldo;
    [2, 3, 4, 5, 6, 7].forEach((colNumber) => {
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
  saveAs(new Blob([buffer]), "reporte_tarjetas.xlsx");
}
