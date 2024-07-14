import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../assets/styles/App.css'; // Ensure path accuracy based on your project structure
import MapPage from '../pages/MapView/Map'; // Ensure this component is correctly implemented
import { useTheme } from '../contexts/ThemeContext'; // Ensure the ThemeContext is set up correctly
import ThemeToggle from '../components/ThemeToggle'; // Ensure this component is correctly implemented

function HomePage() {
  const { theme } = useTheme(); // Consumes the theme context

  useEffect(() => {
    // Apply body class based on the current theme
    document.body.className = theme === 'dark' ? 'body-dark' : '';
  }, [theme]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <div className="header">
              <ThemeToggle />
            </div>
            <div className="container">
              <h1>Home Page</h1>
              <p>Welcome to the Home Page! Click below to go to the Map Page.</p>
              <Link to="/map" className="link">Go to Map Page</Link>
            </div>
          </div>
        }/>
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </Router>
  );
}

export default HomePage;
