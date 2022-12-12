import { useState } from "react"
import { useLocation } from "react-router-dom"

export function AmpliarInfo(){
    
    let datosRecibidos=useLocation()

    let producto=datosRecibidos.state.productoSeleccionado
    console.log(producto)

    return(

         
        <>
            <h1 className="my-3 text-center">{producto.nombre}</h1>
           
            <div className="col h-100">
                <div className="clearfix">
                    <img src={producto.foto} className="col-md-6 float-md-end mb-3 ms-md-3 img-fluid rounded-1" alt="fotico"/>

                    <h5>dddddddddddddddddddddddddddddd
                        dddddddddddddddddddddddddddddd
                        dddddddddddddddddddddddddddddd
                        dddddddddddddddddddddddddddddd
                        dddddddddddddddddddddddddddddd</h5>
                    <br/>
    

  
                </div>

            </div>

        </>

    )
    
}