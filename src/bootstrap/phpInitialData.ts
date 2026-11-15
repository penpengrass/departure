export type CsvCell = string | null;
export type CsvTable = CsvCell[][];
export type CsvTables = CsvTable[];

export interface PhpInitialData {
  timetableData: CsvTables;
  tableCount: number;
  orderCount: number;
  tableColumnCounts: number[];
  fileName: string;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isCsvTables(value: unknown): value is CsvTables {
  return (
    Array.isArray(value) &&
    value.every(
      table =>
        Array.isArray(table) &&
        table.every(
          row =>
            Array.isArray(row) &&
            row.every(cell => typeof cell === "string" || cell === null)
        )
    )
  );
}

function isNonNegativeInteger(value: unknown): value is number {
  return typeof value === "number" && Number.isInteger(value) && value >= 0;
}
function isNonNegativeString(value: unknown): value is string {
  return typeof value === "string" && value != "";
}
function isTableColumnCounts(value: unknown): value is number[] {
  return (
    Array.isArray(value) &&
    value.every(isNonNegativeInteger)
  );
}

export function readPhpInitialData(): PhpInitialData {
  const element = document.getElementById("php-initial-data");

  if (!element?.textContent) {
    throw new Error("PHPからの初期データが見つかりません。");
  }

  const parsed: unknown = JSON.parse(element.textContent);

  if (
    !isRecord(parsed) ||
    !isCsvTables(parsed["timetableData"]) ||
    !isNonNegativeInteger(parsed["tableCount"]) ||
    !isNonNegativeInteger(parsed["orderCount"]) ||
    !isNonNegativeString(parsed["fileName"]) ||
    !isTableColumnCounts(parsed["tableColumnCounts"]) ||
    parsed["tableColumnCounts"].length !== parsed["tableCount"]
  ) {
    throw new Error("PHPから渡された時刻表データの形式が不正です。");
  }

  return {
    timetableData: parsed["timetableData"],
    tableCount: parsed["tableCount"],
    orderCount: parsed["orderCount"],
    tableColumnCounts: parsed["tableColumnCounts"],
    fileName: parsed["fileName"]
  };
}