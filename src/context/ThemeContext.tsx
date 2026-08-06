import { createContext, useEffect, useState, type ReactNode } from "react";

type ThemeContextType = {
    isDark: boolean,
    toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
    children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [isDark, setIsDark] = useState(() => {
        try{
            const stored = localStorage.getItem("theme");
            return stored ? stored === "dark" : false;
        } catch {
            return false;
        }
    });
    
    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDark);

        localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    const toggleTheme = () => {
        setIsDark(prev => !prev);
    };

    return (
        <ThemeContext.Provider
            value={{
                isDark,
                toggleTheme
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

