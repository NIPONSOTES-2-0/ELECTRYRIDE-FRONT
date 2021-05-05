import React, { useState, useEffect, useContext } from "react";
import {BikeContext} from "../../contexts/BikeContext";
import imgBike from "./images/bike.jpg";

const BikeInfo = (props) => {
  const [loading, setLoading] = useState(false);
  const [bicicletas, setBicicletas] = useState([]);
  const { bikes, findBike, updateBike } = useContext(BikeContext);
  const [actualBike, setActualBike] = useState(null);
  //let actualBike = null;
  //let contextUsado = useContext(BikeContext);
  //console.log("bika: ",bika);
  //let bikes = [];


  useEffect(() => {      
    //console.log("En useEffect: ",contextUsado);
    setLoading(true);
    if(bicicletas.length > 0){
        setLoading(false);    
        
        if(actualBike===null){
            //console.log("ACTUAL BIKE NULL: ",actualBike);
            updateActualBike();
        }else{
            //console.log("ACTUAL BIKE HAS VALUE: ",actualBike);
        }                        
    }else{
        setLoading(true);
        setBicicletas(bikes);    
    }        
    //console.log("bikes: ",bicicletas);
    //console.log("actualBike: ",actualBike);
  }, [bikes, bicicletas]); //bikes, bicicletas

  const updateActualBike = () => {
    console.log("CUANTAS VECES UPDATEBIKE");
    setActualBike(bicicletas[Math.floor(Math.random() * bicicletas.length)]);
  };

  const handleChange = () => {
    console.log("Changing bike!");
    updateActualBike();

  };

  const alquilerValidated = () => {
    console.log("Entrando en alquilar bici!!!!!");
    props.isValidated(true);
  }
//{console.log("RENDERING!!")}
  return (
    <>    
    
    
      <div className="card">
        <div className="card-header">
          <img
            src={imgBike}
            width={400}
            height={400}
            alt="bike"
            className="img-fluid"
          />
        </div>
        <div className="card-body">            
          <h5 className="text-center my-2">Estado: {actualBike!==null?actualBike.state: ''}</h5>
          <h5>id: {actualBike!==null?actualBike.id: 0}</h5>
          <div>
            <button className="btn btn-success" onClick={() => alquilerValidated()}>alquilar</button>
            <button className="btn btn-danger" onClick={() => handleChange()}>cambiar</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BikeInfo;
