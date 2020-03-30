import React, { useState, createRef } from "react";
import { Map, TileLayer } from "react-leaflet";
import { makeStyles } from "@material-ui/core";
import { useParams, useHistory } from "react-router";
import { LeafletEvent } from "leaflet";

interface IMapData {
  lat: number;
  lng: number;
  zoom: number;
}

const worldMapStyles = makeStyles(() => ({
  container: {
    flex: 1
  },
  map: {
    height: "100%"
  }
}));

export const WorldMap = () => {
  const classes = worldMapStyles();
  const mapRef = createRef<Map>();
  const history = useHistory();
  const { lat, lng, zoom } = useParams();
  const [mapPos, setMapPos] = useState<IMapData>({
    lat: lat ? parseFloat(lat) : 51.505,
    lng: lng ? parseFloat(lng) : -0.09,
    zoom: zoom ? parseFloat(zoom) : 13
  });

  const moveEnd = (event: LeafletEvent) => {
    if (mapRef.current) {
      const center = mapRef.current.leafletElement.getCenter();
      const newZoom = mapRef.current.leafletElement.getZoom();
      history.replace(`/${center.lat}/${center.lng}/${newZoom}`);
    }
  };

  return (
    <div className={classes.container}>
      <Map
        center={[mapPos.lat, mapPos.lng]}
        zoom={mapPos.zoom}
        className={classes.map}
        onmoveend={moveEnd}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
      </Map>
    </div>
  );
};
