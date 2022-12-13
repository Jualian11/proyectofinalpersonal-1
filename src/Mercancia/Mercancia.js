import { Footer } from "../shared/Footer/Footer"
import { useNavigate } from "react-router-dom"

export function Mercancia(){


    //Activamos la navegacion entre componentes cuando se de un evento
    let navegante=useNavigate() 

    //que hago cuando se de el evento...
    function detectarEventos(productoSeleccionado){
        navegante('/tienda',{
            state:{productoSeleccionado}
        })
    }

    let titulo="Productos de la banda ;)"

    let productos=[

        {
            nombre:"T-shirt Original Importada",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyjv-121a0.appspot.com/o/incubus%20t-shirt-1.jpg?alt=media&token=04641460-5014-4f1b-a13b-755c0cf3ce30",
            descripcion:"100% en Algodon, eco-friendly, todas las tallas, todos los generos, animal-friendly, lgtbq+++, sin colorantes artificiales, original importada, de la tienda a tu casa. ;)",
            precio:40 +"$"
            
        },
        {
            nombre:"T-shirt Original Importada",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyjv-121a0.appspot.com/o/incubus%20t-shirt.jpg?alt=media&token=ad5b0f75-1f5e-4802-b1e0-9692ab97fbce",
            descripcion:"100% en Algodon, eco-friendly, todas las tallas, todos los generos, animal-friendly, lgtbq+++, sin colorantes artificiales, original importada, de la tienda a tu casa. ;)",
            precio:40 +"$"
            
        },
        {
            nombre:"Tank Original Importada",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyjv-121a0.appspot.com/o/incubus%20tank.jpg?alt=media&token=0d2d1b11-c8e4-4951-b8f1-67c1f6ce3997",
            descripcion:"100% en Algodon, eco-friendly, todas las tallas, todos los generos, animal-friendly, lgtbq+++, sin colorantes artificiales, original importada, de la tienda a tu casa. ;)",
            precio:30 +"$"
            
        },
        {
            nombre:"Sweater Original Importada",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyjv-121a0.appspot.com/o/incubus%20sweater-1.jpeg?alt=media&token=e6d13ac7-73f3-4544-8587-bc488d440abc",
            descripcion:"100% en Algodon, eco-friendly, todas las tallas, todos los generos, animal-friendly, lgtbq+++, sin colorantes artificiales, original importada, de la tienda a tu casa. ;)",
            precio:60 +"$"
            
        },
        {
            nombre:"Sweater Original Importada",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyjv-121a0.appspot.com/o/incubus%20sweater-2.jpeg?alt=media&token=bf07edea-f10d-482b-9397-fda312275f93",
            descripcion:"100% en Algodon, eco-friendly, todas las tallas, todos los generos, animal-friendly, lgtbq+++, sin colorantes artificiales, original importada, de la tienda a tu casa. ;)",
            precio:60 +"$"
            
        },
        {
            nombre:"Sweater Original Importada",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyjv-121a0.appspot.com/o/incubus%20sweater.jpeg?alt=media&token=f2af47d9-0ca0-4245-825f-6aa7c87977e6",
            precio:60 +"$",
            descripcion:"100% en Algodon, eco-friendly, todas las tallas, todos los generos, animal-friendly, lgtbq+++, sin colorantes artificiales, original importada, de la tienda a tu casa. ;)"
        }
        
    ]


    return(
        <>
            <h1 className="text-center fw-bold p-5">{titulo}</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-5">
                    
                    {
                        productos.map(function(producto,id){
                            return(
                /*fragmento*/   <div  key={id}>
                                   <div className="col">

                                        <div className="card h-100 shadow">

                                            <img src={producto.foto} alt="fotico" className="h-100 img-fluid w-100 mt-3"/>
                                            <hr/>
                                            <h3 className="pb-2 text-center">{producto.nombre}</h3>
                                            <h4 className="pb-2 text-center">Precio: {producto.precio}</h4>
                                            
                                            <button className="btn btn-primary mx-5 mb-4" onClick={function(){detectarEventos(producto)}}>Ampliar</button>
                                        </div>

                                    </div> 
                                </div>
                            )
                        })
                    }

                </div>
            </div>
            <br/>
            <Footer/>
        </>

    )

}