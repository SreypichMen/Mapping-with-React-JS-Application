import React from "react";
import { useNavigate } from "react-router-dom";
import '../BackHomeNavigationButton/BackHomeNavigationButton.css'
const MapPage = () => {
  const navigate = useNavigate();

  return (
    <div className='back_home_block'>
      
      <button className="back_botton" onClick={() => navigate('/')}> Back</button>
   
    </div>
  );
};

export default MapPage;
