import React from "react";
import { createRoot } from "react-dom/client";
import { BitFever } from "@bitfever/sdk-react";

const App = () => (
  <div style={{ padding: 32 }}>
    <h1>BitFever React Dev App</h1>
    <BitFever clientId="demo-client-id" />
  </div>
);

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
