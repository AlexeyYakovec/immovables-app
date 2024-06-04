import React from "react";

import { MapContainer, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "./Map.scss";
import Pin from "../Pin/Pin";

const position = [51.505, -0.09];

function Map({ items }) {
   return (
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
         <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         />
         {items.map((item) => (
            <Pin item={item} key={item.id} />
         ))}
      </MapContainer>
   );
}

export default Map;
