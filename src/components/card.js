import React from 'react'
import { getColorType } from '../services/colors';


function handleClick(id){
    let div = document.getElementById(id);
    let img = div.querySelector('img');
    let card = div.querySelector('.card');
    let oldID = id;
    if( div.classList.contains('col-span-3') ){
        div.classList.remove('col-span-3'); 
        div.classList.remove('order-first');
        card.classList.add('hidden');
        card.classList.remove('flex');
    }else{
        div.classList.add('col-span-3' );
        div.classList.add('order-first' );
        card.classList.remove('hidden');
        card.classList.add('flex');
    }
    if(img.classList.contains('w-full')){
        img.classList.remove('w-full');
        img.classList.add('w-1/5' );
    }else{
        img.classList.remove('w-1/5');
        img.classList.add('w-full');
    }
    
  }
  

const Card = (object) => {
    console.log(object)
    return(
        <div id={object.pokemon.id} onClick={ () => handleClick(object.pokemon.id)} className="flex-1 border-2  rounded border-green-600 m-4 p-8 transition transition-colors delay-250 duration-300 hover:bg-green-200 hover:col-span-3">
                <div className="flex">
                    <img className="object-fill w-full" alt={object.pokemon.name} src={object.pokemon.sprites.front_default}/>
                    <div className="mx-4 card hidden">
                        <div className="mx-4 mb-6">
                            <h3 className="text-2xl pb-4">Moves:</h3>
                            {object.pokemon.moves.slice(0,4).map( (move) => {
                                return(
                                    <div>
                                        <p className="text-lg">{move.move.name}</p>
                                    </div>
                                )
                            } )}
                        </div>
                        <div className="mx-4 mb-6">
                            <h3 className="text-2xl pb-4">Status:</h3>
                            {object.pokemon.stats.map( (status) => {
                                return(
                                    <div>
                                        <p className="text-lg"> <b>{status.stat.name}:</b> {status.base_stat}</p>
                                    </div>
                                )
                            } )}
                        </div>
                    </div>
                    
                </div>
                <h2 className="text-3xl text-center">{object.pokemon.name}</h2>
                <div className="flex mx-10 py-5">
                {
                    object.pokemon.types.map( ({type}) => {
                        return(
                            <div data-type={type.name} className={getColorType(type.name) + " flex-1  rounded-3xl mx-1 p-2 px-6 text-xl text-center text-white"}>{type.name}</div>
                        )
                    })
                }
                </div>
        </div>
    )
}

export default Card;