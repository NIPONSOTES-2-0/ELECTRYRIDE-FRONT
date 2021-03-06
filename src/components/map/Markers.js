import React, { useEffect, useState } from "react";
import CustomMarker from "./CustomMarker";
import axios from "axios";
//import Loading from '../loading/Loading';

const CustomMarkers = ({ places, openPopup }) => {
  //const [loading, setLoading] = useState(false);
  const [parkings, setParkings] = useState([]);

  useEffect(() => {
    //setLoading(true);
    const URL = "http://localhost:8080/api/bikes/";
    let header = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:8080",
      },
    };

    axios.get(URL + "parkings", header).then((response) => {        
        var usuarios = Object.keys(response.data).map((key, index) => response.data[key]);setParkings(usuarios);}).catch((error) => console.log("Error with axios & bd: ", error));
  }, []);

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

  return <>{parkings !== [] ? markers : ""}</>;
};

export default CustomMarkers;
