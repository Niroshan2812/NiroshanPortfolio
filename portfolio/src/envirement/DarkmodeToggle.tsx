import React, { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function DarkmodeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    React.useEffect(() => {
        document.documentElement.classList.add('dark');
    }, []);

    return(
        <div>

        </div>
    );
    
   
}
