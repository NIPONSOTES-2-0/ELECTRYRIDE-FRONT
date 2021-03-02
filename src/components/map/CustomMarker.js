import React from "react";
import { Marker } from "react-map-gl";
import "./styles/Marker.css";
import CustomPopup from "./CustomPopup";

const CustomMarker = ({ index, marker, openPopup }) => {
  return (
    <Marker longitude={marker.longitude} latitude={marker.latitude}>
      <div
        className="marker"
        onClick={() =>
          openPopup(
            <CustomPopup
              index={index}
              marker={marker}              
            />
          )
        }
      >
        <span>
          <b>{index + 1}</b>
        </span>
      </div>
    </Marker>
  );
};

export default CustomMarker;
