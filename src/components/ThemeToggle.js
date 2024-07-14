import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { ReactComponent as Sun } from '../assets/icons/themes/Sun.svg';  // Import as React component
import { ReactComponent as Moon } from '../assets/icons/themes/Moon.svg';  // Import as React component
import '../assets/styles/theme/toggle.css'
const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();
    const selectedTheme = theme === 'dark';  // Adjust this if necessary

    return (
        <div className="dark_mode">
            <input
                className="dark_mode_input"
                type="checkbox"
                id="darkmode-toggle"
                onChange={toggleTheme}
                defaultChecked={selectedTheme}
            />
            <label className="dark_mode_label" htmlFor="darkmode-toggle">
                <Sun className="sun" />
                <Moon className="moon" />
            </label>
        </div>
    );
};

export default ThemeToggle;
