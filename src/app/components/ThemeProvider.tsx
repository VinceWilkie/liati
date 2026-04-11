'use client';
import React, { createContext, useContext, useEffect, useState, useCallback } from "react";

type Theme = `light` | `dark`;

interface ThemeContextValue {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error(`useTheme must be used within a ThemeProvider`);
    }
    return context;
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setThemeState] = useState<Theme>(`light`);

    useEffect(() => {
        const stored = localStorage.getItem(`theme`) as Theme | null;
        const initial = stored === `dark` ? `dark` : `light`;
        setThemeState(initial);
        document.documentElement.classList.toggle(`dark`, initial === `dark`);
    }, []);

    const setTheme = useCallback((newTheme: Theme) => {
        setThemeState(newTheme);
        localStorage.setItem(`theme`, newTheme);
        document.documentElement.classList.toggle(`dark`, newTheme === `dark`);
    }, []);

    const toggleTheme = useCallback(() => {
        setTheme(theme === `light` ? `dark` : `light`);
    }, [theme, setTheme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
