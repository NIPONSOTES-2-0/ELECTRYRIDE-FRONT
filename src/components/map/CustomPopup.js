import React from 'react';
import { Popup } from "react-map-gl";


const CustomPopup = ({ index, marker }) => {    
    return ( marker?
      <Popup
        latitude={marker.latitude}
        longitude={marker.longitude}        
        closeButton={true}
        closeOnClick={true}        
      >
        <p>{marker.name}</p>      
        <p style={{color:'red', font:'bold'}}>{marker.bikes_aviables}</p>
      </Popup> : ''
    );
  };

  export default CustomPopup;