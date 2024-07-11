import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './assets/styles/App.css';
import MapPage from './pages/MapView/Map'; 
import { useTheme } from './contexts/ThemeContext'; 
import ThemeToggle from './components/ThemeToggle'; 
function App() {
  const { theme } = useTheme(); 
  useEffect(() => {
    document.body.className = theme === 'dark' ? 'body-dark' : '';
  }, [theme]); 
  
  return (
    <Router>
        <Routes>
          <Route path="/" element={
            <div  className="App">
                 <ThemeToggle />
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

export default App;
