import React, { useEffect, useState, useContext } from "react";
import CustomMarker from "./CustomMarker";
import Loading from '../loading/Loading';
import { ParkingContext } from "../../contexts/ParkingContext";

const CustomMarkers = ({ closePopup, openPopup }) => {
  const [loading, setLoading] = useState(false);
  const [parqueaderos, setParqueaderos] = useState([]);

  let {
    parkings,
    findParking,
    updateParking
  } = useContext(ParkingContext);
  

  useEffect(() => {
    setLoading(true);        
    parqueaderos !== null ? setLoading(false): setLoading(true);    
    setParqueaderos(parkings);
    //console.log("Parqueaderos: ",parqueaderos);
  }, [parkings, parqueaderos]); 
  
  const rentBike = (id) => {
    console.log("Entrando en useBike: ",id);
    findParking(id);
    updateParking(id);
  }

  const markers = parqueaderos.map((marker, index) => {
    return (
       <>
      {loading ? (<Loading />) :
       <CustomMarker
        key={`marker-${index}`}
        index={index}
        marker={marker}
        openPopup={openPopup}
        closePopup={closePopup}
        rentBike={rentBike}
      />}
      </>
    );
  });

  return <>{parqueaderos !== [] ? markers : ""}</>;
};

export default CustomMarkers;
