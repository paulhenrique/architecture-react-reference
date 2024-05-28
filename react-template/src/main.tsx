import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./mock/mirageServer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <App />
  </>
);
