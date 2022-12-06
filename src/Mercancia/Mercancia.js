import { Footer } from "../shared/Footer/Footer"

export function Mercancia(){

    let titulo="Productos de la banda ;)"

    let productos=[

        {
            nombre:"T-shirt Original Importada",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyjv-121a0.appspot.com/o/incubus%20t-shirt-1.jpg?alt=media&token=04641460-5014-4f1b-a13b-755c0cf3ce30",
            precio:40 +"$"
        },
        {
            nombre:"T-shirt Original Importada",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyjv-121a0.appspot.com/o/incubus%20t-shirt.jpg?alt=media&token=ad5b0f75-1f5e-4802-b1e0-9692ab97fbce",
            precio:40 +"$"
        },
        {
            nombre:"Tank Original Importada",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyjv-121a0.appspot.com/o/incubus%20tank.jpg?alt=media&token=0d2d1b11-c8e4-4951-b8f1-67c1f6ce3997",
            precio:30 +"$"
        },
        {
            nombre:"Sweater Original Importada",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyjv-121a0.appspot.com/o/incubus%20sweater-1.jpeg?alt=media&token=e6d13ac7-73f3-4544-8587-bc488d440abc",
            precio:60 +"$"
        },
        {
            nombre:"Sweater Original Importada",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyjv-121a0.appspot.com/o/incubus%20sweater-2.jpeg?alt=media&token=bf07edea-f10d-482b-9397-fda312275f93",
            precio:60 +"$"
        },
        {
            nombre:"Sweater Original Importada",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyjv-121a0.appspot.com/o/incubus%20sweater.jpeg?alt=media&token=f2af47d9-0ca0-4245-825f-6aa7c87977e6",
            precio:60 +"$"
        }
        
    ]


    return(
        <>
            <h1 class="text-center fw-bold p-5">{titulo}</h1>
            <div class="container">
                <div class="row row-cols-1 row-cols-md-3 g-5">
                    
                    {
                        productos.map(function(producto){
                            return(
                                <>
                                   <div class="col">

                                        <div class="card h-100 shadow">

                                            <img src={producto.foto} alt="fotico" class="h-100 img-fluid w-100"/>
                                            <hr/>
                                            <h3 class="pb-2 text-center">{producto.nombre}</h3>
                                            <h4 class="pb-2 text-center">Precio: {producto.precio}</h4>
                                            
                                        </div>

                                    </div> 
                                </>
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