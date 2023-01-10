//Receta para consumir un API con React.

export async function servicioCancionesTop(){

    //1. Pa' onde vas y a que vas?: Escribir la url del servicio del API

    const URL= "https://api.spotify.com/v1/artists/3YcBF2ttyueytpXtEzn1Za/top-tracks?market=us"

    //2. Que operacion vas a hacer en la base de datos?
    //Configurar la peticion de envio hacia el servidor

    const REQUEST= {
        method:"GET",
        headers:{Authorization:"Bearer BQBwVHmc3O36JQojB4vJrtdV5LbCdwt5z3l7AbVOTgoOLo2X_FeEJ2E0mYz03gl3YstYdXVHz2GyaPbCetS-EREYFSWtbr_zkOxJaB3FDGgxjmHo_aNsV0oNCdzFc1c5F0-mnc6RVHQElFssFVZHbiDkjAiYBh0PbUhps3cClYoj99CNwyGCnSn5oZDmtq8"}
    }

    //3. Consumimos el API

    let respuesta=await fetch(URL,REQUEST)
    let canciones=await respuesta.json()

    console.log(canciones)
}