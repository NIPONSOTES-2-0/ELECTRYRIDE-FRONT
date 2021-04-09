import React, { useEffect, useState, useContext } from "react";
import Loading from "../loading/Loading";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import { ParkingContext } from "../../contexts/ParkingContext";

/*
  Falta hacer que se actualice la vista porque se hace el cambio en base de datos
  de un prestamo de ciclas pero no en la vista, alguien mas trabajele ya me sabe a caca el mapa.
*/
const CustomMarkers = ({ mapView }) => {
  //console.log("CUANTAS VECES ENTRA EN CUSTOM MARKERS: ",ParkingContext);
  //let xa= useContext([]);console.log("xa: ",xa);
  const [loading, setLoading] = useState(false);
  const [parqueaderos, setParqueaderos] = useState([]);

  let { parkings, findParking, updateParking } = useContext(ParkingContext);
  //let parkings = []; const findParking = () => {console.log("ok")}; const updateParking=()=>{console.log("ok2")};

  useEffect(() => {
    setLoading(true);
    parqueaderos !== null ? setLoading(false) : setLoading(true);
    setParqueaderos(parkings);
  }, [parkings, parqueaderos]); //

  const rentBike = (id) => {
    //console.log("Entrando en useBike: ",id);
    findParking(id);
    updateParking(id);
  };

  const validateRent = (marker) => {
    console.log("ENTRANDO EN VALIDATE RENT");
    if (marker.bikes_aviables > 0) rentBike(marker.id);
  };

  parqueaderos.forEach((marker, index) => {
    console.log("MARKER IN MARKERS: ", marker);
    const mrk = new mapboxgl.Marker()
      .setLngLat([marker.longitude, marker.latitude])
      .addTo(mapView);

    const popup = new mapboxgl.Popup({ className: "pops" })
      .setLngLat([marker.longitude, marker.latitude])
      .setHTML(
        `<div id="pop-actions"><p>${marker.name}</p><p>${marker.bikes_aviables}</p><button id="rent">Ir</button></div>`
      );
    /*
    This section is to give style and actions to popup, using "brute force" to accesst to the elemens directly
    */
    const markerTitle = popup._content.lastElementChild.children[0];
    const cantBikes = popup._content.lastElementChild.children[1];
    const rentButton = popup._content.lastElementChild.children[2];
    markerTitle.className = "mark-title";
    cantBikes.className = "mark-text";
    rentButton.className = "btn btn-primary";
    rentButton.addEventListener("click", () => {
      validateRent(marker);
    });
    mrk.setPopup(popup);
    return mrk;
  });
  return <>{loading ? <Loading /> : ""}</>;
};

export default CustomMarkers;
