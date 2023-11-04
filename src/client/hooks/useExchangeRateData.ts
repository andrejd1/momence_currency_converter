import { createData } from "../utils/helpers";

export function useExchangeRateData(data: string) {
  const parsedData: string[] = data.split("\n");
  const headerItems: string[] = parsedData[1].toLowerCase().split("|");
  const date: string = parsedData[0];
  const parsedDataWithoutHeader: string[] = [...parsedData];
  parsedDataWithoutHeader.splice(0, 2);
  // remove last empty line
  parsedDataWithoutHeader.splice(parsedDataWithoutHeader.length - 1, 1);

  const rows =
    parsedDataWithoutHeader &&
    parsedDataWithoutHeader.map((row) => {
      const cells = row.split("|");
      return createData(
        cells[0],
        cells[1],
        Number(cells[2]),
        cells[3],
        Number(cells[4]),
      );
    });

  return {
    date: date,
    headerItems: headerItems,
    rows: rows,
  };
}
