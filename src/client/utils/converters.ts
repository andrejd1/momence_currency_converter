import { FLAGS } from "./enums";

export const renderCountryFlag = (country: string) => {
  const flag = FLAGS.find((flag) => flag.name === country);
  if (flag) {
    return `${flag.flag} `;
  }
  return null;
};
