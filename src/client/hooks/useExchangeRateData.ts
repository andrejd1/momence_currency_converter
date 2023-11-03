import { createData } from "../utils/helpers";

export function useExchangeRateData(data: string) {
  const splitData: string[] = data.split("\n");
  const splitDataHeader: string[] = splitData[1].toLowerCase().split("|");
  const date: string = splitData[0];
  const splitDataWithoutHeader: string[] = [...splitData];
  splitDataWithoutHeader.splice(0, 2);
  // remove last empty line
  splitDataWithoutHeader.splice(splitDataWithoutHeader.length - 1, 1);

  const rows =
    splitDataWithoutHeader &&
    splitDataWithoutHeader.map((row) => {
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
    headerItems: splitDataHeader,
    rows: rows,
  };
}
