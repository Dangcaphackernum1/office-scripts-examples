function main(workbook: ExcelScript.Workbook) {
  let selectedSheet = workbook.getActiveWorksheet();
  selectedSheet.getRange("A1").setValue("Tổng:");
  selectedSheet.getRange("B1").setFormula("=SUM(B2:B10)");
}
