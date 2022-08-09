import React, { useContext } from "react";
import { v4 as uuidV4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";
const TaskContext = React.createContext({});
export const useTasks = () => {
    return useContext(TaskContext);
};

export const TasksProvider = ({ children }: any) => {
    const [tasks, setTasks] = useLocalStorage("TASKS", []);

    const addTask = ({
        task,
        label,
        priority,
    }: {
        task: string;
        label: string;
        priority: "green" | "red" | "orange" | null;
    }) => {
        setTasks((pervTasks: any) => {
            return [
                ...pervTasks,
                { id: uuidV4(), task, label, priority, is_completed: false },
            ];
        });
    };

    const deleteTask = ({ id }: { id: string }) => {
        setTasks((pervTasks: any[]) => {
            return pervTasks.filter((item) => item.id !== id);
        });
    };

    const updateTask = ({ id }: { id: string }) => {
        const items = localStorage.getItem("TASKS");
        if (items == null) return;
        const pervItems = JSON.parse(items);

        pervItems.forEach((item: any) => {
            if (item.id === id) {
                item.is_completed = !item.is_completed;
            }
        });
        setTasks(pervItems);
    };

    return (
        <TaskContext.Provider
            value={{
                tasks,
                addTask,
                updateTask,
                deleteTask,
            }}
        >
            {children}
        </TaskContext.Provider>
    );
};
