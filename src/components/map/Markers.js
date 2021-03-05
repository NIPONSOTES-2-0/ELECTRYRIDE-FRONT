import React from "react";
//import { IconLocation } from "./IconLocation";
import CustomMarker from "./CustomMarker";

const CustomMarkers = ({ places, openPopup }) => {  
  const markers = places.map((marker, index) => {
    return (
      <CustomMarker
        key={`marker-${index}`}
        index={index}
        marker={marker}
        openPopup={openPopup}
      />
    );
  });
  return markers;
};

export default CustomMarkers;
//export default Markers;

/*
.map((place, i) => (
    <CustomMarker map={i} position={place.geometry} icon={IconLocation}>
      <Popup>
        Bicicletas disponibles: <br /> <span style={{color:'red', font:'bold'}}>{place.bikes_aviables}</span>
      </Popup>
    </CustomMarker>
  ));
  return markers;
*/
