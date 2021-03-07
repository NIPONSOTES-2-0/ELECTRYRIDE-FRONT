import React, { createContext, useState, useEffect } from "react";
import { ParkingService } from "../services/ParkingService";

export const ParkingContext = createContext();

const ParkingContextProvider = (props) => {
  const parkingService = new ParkingService();

  const [parkings, setParkings] = useState([]);
  
  useEffect(() => {
    parkingService.findAll().then((data) => setParkings(data));
  });

  const registerParking = (parking) => {
    parkingService.register(parking).then((data) => setParkings([...parkings, data]));
  };

  const deleteParking = (id) => {
    parkingService.delete(id).then(() => setParkings(parkings.filter((p) => p._id !== id)));
  };

  const findParking = (id) => {    
    return parkings.find((p) => p.id === id);
  };

  const updateParking = (id) => {    
    parkingService.update(id).then((data) => console.log("actualizo bike: ",data));
  };

  return (
    <ParkingContext.Provider
      value={{
        registerParking,
        deleteParking,
        findParking,
        updateParking,
        parkings,
      }}
    >
      {props.children}
    </ParkingContext.Provider>
  );
};

export default ParkingContextProvider;
