import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'; // Import the CSS file
import MapPage from './Map'; // Ensure this path matches your file structure

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <h1>Home Page</h1>
              <p>Welcome to the Home Page! Click below to go to the Map Page.</p>
              <Link to="/map" className="link">Go to Map Page</Link>
            </div>
          }
        />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </Router>
  );
}

export default App;
