import LoaderSvg from "../../assets/loader.svg";
import React from "react";
import { StyledLoader } from "./Loader.styled";

const Loader = () => {
  return <StyledLoader src={LoaderSvg} alt="Loader" />;
};

export default Loader;
