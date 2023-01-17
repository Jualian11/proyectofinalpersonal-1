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
            foto:"https://firebasestorage.googleapis.com/v0/b/stopify-banda.appspot.com/o/VM-tshirt-apagon.jpg?alt=media&token=da01967b-c84b-47f2-a78d-3cde1273becb",
            descripcion:"100% en Algodon, eco-friendly, todas las tallas, todos los generos, animal-friendly, lgtbq+++, sin colorantes artificiales, original importada, de la tienda a tu casa. ;)",
            precio:35 +"$"
            
        },
        {
            nombre:"T-shirt Original Importada",
            foto:"https://firebasestorage.googleapis.com/v0/b/stopify-banda.appspot.com/o/VM-tshirt-azul.jpg?alt=media&token=15e7ef4a-11c6-4eac-8945-f63435936ce7",
            descripcion:"100% en Algodon, eco-friendly, todas las tallas, todos los generos, animal-friendly, lgtbq+++, sin colorantes artificiales, original importada, de la tienda a tu casa. ;)",
            precio:35 +"$"
            
        },
        {
            nombre:"T-shirt Original Importada",
            foto:"https://firebasestorage.googleapis.com/v0/b/stopify-banda.appspot.com/o/VM-tshirt-cATierra.jpg?alt=media&token=36ec1c84-0fc0-43dd-b6e2-56e76b43429d",
            descripcion:"100% en Algodon, eco-friendly, todas las tallas, todos los generos, animal-friendly, lgtbq+++, sin colorantes artificiales, original importada, de la tienda a tu casa. ;)",
            precio:35 +"$"
            
        },
        {
            nombre:"Sweater Original Importada",
            foto:"https://firebasestorage.googleapis.com/v0/b/stopify-banda.appspot.com/o/VM_SUDADERA.jpg?alt=media&token=64a0d739-2598-459d-b1e1-f9a20bafd571",
            descripcion:"100% en Algodon, eco-friendly, todas las tallas, todos los generos, animal-friendly, lgtbq+++, sin colorantes artificiales, original importada, de la tienda a tu casa. ;)",
            precio:50 +"$"
            
        },
        {
            nombre:"T-shirt Original Importada",
            foto:"https://firebasestorage.googleapis.com/v0/b/stopify-banda.appspot.com/o/VM-tshirt-gris.jpg?alt=media&token=f93dc62f-a878-4344-8dc0-72686dd54ec9",
            descripcion:"100% en Algodon, eco-friendly, todas las tallas, todos los generos, animal-friendly, lgtbq+++, sin colorantes artificiales, original importada, de la tienda a tu casa. ;)",
            precio:35 +"$"
            
        },
        {
            nombre:"T-shirt Original Importada",
            foto:"https://firebasestorage.googleapis.com/v0/b/stopify-banda.appspot.com/o/VM-tshirt-uDeEmundo.jpg?alt=media&token=f571c6e5-4812-4cf0-a2e5-351420e1ef8f",
            precio:35 +"$",
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
                                           
                                            <img src={producto.foto} alt="foticos" id="fotico" className="figure-img img-fluid rounded w-100"/>
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