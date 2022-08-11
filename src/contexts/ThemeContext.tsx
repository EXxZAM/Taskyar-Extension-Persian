import React, { useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ThemeContext = React.createContext({});
export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }: any) => {
    const [theme, setTheme] = useLocalStorage("THEME", "Dark");
    const [isFirstTheme, setIsFirstTheme] = useState<boolean>(true);

    const setDefault = () => {
        setTheme("Dark");
        setIsFirstTheme(false);
    };

    const updateTheme = () => {
        const items = localStorage.getItem("THEME");
        if (items == null) return;
        if (theme === "Dark") {
            localStorage.setItem("THEME", "Light");
            setTheme("Light");
        }
        if (theme === "Light") {
            localStorage.setItem("THEME", "Dark");
            setTheme("Dark");
        }
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                isFirstTheme,
                setDefault,
                updateTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
