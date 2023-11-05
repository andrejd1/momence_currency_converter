import "./App.css";
import React from "react";
import { useExchangeRateData } from "./hooks/useExchangeRateData";
import ExchangeRateTable from "./components/Table/Table";
import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import { useQuery } from "react-query";
import axios from "axios";
import Converter from "./components/Converter/Converter";
import { StyledAppContainer } from "./App.styled";
import Loader from "./components/Loader/Loader";
import Error from "./components/Error/Error";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode],
  );
  const { data, error, isLoading } = useQuery("exchangeRateData", () =>
    axios.get("/exchange/rates").then((res) => res.data),
  );

  if (isLoading) return <Loader />;

  if (error)
    return (
      <Error
        title={"Oh no! Failed to load data :("}
        message={`We were unable to load the data...`}
      />
    );

  const { date, headerItems, rows } = useExchangeRateData(data);

  return (
    <ThemeProvider theme={theme}>
      <StyledAppContainer>
        <Converter rows={rows} />
        <ExchangeRateTable date={date} headerItems={headerItems} rows={rows} />
      </StyledAppContainer>
    </ThemeProvider>
  );
}

export default App;
