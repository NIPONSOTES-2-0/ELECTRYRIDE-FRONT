import React from 'react';
import { Popup } from "react-map-gl";


const CustomPopup = ({ index, marker, closePopup, rentBike }) => {    
  
  const validateRent = () => {
    if(marker.bikes_aviables>0) rentBike(marker.id);
  }

    return ( marker?      
      <Popup
        latitude={marker.latitude}
        longitude={marker.longitude}        
        closeButton={true}
        closeOnClick={false}           
        onClose={() => closePopup()}

      >        
        <p style={{color:'black', font:'bold'}}>{marker.name}</p>              
        <button className="btn btn-success" onClick={() => {closePopup(); validateRent()}}>Ir</button>
      </Popup> : ''
    );
  };

  export default CustomPopup;