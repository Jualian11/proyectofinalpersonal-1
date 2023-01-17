import { servicioCancionesTop } from "../services/servicioCanciones"
import { useState, useEffect} from "react"
import { Footer } from "../shared/Footer/Footer"


export function Music(){

    //usando el hook useState para almacenar la respuesta del API de forma global
    const [canciones,setCanciones]=useState("hola")
    const [estadoCarga,setEstadoCarga]=useState(true)

    //usando el hook useEffect para limitar el consumo del API a una sola vez
    useEffect(function(){

        servicioCancionesTop().then(function(respuesta){
            setCanciones(respuesta)
            setEstadoCarga(false)
        })

    },[])

    //render del componente:

    if(estadoCarga==true){

        return(
            <>
                <h2>Tranquilo puto, esta cargando ...</h2>
            </>
        )

    }else{

        return(
            <>
                <h2 className="ms-5 my-5 text-uppercase">Canciones de la banda: </h2>
                    <div className="row row-cols-1 row-cols-md-4 rounded bg-dark mx-2 my-2 g-5">
                        
                            {
                                canciones.tracks.map(function(cancion){
                                    return(
                                        <>
                                        <div className="mx-5 col">
                                            <div className="card h-100">
                                            
                                            <h1 className="my-2 pt-4 text-center ">{cancion.name}</h1>
                                            <audio controls src={cancion.preview_url} className="my-2 align-self-center"></audio>
                                            <div className="p-4 rounded border border-light ">
                                                <img src={cancion.album.images[0].url} className="img-fluid w-100 h-5 rounded "></img>
                                            </div>
                                            </div>
                                            
                                        </div>
                                        </>
                                        
                                    )
                                })
                            }
                    </div>
                <Footer/>
            </>
        )
    }
    
}
