import React, { Component } from "react";
import ReactMapGL from "react-map-gl";
import Geocoder from "react-mapbox-gl-geocoder";
import { Container, Col, Row, Button } from "reactstrap";
import 'mapbox-gl/dist/mapbox-gl.css';
//import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css'


import { Marker } from "react-map-gl";
import "./styles/Marker.css";
import Markers from "./Markers";
import venues from "./places.json";


const mapStyle = {
  width: "100%",
  height: 600,
  zIndex: 1,
};

const mapboxApiKey =
  "pk.eyJ1IjoiZWRraWxsYWgiLCJhIjoiY2tsM3k0ZzBnMGF3MjJvanUyYjRmdDQzZSJ9.4UIPAYjND8HNAZEsCa8e4A";

const params = {
  country: "co",
};

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        latitude: 4.7653385,
        longitude: -74.0507561,
        zoom: 15,
      },
      tempMarker: null,
      markers: [],
      selectedIndex: null,
      activePopup: null
    };
  }
  
  openPopup = (popup) => {        
    this.setState({ activePopup: popup });
  };

  onSelected = (viewport, item) => {
    this.setState({
      viewport,
      tempMarker: {
        name: item.place_name,
        longitude: item.center[0],
        latitude: item.center[1],
      },
    });
  };


  render() {
    const view = this.state.viewport;    
    return (
      <Container fluid={true}>
        <Row>
          <Col>
            <h2>Mapa</h2>
          </Col>
        </Row>
        <Row className="py-4">
          <Col xs={2}>
            <Geocoder
              mapboxApiAccessToken={mapboxApiKey}
              onSelected={this.onSelected}
              viewport={view}
              hideOnSelect={true}
              value=""
              queryParams={params}
            />
          </Col>
          <Col>
            <Button color="primary">
              Add
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <ReactMapGL
              mapboxApiAccessToken={mapboxApiKey}
              mapStyle="mapbox://styles/mapbox/streets-v11"
              {...view}
              {...mapStyle}
              onViewportChange={(viewport) => this.setState({ viewport })}
            >
              {this.state.tempMarker && (
                <Marker
                  longitude={this.state.tempMarker.longitude}
                  latitude={this.state.tempMarker.latitude}
                >
                  <div className="marker temporary-marker">
                    <span></span>
                  </div>
                </Marker>
              )}              
              <Markers places={venues.venues} openPopup={this.openPopup}/>
             {this.state.activePopup !== null && (this.state.activePopup)}
            </ReactMapGL>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MapView;
