import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import { CargaFront } from "@/app/types/cargas-types";

interface GenerateExcelProps {
  data: CargaFront[];
  fileName?: string;
}

export async function GenerateExcel({ data }: GenerateExcelProps) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("Reporte de Choferes");

  const columns = [
    { header: "Vehiculo", key: "vehicle", width: 30 },
    { header: "Folio", key: "folio", width: 20 },
    { header: "Comprobante", key: "comprobante", width: 20 },
    { header: "Fecha", key: "date", width: 20 },
    { header: "Existencia Inicial", key: "inicial", width: 20 },
    { header: "Importe", key: "importe", width: 20 },
    { header: "Total", key: "total", width: 20 },
    { header: "Consumo en $", key: "consumo", width: 20 },
    { header: "Consumo en Litros", key: "consumoLitro", width: 20 },
    { header: "Saldo Final", key: "saldo", width: 20 },
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
    worksheet.getColumn(5).width = 30;
    worksheet.getColumn(6).width = 30;
    worksheet.getColumn(7).width = 30;
    worksheet.getColumn(8).width = 30;
    worksheet.getColumn(9).width = 30;
    worksheet.getColumn(10).width = 30;
    worksheet.getColumn(11).width = 30;
  });

  data.forEach((item) => {

    let precio = 0;

    switch (item.vehiculo.tarjeta.tipo) {
      case "Diesel":
        precio = 13.9;
        break;
      case "Especial":
        precio = 17.4;
        break;
      case "B91":
        precio =  16.4;
        break;
      case "B83":
        precio = 14.6;
        break;
      default:
        break;
    }

    const dataRow = worksheet.addRow([]);
    dataRow.getCell(2).value = item.vehiculo.chapa;
    dataRow.getCell(3).value = item.folio;
    dataRow.getCell(4).value = item.comprobante;
    dataRow.getCell(5).value = item.fecha;
    dataRow.getCell(6).value = item.existencia;
    dataRow.getCell(7).value = item.importe;
    dataRow.getCell(8).value = (item.existencia + item.importe);
    dataRow.getCell(9).value = item.consumo_dinero;
    dataRow.getCell(10).value = (item.consumo_dinero / precio);
    dataRow.getCell(11).value = ((item.existencia + item.importe) - item.consumo_dinero);   
    [2, 3, 4, 5, 6, 7, 8, 9, 10, 11].forEach((colNumber) => {
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
  saveAs(new Blob([buffer]), "reporte_cargas.xlsx");
}
