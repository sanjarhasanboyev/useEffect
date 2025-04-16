import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = () => {
    const[theme, setTheme] = useState('light');
}