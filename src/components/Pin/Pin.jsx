import React from "react";

import { Popup, Marker } from "react-leaflet";
import { Link } from "react-router-dom";

const position = [51.505, -0.09];

function Pin({ item }) {
   return (
      <Marker position={[item.latitude, item.longitude]}>
         <Popup>
            <div className="popupContainer">
               <img src={item.img} alt="" />
               <div className="textContainer">
                  <Link to={`/${item.id}`}>{item.title}</Link>
                  <span>{item.bedroom} bedroom</span>
                  <b>$ {item.price}</b>
               </div>
            </div>
         </Popup>
      </Marker>
   );
}

export default Pin;
