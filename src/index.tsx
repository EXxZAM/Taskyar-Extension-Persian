import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TasksProvider } from "./contexts/TaskContext";
import "./index.css";
const root = ReactDOM.createRoot(
    document.getElementById("react-target") as HTMLElement
);
root.render(
    <React.StrictMode>
        <TasksProvider>
            <App />
        </TasksProvider>
    </React.StrictMode>
);
