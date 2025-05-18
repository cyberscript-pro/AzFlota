import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { VehiculoFront } from "../../../types/vehiculo-types";

interface GenerateExcelProps {
  data: VehiculoFront[];
  fileName?: string;
}

export async function GenerateExcel({ data }: GenerateExcelProps) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Reporte de Choferes");

  const columns = [
    { header: "Tarjeta", key: "tarjeta", width: 20 },
    { header: "Chapa", key: "chapa", width: 20 },
    { header: "Marca", key: "marca", width: 20 },
    { header: "Tipo", key: "tipo", width: 20 },
    { header: "Consumo en km por litro", key: "consumo", width: 20 },
    { header: "Chofer", key: "chofer", width: 20 },
    { header: "Jefe", key: "jefe", width: 20 },
    { header: "Area de Trabajo", key: "area", width: 20 },
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
    worksheet.getColumn(6).width = 30;
    worksheet.getColumn(7).width = 30;
    worksheet.getColumn(8).width = 30;
    worksheet.getColumn(9).width = 20;
  });

  data.forEach((item) => {
    const dataRow = worksheet.addRow([]);
    dataRow.getCell(2).value = item.tarjeta.numero;
    dataRow.getCell(3).value = item.chapa;
    dataRow.getCell(4).value = item.marca;
    dataRow.getCell(5).value = item.tipo;
    dataRow.getCell(6).value = item.consumo_km;
    dataRow.getCell(7).value = item.chofer.nombre;
    dataRow.getCell(8).value = item.area.jefe;
    dataRow.getCell(9).value = item.area.nombre;
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
  saveAs(new Blob([buffer]), "reporte_vehiculos.xlsx");
}
