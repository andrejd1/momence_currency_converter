import { FLAGS } from "./enums";

export const renderCountryFlag = (country: string) => {
  const flag = FLAGS.find((flag) => flag.name === country);
  if (flag) {
    return `${flag.flag} `;
  }
  return null;
};

export const roundNumber = (number: number, decimals: number) => {
  const factor = Math.pow(10, decimals);
  return Math.round(number * factor) / factor;
};
