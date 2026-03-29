"use client";
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { FiMoon, FiSun } from 'react-icons/fi';


const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button
            className="p-2 rounded-full bg-black-200 dark:bg-white-700"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle Theme"
        >
            {theme === 'light' ? (
                <FiMoon className="text-gray-700" size={40} />
            ) : (
                <FiSun className="text-white" size={40} />
            )}
        </button>
    );
};

export default ThemeToggler;
