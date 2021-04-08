import React, { useState, useEffect } from 'react';
import { getPokeTypes } from '../services/api';

function hiddePoke(type){
    console.log(type);
}



const Sidebar = () => {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        async function fetchData() {
          let resp = await getPokeTypes("https://pokeapi.co/api/v2/type/");
          console.log(resp);
          setTypes(resp.results);
        }
        fetchData();
      }, []);


    return (
        <div className="border-2 w-80">
            <h2 className="py-5 text-3xl bg-yellow-600 text-center text-white">Filters</h2>
            <ul>
            {
                types &&
                    types.map( (type) => {
                        return(
                        <li>
                            <h4 className="text-xl py-3 text-center" onClick={ () => hiddePoke(type.name)}>
                                {type.name}
                            </h4>
                        </li>   
                    )
                    })
                
            }
            </ul>
        </div>
    )
}

export default Sidebar;