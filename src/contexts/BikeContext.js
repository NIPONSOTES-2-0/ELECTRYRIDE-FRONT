import React, { createContext, useState, useEffect} from "react";
import { BikeService } from "../services/BikeService";

export const BikeContext = createContext();

const BikeContextProvider = (props) => {
  const bikeService = new BikeService();

  const [bikes, setBikes] = useState([]);
  
  useEffect(() => {    
    bikeService.findAll().then((data) => setBikes(data));    
  });
  

  const registerBike = (bike) => {
    bikeService.register(bike).then((data) => setBikes([...bikes, data]));
  };

  const deleteBike = (id) => {
    bikeService.delete(id).then(() => setBikes(bikes.filter((p) => p._id !== id)));
  };

  const findBike = (id) => {    
    return bikes.find((p) => p.id === id);
  };

  const updateBike = (id) => {    
    bikeService.update(id).then((data) => console.log("actualizo bike: ",data));
  };

  return (
    <BikeContext.Provider
      value={{
        registerBike,
        deleteBike,
        findBike,
        updateBike,
        bikes,
      }}
    >
      {props.children}
    </BikeContext.Provider>
  );
};

export default BikeContextProvider;
