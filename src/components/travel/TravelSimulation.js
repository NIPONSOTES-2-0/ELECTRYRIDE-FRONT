import React, { useState, useEffect } from "react";
//import {} from "@turf/turf";
import * as turf from "@turf/turf";
import axios from "axios";
import "mapbox-gl/dist/mapbox-gl.css";
//import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import "./styles/TravelSimulation.css";
//import MapboxDirections from "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions";
//import "@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css";
var mapWrapper;

const mapStyle = {
  width: "100%",
  height: 700,
  zIndex: 1,
};

const mapboxApiKey =
  "pk.eyJ1IjoiZWRraWxsYWgiLCJhIjoiY2tsM3k0ZzBnMGF3MjJvanUyYjRmdDQzZSJ9.4UIPAYjND8HNAZEsCa8e4A";

const TravelSimulation = (props) => {
  //console.log("TRAVEL SIMULATION PROPS: ", props);
  const [origin, setOrigin] = useState([]);
  const [destination, setDestination] = useState([]);
  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiZWRraWxsYWgiLCJhIjoiY2tsM3k0ZzBnMGF3MjJvanUyYjRmdDQzZSJ9.4UIPAYjND8HNAZEsCa8e4A";
    if (props.origin != null && props.destination != null) {
      setOrigin(props.origin);
      setDestination(props.destination);
    }
    const map = new mapboxgl.Map({
      container: mapWrapper,
      style: "mapbox://styles/mapbox/streets-v10",
      center: [-74.01973051561, 4.823020897095893],
      zoom: 12,
    });

    if (origin.length > 0 && destination.length > 0) {
      var rutas = [];
      var coordenadas = [];
      //LINK QUE VA EN AXIOS GET : `https://api.mapbox.com/directions/v5/mapbox/cycling/-74.04131472428949,4.78347146799051;-74.02298419977947,4.918156810322585?steps=true&access_token=${mapboxgl.accessToken}`
      //console.log("AXIOS ORIGIN: ", origin);
      //console.log("AXIOS DESTINATION: ", destination);

      axios
        .get(
          `https://api.mapbox.com/directions/v5/mapbox/cycling/${origin[0]},${origin[1]};${destination[0]},${destination[1]}?steps=true&access_token=${mapboxgl.accessToken}`
        )
        .then((respuesta) => {
                    
          let data = respuesta.data;
          const intersections = data.routes[0].legs[0].steps;
          rutas = intersections.map((punto) =>
            punto.intersections.map((location) => location.location)
          );
          rutas.forEach((element) => {
            for (var i = 0; i < element.length; i++) {
              coordenadas.push(element[i]);
            }
          });
          //console.log("Coordenadas: ", coordenadas);
          var route = {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                geometry: {
                  type: "LineString",
                  coordinates: coordenadas,
                },
              },
            ],
          };

          var point = {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                properties: {},
                geometry: {
                  type: "Point",
                  coordinates: origin,
                },
              },
            ],
          };

          // Calculate the distance in kilometers between route start/end point.
          var lineDistance = turf.length(route.features[0]);

          var arc = [];

          // Number of steps to use in the arc and animation, more steps means
          // a smoother arc and animation, but too many steps will result in a
          // low frame rate
          var steps = 225;

          // Draw an arc between the `origin` & `destination` of the two points
          for (var i = 0; i < lineDistance; i += lineDistance / steps) {
            var segment = turf.along(route.features[0], i);
            arc.push(segment.geometry.coordinates);
          }

          // Update the route with calculated arc coordinates
          route.features[0].geometry.coordinates = arc;

          // Used to increment the value of the point measurement against the route.
          var counter = 0;

          map.on("load", function () {
            // Add a source and layer displaying a point which will be animated in a circle.
            map.addSource("route", {
              type: "geojson",
              data: route,
            });

            map.addSource("point", {
              type: "geojson",
              data: point,
            });

            map.addLayer({
              id: "route",
              source: "route",
              type: "line",
              paint: {
                "line-width": 2,
                "line-color": "red",
              },
            });
            //"line-color": "#007cbf",
            map.addLayer({
              id: "point",
              source: "point",
              type: "symbol",
              layout: {
                "icon-image": "bicycle-15",
                "icon-size": 1.5,
                "icon-rotation-alignment": "map",
                "icon-allow-overlap": true,
                "icon-ignore-placement": true,
              },
            });

            function animate() {
              var start =
                route.features[0].geometry.coordinates[
                  counter >= steps ? counter - 1 : counter
                ];
              var end =
                route.features[0].geometry.coordinates[
                  counter >= steps ? counter : counter + 1
                ];
              if (!start || !end) return;

              point.features[0].geometry.coordinates =
                route.features[0].geometry.coordinates[counter];

              point.features[0].properties.bearing = turf.bearing(
                turf.point(start),
                turf.point(end)
              );

              // Update the source with this new data
              map.getSource("point").setData(point);

              // Request the next frame of animation as long as the end has not been reached
              if (counter < steps) {
                requestAnimationFrame(animate);
              }

              counter = counter + 1;
            }

            document
              .getElementById("replay")
              .addEventListener("click", function () {
                // Set the coordinates of the original point back to origin
                point.features[0].geometry.coordinates = origin;

                // Update the source layer
                map.getSource("point").setData(point);

                // Reset the counter
                counter = 0;

                // Restart the animation
                animate(counter);
              });

            // Start the animation
            animate(counter);
            const duracion = data.routes[0].duration;
            const distancia = data.routes[0].distance;
            //console.log("DURACION: ", duracion);
            //console.log("Distancia: ", distancia);
            var precio = Math.ceil(((duracion + distancia) / 1000) * 100);
            //console.log("PRECIO: ", precio);
          });
        })
        .catch(function (error) {
          console.error("No es posible completar la operación: ", error);
        });
    }

    //console.log("ACABO AJAX: ", rutas);
  });

  return (
    <>
      <div ref={(el) => (mapWrapper = el)} style={mapStyle}></div>
      <div class="overlay">
        <button id="replay">Repetir</button>
        <button id="report">Reportar</button>
      </div>
    </>
  );
};

export default TravelSimulation;
