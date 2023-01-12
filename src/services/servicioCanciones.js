//Receta para consumir un API con React.

export async function servicioCancionesTop(){

    //1. Pa' onde vas y a que vas?: Escribir la url del servicio del API

    const URL= "https://api.spotify.com/v1/artists/6J6yx1t3nwIDyPXk5xa7O8/top-tracks?market=us"

    //2. Que operacion vas a hacer en la base de datos?
    //Configurar la peticion de envio hacia el servidor

    const REQUEST= {
        method:"GET",
        headers:{Authorization:"Bearer BQAv4RUwN7YNmWRX7e8ImvuN7mmAxVPAforbfcWIsSoIIDEOJLwj00Q0ScrQW3FUxBNomD5xIwtSEYRcDerUJbryFhwpctmvXhk9zRWPPniyn1s76tA3Fswiub32YIcYGOeuFLee6_6oSev6syud3Esk35_0rPUY1FiSVCkVUiUWR21s7cOtT_Sz4uTNkQI"}
    }

    //3. Consumimos el API

    let respuesta=await fetch(URL,REQUEST)
    let canciones=await respuesta.json()

    return (canciones)
}