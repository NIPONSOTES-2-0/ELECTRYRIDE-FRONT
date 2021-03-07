import React from "react";
import { Marker } from "react-map-gl";
import "./styles/Marker.css";
import CustomPopup from "./CustomPopup";

const CustomMarker = ({ index, marker, openPopup, closePopup, rentBike }) => {
  return (
    <Marker longitude={marker.longitude} latitude={marker.latitude}>
      <div
        className="marker"
        onClick={() =>
          openPopup(
            <CustomPopup
              index={index}
              marker={marker}
              closePopup={closePopup}
              rentBike={rentBike}
            />
          )
        }
      >
        <span>
          <b>{marker.bikes_aviables}</b>
        </span>
      </div>
    </Marker>
  );
};

export default CustomMarker;
