import React from "react";
import "./List.scss";

import { listData } from "../../data/data";

import Card from "../Card/Card";

function List() {
   return (
      <div className="list">
         {listData.map((item) => (
            <Card key={item.id} item={item} />
         ))}
      </div>
   );
}

export default List;
