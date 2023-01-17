import './Footer.css'

export function Footer(){


    return(

        <footer>
            <div className="container-fluid">
                <div className="row p-5 pie">
                    <div className="col-12 col-md-4 align-self-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/stopify-banda.appspot.com/o/logo-vetusta-png.png?alt=media&token=5eeb9ca6-1ad7-48ab-91b8-0d2d604959bf" alt="foto" className="img-fluid w-100"/>
                    </div>
                    <div className="col-12 col-md-4 text-center">
                        <h2 className="fw-bold"> Sobre la Banda</h2>
                        <h4>Banda de Indie Rock</h4>
                        <br/>
                        <h2 className="fw-bold"> Sobre la Banda</h2>
                        <h4>Banda de Indie Rock</h4> 
                    </div>
                    <div className="col-12 col-md-4 align-self-center">
                    <i className="bi bi-instagram fuente me-5"></i>
                    <i className="bi bi-tiktok fuente me-5"></i>
                    <i className="bi bi-facebook fuente"></i>
                    </div>
                </div>
            </div>
        </footer>

    )

}