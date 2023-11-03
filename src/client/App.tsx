import "./App.css";
import React from "react";
import { useExchangeRateData } from "./hooks/useExchangeRateData";
import ExchangeRateTable from "./components/Table/Table";
import useSWR from "swr";
import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";

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
  const { data, error, isLoading } = useSWR("/exchange/rates");

  if (error) return <div>Failed to load...</div>;
  if (isLoading) return <div>Loading...</div>;

  const { date, headerItems, rows } = useExchangeRateData(data);

  return (
    <ThemeProvider theme={theme}>
      <ExchangeRateTable date={date} headerItems={headerItems} rows={rows} />
    </ThemeProvider>
  );
}

export default App;
