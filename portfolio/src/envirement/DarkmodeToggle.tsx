import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function DarkmodeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <div>
            <button
                onClick={toggleMode}
                className="p-2 text-white bg-blue-500 dark:bg-yellow-500 rounded-full  items-center justify-between"
                aria-label="Toggle Dark Mode"
            >
                {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
        </div>
    );
}
