import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { SWRConfig } from "swr";
import { fetcher } from "./utils/helpers";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher }}>
      <App />
    </SWRConfig>
  </React.StrictMode>,
);
