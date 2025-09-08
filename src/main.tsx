import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SearchProvider } from "./utils/context/SearchContext.tsx";
import App from "./App.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SearchProvider>
      <App />
    </SearchProvider>
  </StrictMode>
);
