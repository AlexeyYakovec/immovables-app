import React, { useState } from "react";
import "./Search.scss";

import { IoIosSearch } from "react-icons/io";

const types = ["Buy", "Rent"];

function Search() {
   const [query, setQuery] = useState({
      type: "Buy",
      location: "",
      minPrice: 0,
      maxPrice: 0,
   });

   const switchType = (value) => {
      setQuery((prev) => ({ ...prev, type: value }));
   };
   return (
      <div className="searchBar">
         <div className="type">
            {types.map((type) => {
               return (
                  <button
                     key={type}
                     onClick={() => switchType(type)}
                     className={query.type === type ? "active" : ""}
                  >
                     {type}
                  </button>
               );
            })}
         </div>
         <form action="">
            <input type="text" name="location" placeholder="City Location" />
            <input
               type="number"
               min={0}
               max={1000000}
               name="minPrice"
               placeholder="Min Price"
            />
            <input
               type="number"
               name="maxPrice"
               min={0}
               max={1000000}
               placeholder="Max Price"
            />
            <button>
               <IoIosSearch />
            </button>
         </form>
      </div>
   );
}

export default Search;
