export async function getPokemons(url){
    return new Promise( (resolve, reject) => {
        fetch(url)
        .then( response => response.json() )
        .then( data => {
            resolve(data);
        } )
        .catch((err) => {
            console.warn('error al traer listado grl: '+err);
        });
    } )
}

export async function getPokeInfo(pokeURL){
return new Promise( (resolve, reject) => {
    fetch(pokeURL)
    .then( resp => resp.json())
    .then( data => {
        resolve(data);
    });
});
}

export async function getPokeTypes(pokeURL){
    return new Promise( (resolve, reject) => {
        fetch(pokeURL)
        .then( resp => resp.json())
        .then( data => {
            resolve(data);
        });
    });
}