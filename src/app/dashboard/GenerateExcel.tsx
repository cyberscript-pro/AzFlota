import ExcelJS from "exceljs";
import saveAs from "file-saver";
import { VehiculoBack } from "../types/vehiculo-types";

export async function generarTablaEstilo({
  vehiculos,
}: {
  vehiculos: VehiculoBack[] | undefined;
}) {
  const workbook = new ExcelJS.Workbook();
  const cards = workbook.addWorksheet("Tarjetas");

  const columns = [
    { header: "Observacion", key: "Observacion" },
    { header: "Tarjeta", key: "Tarjeta" },
    { header: "PIN", key: "PIN" },
    { header: "Chapa", key: "Chapa" },
    { header: "Marca", key: "Marca" },
    { header: "Tipo", key: "Tipo" },
    { header: "Chofer", key: "Chofer" },
    { header: "Jefe o Chofer 2", key: "Jefe o Chofer 2" },
    { header: "Area de Trabajo", key: "Area de Trabajo" },
  ];

  cards.addRow([]);
  cards.addRow([]);

  const headerRow = cards.addRow([]);
  columns.forEach((col, index) => {
    const cell = headerRow.getCell(index + 2);
    cell.value = col.header;
    cell.font = { bold: true, color: { argb: "FFFFFFFF" } };
    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF0070C0" },
    };
    cell.border = {
      top: { style: "thin" },
      left: { style: "thin" },
      bottom: { style: "thin" },
      right: { style: "thin" },
    };
    cell.alignment = { vertical: "middle", horizontal: "center" };
  });

  cards.columns = [
    { width: 15 },
    { width: 20 },
    { width: 15 },
    { width: 12 },
    { width: 20 },
    { width: 20 },
    { width: 20 },
    { width: 30 },
    { width: 30 },
    { width: 20 },
  ];

  function mapStatus(backendStatus: string) {
    switch (backendStatus) {
      case "Active":
        return "Activa";
      case "Inactive":
        return "Inactiva";
      case "Blocked":
        return "Bloqueada";
      case "Expired":
        return "Expirada";
      default:
        return backendStatus;
    }
  }

  vehiculos?.forEach((item) => {
    const row = cards.addRow([]);
    row.getCell(2).value = mapStatus(item.tarjeta.estado);
    row.getCell(3).value = item.tarjeta.numero;
    row.getCell(4).value = item.tarjeta.pin;
    row.getCell(5).value = item.chapa;
    row.getCell(6).value = item.marca;
    row.getCell(7).value = item.tipo;
    row.getCell(8).value = item.chofer.nombre;
    row.getCell(9).value = item.areaTrabajo.jefe;
    row.getCell(10).value = item.areaTrabajo.nombre;
    [2, 3, 4, 5, 6, 7, 8, 9, 10].forEach((colNumber) => {
      const cell = row.getCell(colNumber);
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

  cards.views = [{ state: "frozen", ySplit: 3 }];

  const buffer = await workbook.xlsx.writeBuffer();
  saveAs(new Blob([buffer]), "reporte general.xlsx");
}
