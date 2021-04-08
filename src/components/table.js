import React, { useState, useEffect } from "react";
import { getPokeInfo, getPokemons } from "../services/api";
import Card from "./card";
import InfiniteScroll from "react-infinite-scroll-component";

const Table = () => {
  const [data, setData] = useState([]);
  const [nextUrl, setNextUrl] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let resp = await getPokemons("https://pokeapi.co/api/v2/pokemon");
      setNextUrl(resp.next);
      let oldPokemons = [];
      let pokemon = await loadPoke(resp.results, oldPokemons);
      
      setLoading(false);
    }
    fetchData();
  }, []);

  const loadPoke = async (data, oldPokemons) => {
    let _poke = await Promise.all(
      data.map(async (pokemon) => {
        let pokeRecords = await getPokeInfo(pokemon.url);
        return pokeRecords;
      })
    );
    let _allPoke = oldPokemons.concat(_poke);
    setData(_allPoke);
  };

  const fetchMoreData = async function() {
        let resp = await getPokemons(nextUrl);
        setNextUrl(resp.next);
        let pokemon = await loadPoke(resp.results, data);
        setLoading(false);
  };

  return (
      <InfiniteScroll
        dataLength={data.length}
        next={fetchMoreData}
        hasMore={nextUrl != null}
        loader={
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-500 hover:bg-red-500 focus:border-rose-700 active:bg-red-500 transition ease-in-out duration-150 cursor-not-allowed"
            disabled
          >
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Loading
          </button>
        }
      >
        <div className="grid grid-cols-3 gap-4">
            {loading
            ? ""
            : data.map((pokemon, i) => {
                {
                     {console.log(pokemon)  }
                }
                return <Card key={i} pokemon={pokemon}></Card>;
                })}
        </div>
      </InfiniteScroll>
  );
};

export default Table;
