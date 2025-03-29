import { createRoot } from "react-dom/client";

import { App } from "./App.tsx";

import "@/infrastructure/ui/styles/reset.css";
import "@/infrastructure/ui/styles/tailwind.css";

createRoot(document.getElementById("root")!).render(<App />);
