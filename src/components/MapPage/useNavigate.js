import React from "react";
import { useNavigate } from "react-router-dom";
import '../../assets/styles/navigation/back_to_home.css'
const MapPage = () => {
  const navigate = useNavigate();

  return (
    <div className='back_home_block'>
      
      <button className="back_botton" onClick={() => navigate('/')}> Back</button>
   
    </div>
  );
};

export default MapPage;
