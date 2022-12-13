import './AmpliarInfo.css'
import { useLocation } from "react-router-dom"

export function AmpliarInfo(){
    
    let datosRecibidos=useLocation()

    let producto=datosRecibidos.state.productoSeleccionado
    console.log(producto)

    return(

         
        <>
            <div className="container">

                <div className="row my-5">

                    <div className="col-12 col-md-5 border-end">
                        <img src={producto.foto} alt="fotitco" className="img-fluid w-100 "/>
                    </div>
                    <div className="col-12 col-md-6 border p-4">
                        <h2 className="fw-bold">{producto.nombre}</h2>
                    <div className="precio"> 
                        <h4>Precio: {producto.precio} -<span className="descuento "> 25% Descuento</span></h4>
                        <h5 className="badge rounded-pill text-bg-success text-white my-4">Decuento del dia </h5>
                        <p> Hasta 48 Cuotas</p>
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotyjv-121a0.appspot.com/o/symbols.png?alt=media&token=6fb8c76e-fd84-46c0-b217-f3a0cb90e7ea" alt="visa" className="img-fluid" />
                        <img src="https://firebasestorage.googleapis.com/v0/b/spotyjv-121a0.appspot.com/o/american-express.png?alt=media&token=15eac05a-2b00-44d2-a7a2-d26102665641" alt="american-express" className="ms-4 img-fluid" />


                        <hr/>
                        <i class="bi bi-truck mt-5 ms-1 fs-1 text-success "><span className='camion text-success ms-2'>  - !Envio gratis a nivel Nacional¡</span></i>
                        <p className='camion'> Conoce los tiempos y las formas de envio.</p>

                        <i class="bi bi-arrow-clockwise mt-5 ms-3 fs-1 "><span className='camion'> !Devolución gratis¡</span></i>
                        <p className='camion ms-3'> 30 Dias para rembolso.</p>

                        <hr/>
                        <h3 className='me-3'>Descripcion: <span>{producto.descripcion}</span></h3>


                    </div>

                    </div>
                    <div></div>

                </div>

            </div>

        </>

    )
    
}