import React, { useState, useEffect } from "react";
import { Container, Col, Row, Button } from "reactstrap";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import "./styles/Marker.css";
import Markers from "./Markers";
import CustomModal from "./Modal";

const mapStyle = {
  width: "100%",
  height: 700,
  zIndex: 1,
};

const mapboxApiKey =
  "pk.eyJ1IjoiZWRraWxsYWgiLCJhIjoiY2tsM3k0ZzBnMGF3MjJvanUyYjRmdDQzZSJ9.4UIPAYjND8HNAZEsCa8e4A";

const MapView = (props) => {  
  const [viewport, setViewport] = useState({
    latitude: 4.9160446,
    longitude: -74.0238216,
    zoom: 13,
  });
  const [tempMarker, setTempMarker] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [activePop, setActivePop] = useState(null);
  const [travel, setTravel] = useState({ duration: 0, distance: 0 });
  const [directions, setDirections] = useState(null);
  const [mapView, setMapView] = useState(null);
  const [directionsView, setDirectionsView] = useState(false);
  const [showParkings, setShowParkings] = useState(false);
  const [price, setPrice] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [errorModal, setErrorModal] = useState(true);
  var mapWrapper;

  useEffect(() => {
    console.log("TOKEN: ", localStorage.getItem("token"));
    mapboxgl.accessToken = mapboxApiKey;
    const map = new mapboxgl.Map({
      container: mapWrapper,
      style: "mapbox://styles/mapbox/streets-v10",
      center: [-74.0238216, 4.9160446],
      zoom: 13,
    });

    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: "metric",
      profile: "mapbox/cycling",
      geometries: "geojson",
      annotations: "distance",
    });
    setMapView(map);
    setDirections(directions);
  }, [mapWrapper]);

  const updateRouting = () => {
    if (directions != null) {
      directions.on("route", function (e) {
        console.log("ROUTE ANTES: ", e.route);
        console.log(viewport, tempMarker);
        console.log("Directions: ", directions);
        if (e.route.length > 0) {
          //console.log("ROUTE: ", e.route);
          const origin = e.route.map(route => route.legs[0].steps[0].intersections[0].location); 
          //console.log("ORIGEN: ",origin);
          const tail=e.route.map(route => route.legs[0].steps.length);
          //console.log("TAIL: ",tail);
          const destination = e.route.map(route => route.legs[0].steps[tail-1].intersections[0].location);
          console.log("DESTINATION: ",destination);
          //console.log("destination: ",destination);
          props.setDirections(origin[0], destination[0]);
          props.isValidated(true);
          //setDirections(origin[0], destination[0]);
          //console.log("MANDO A WIZARD LA DATA!!!!!");
          const distancia = e.route[0].distance;
          const duracion = e.route[0].duration;
          const trv = { duration: duracion, distance: distancia };
          distancia > 0 && duracion > 0 ? setTravel(trv) : setTravel(travel);
        }
      });
    }
  };

  const openPopup = (popup) => {
    setActivePop(popup);
  };

  const closePopup = () => {
    setActivePop(null);
  };

  const onSelected = (viewport, item) => {
    setViewport(viewport);
    setTempMarker({
      name: item.place_name,
      longitude: item.center[0],
      latitude: item.center[1],
    });
    setViewport(viewport);
    setTempMarker({
      name: item.place_name,
      longitude: item.center[0],
      latitude: item.center[1],
    });
  };

  const updateMarkers = (marcadores) => {
    setMarkers(marcadores);
  };

  const toggleRoute = () => {
    if (directions != null && mapView != null) {
      if (directionsView) {
        setDirectionsView(false);
        mapView.removeControl(directions);
      } else {
        setDirectionsView(true);
        mapView.addControl(directions, "top-left");
      }
    }
  };

  const toggleParkings = () => {
    if (showParkings) {
      setShowParkings(false);
    } else {
      setShowParkings(true);
    }
  };

  const calculatePrice = () => {
    if (travel.duration > 0 && travel.distance > 0) {
      var precio = Math.ceil(
        ((travel.duration + travel.distance) / 1000) * 100
      );
      setPrice(precio);
      setErrorModal(false);
      toggleModal();
    } else {
      setErrorModal(true);
      toggleModal();
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  /*
  const startTravel = () => {
    document.location.href = "/perfil";
  };
  */

  return (
    <Container fluid={true}>
      {updateRouting()} {console.log("RENDER MAPA")}
      {console.log("markers: ", markers)}      
      <Row style={{ marginLeft: 0.5 }}>
        <div>
          <Button color="success" onClick={() => toggleRoute()}>
            Planear ruta
          </Button>
        </div>
        <div>
          <Button color="warning" onClick={() => toggleParkings()}>
            Ver parqueaderos
          </Button>
        </div>
        <div>
          <Button color="danger" onClick={() => calculatePrice()}>
            Calcular precio
          </Button>
        </div>        
      </Row>
      <Row>
        <CustomModal
          price={price}
          showModal={showModal}
          toggleModal={toggleModal}
          error={errorModal}
        />
        <Col>
          <div ref={(el) => (mapWrapper = el)} style={mapStyle} />
        </Col>
      </Row>
      {mapView !== null && showParkings ? (
        <Markers
          mapView={mapView}
          closePopup={closePopup}
          openPopup={openPopup}
          updateMarkers={updateMarkers}
        />
      ) : (
        ""
      )}
      {activePop !== null && activePop}
    </Container>
  );
};

export default MapView;
