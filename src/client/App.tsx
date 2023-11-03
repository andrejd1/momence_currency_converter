import "./App.css";
import React from "react";
import { useExchangeRateData } from "./hooks/useExchangeRateData";
import ExchangeRateTable from "./components/Table/Table";
import useSWR from "swr";

function App() {
  const { data, error, isLoading } = useSWR("/exchange/rates");

  if (error) return <div>Failed to load...</div>;
  if (isLoading) return <div>Loading...</div>;

  const { headerItems, rows } = useExchangeRateData(data);

  return (
    <>
      <ExchangeRateTable headerItems={headerItems} rows={rows} />
    </>
  );
}

export default App;
