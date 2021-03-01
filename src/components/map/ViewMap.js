import React, { PureComponent, Component } from 'react';
import ReactMapGL from 'react-map-gl';
import Geocoder from 'react-mapbox-gl-geocoder';
import { Container, Col, Row } from 'reactstrap';

const mapStyle = {
    width: '100%',
    height: 600,
    zIndex: 1
}

const mapboxApiKey = 'pk.eyJ1IjoiZWRraWxsYWgiLCJhIjoiY2tsM3k0ZzBnMGF3MjJvanUyYjRmdDQzZSJ9.4UIPAYjND8HNAZEsCa8e4A'

const params = {
    country: "co"
}

class MapView extends Component {

  constructor(props) {    
    super(props);
    this.state = {
      viewport: {
        latitude: 4.7653385,
        longitude: -74.0507561,
        zoom: 15
      }
    };

  }

  onSelected = (viewport, item) => {      
      this.setState({
        viewport
      })
  }

  render() {
    const view = this.state.viewport;     
    return(
      <Container fluid={true}> 
        <Row>
          <Col><h2>Mapa</h2></Col>
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
        </Row>
        <Row>
          <Col>
            <ReactMapGL
              mapboxApiAccessToken={mapboxApiKey}
              mapStyle="mapbox://styles/mapbox/streets-v11"
              {...view}
              {...mapStyle}
              onViewportChange={(viewport) => this.setState({viewport})}
            >
            </ReactMapGL>
          </Col>
        </Row>
      </Container>
   );
  }
}

export default MapView;