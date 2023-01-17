import './Home.css'

import {Footer} from '../shared/Footer/Footer'

export function Home(){

    return(
        <>
            <section>
                <div className="banner">

                </div>
            </section>
            <section>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-12 col-md-8">
                            <h2>VETUSTA MORLA</h2>
                            <p>
                            Vetusta Morla es una banda española de indie rock originaria de Tres Cantos, Madrid, que canta en español. Tras nueve años de andadura musical, en febrero de 2008 publicaron su primer largo, Un día en el mundo. Tres años más tarde, en 2011, publicaron su segundo álbum, MapasEl 8 de abril de 2014, tras varios años de gira por España y otros países, publican su tercer álbum, La deriva. En 2017 publican su cuarto álbum Mismo sitio, distinto lugar. En 2021 publican su quinto álbum Cable a tierra. La banda debe su nombre al personaje la Vetusta Morla de La historia interminable, la tortuga anciana gigante ("vetusta" en español es sinónimo de vieja, anciana​).
                            </p>
                            <img src="https://firebasestorage.googleapis.com/v0/b/stopify-banda.appspot.com/o/Banner-vetusta.jpg?alt=media&token=a6fd55bc-9713-4f3e-ae05-faf8b22de8de" className="img-fluid w-100 h-9"></img>
                        </div>

                        <div className="col-12 col-md-4 border-start align-self-center bg-dark text-white p-5">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <h1 className="fw-bold">Proximos Conciertos</h1>
                                    <hr></hr>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 text-end">
                                 <i className="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div className="col-9 text-start align-self-center">
                                    <h3 className="fw-bold">Medellín</h3>
                                    <h5>Dec 2</h5>
                                </div>
                            </div>  

                            <div className="row">
                                <div className="col-3 text-end">
                                 <i className="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div className="col-9 text-start align-self-center">
                                    <h3 className="fw-bold">Cali</h3>
                                    <h5>Dec 3</h5>
                                </div>
                            </div>  

                            <div className="row">
                                <div className="col-3 text-end">
                                 <i className="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div className="col-9 text-start align-self-center">
                                    <h3 className="fw-bold">Bogota</h3>
                                    <h5>Dec 4</h5>
                                </div>
                            </div>  

                            <div className="row">
                                <div className="col-3 text-end">
                                 <i className="bi bi-vinyl-fill icono fw-bold"></i>
                                </div>
                                <div className="col-9 text-start align-self-center">
                                    <h3 className="fw-bold">Barranquilla</h3>
                                    <h5>Dec 5</h5>
                                </div>
                            </div>  

                        </div>


                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <h1 className='text-center'>NOTICIAS</h1>
                            <hr/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-4 algin-self-center">
                           <img src="https://firebasestorage.googleapis.com/v0/b/stopify-banda.appspot.com/o/vetusta-morla-evento.jpg?alt=media&token=7f39b7dd-4980-4953-a223-3af1907989fa" alt="" className="img-fluid w-100"/>
                           <p className="text-center">
                            Vetusta Morla se presentara en el altavoz, en esta oportunidad con su nuevo album, Cable a Tierra.
                           </p>
                        </div>
                        <div className="col-12 col-md-4 algin-self-center">
                           <img src="https://firebasestorage.googleapis.com/v0/b/stopify-banda.appspot.com/o/vetusta-morla-gira-2023.jpg?alt=media&token=a3fd1d35-31d3-489c-99f7-bbc40f95ca7e" alt="" className="img-fluid w-100"/>
                           <p className="text-center">
                            Vetusta Morla rememorando dias importantes en su carrera, como las grabaciones en el estudio de Cable a Tierra.
                           </p>
                        </div>
                        <div className="col-12 col-md-4 algin-self-center">
                           <img src="https://firebasestorage.googleapis.com/v0/b/stopify-banda.appspot.com/o/vetusta-morla-nuevo-disco-cable-tierra.jpg?alt=media&token=be6fc7cd-30a7-454a-8331-bd6e844f2fcd" alt="" className="img-fluid w-100"/>
                           <p className="text-center">
                            Vetusta Morla nos sorprendio gratamente con su nuevo album y los videos musicales de este, estan evolucionando.
                           </p>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer/>
            
        </>
    )

}