import React, {useEffect, useState} from "react";
import CustomMarker from "./CustomMarker";
import axios from 'axios';
import Loading from '../loading/Loading';

const CustomMarkers = ({ places, openPopup }) => {

  const [loading, setLoading] = useState(false);
  const [parkings, setParkings] = useState([]);

  useEffect(() => {
    setLoading(true);
    const URL = "http://localhost:8080/api/bikes/";
    let header = {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:8080",
        },
      };


    axios
      .get(URL + "parkings", header)
      .then((response) => {
        console.log("RESPONSE: ",response);
        var res = response.data;       
        console.log("RESPONSE.DATA: ",res);
        var usuarios = Object.keys(res).map((key, index) => res[key]);
        console.log("usuarios de bd: ",usuarios);                        
        setLoading(false);
        setParkings(usuarios);        

      })
      .catch((error) => {
        console.log("Error with axios & bd: ",error);
        setLoading(true);
        //setError(error);
      });
  }, []);

/*
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
  */
  const markers = parkings.map((marker, index) => {
    return (
      <CustomMarker
        key={`marker-${index}`}
        index={index}
        marker={marker}
        openPopup={openPopup}
      />
    );
  });

  return (
    <>
    {parkings !== []? markers: ''}
    </>
  )
  //return markers;
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
