import "./App.css";
import React from "react";
import { useExchangeRateData } from "./hooks/useExchangeRateData";
import ExchangeRateTable from "./components/Table/Table";
import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import { useQuery } from "react-query";
import axios from "axios";
import Converter from "./components/Converter/Converter";
import { StyledAppContainer } from "./App.styled";

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

  if (error) return <div>Failed to load...</div>;
  if (isLoading) return <div>Loading...</div>;

  const { date, headerItems, rows } = useExchangeRateData(data);

  return (
    <ThemeProvider theme={theme}>
      <StyledAppContainer>
        <Converter />
        <ExchangeRateTable date={date} headerItems={headerItems} rows={rows} />
      </StyledAppContainer>
    </ThemeProvider>
  );
}

export default App;
