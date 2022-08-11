import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TasksProvider } from "./contexts/TaskContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./index.css";
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <TasksProvider>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </TasksProvider>
    </React.StrictMode>
);
