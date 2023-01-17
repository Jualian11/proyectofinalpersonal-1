//Receta para consumir un API con React.

import { generarToken } from "./servicioToken.js"

export async function servicioCancionesTop(){


    let token=await generarToken()

    //1. Pa' onde vas y a que vas?: Escribir la url del servicio del API

    const URL= "https://api.spotify.com/v1/artists/6J6yx1t3nwIDyPXk5xa7O8/top-tracks?market=us"

    //2. Que operacion vas a hacer en la base de datos?
    //Configurar la peticion de envio hacia el servidor

    const REQUEST= {
        method:"GET",
        headers:{Authorization:token}
    }

    //3. Consumimos el API

    let respuesta=await fetch(URL,REQUEST)
    let canciones=await respuesta.json()

    return (canciones)
}