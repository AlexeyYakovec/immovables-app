import React from "react";
import "./ListPage.scss";

import { listData } from "../../data/data";

import Filter from "../../components/Filter/Filter";
import Card from "../../components/Card/Card";

function ListPage() {
   const data = listData;
   return (
      <div className="listPage">
         <div className="listContainer">
            <div className="wrapper">
               <Filter />
               {data.map((item) => {
                  return <Card key={item.id} item={item} />;
               })}
            </div>
         </div>
         <div className="mapContainer">mapContainer</div>
      </div>
   );
}

export default ListPage;
