import { Flags } from "./enums";

export const renderCountryFlag = (country: string) => {
  const flag = Flags.find((flag) => flag.name === country);
  if (flag) {
    return `${flag.flag} `;
  }
  return null;
};
