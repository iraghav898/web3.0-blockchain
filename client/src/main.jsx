import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import { TransactionsProvider } from "./context/TransactionContext";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <TransactionsProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TransactionsProvider>
);