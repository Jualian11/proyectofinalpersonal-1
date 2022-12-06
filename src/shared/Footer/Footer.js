import './Footer.css'

export function Footer(){


    return(

        <footer>
            <div class="container-fluid">
                <div class="row p-5 pie">
                    <div class="col-12 col-md-4 align-self-center">
                        <img src="https://firebasestorage.googleapis.com/v0/b/jjgtiendatcc.appspot.com/o/Incubus-logo.svg.png?alt=media&token=2ee1b744-266c-40b0-8fac-7291fb98694d" alt="foto" class="img-fluid w-100"/>
                    </div>
                    <div class="col-12 col-md-4 text-center">
                        <h2 class="fw-bold"> Sobre la Banda</h2>
                        <h4>Banda de rock alternativo</h4>
                        <br/>
                        <h2 class="fw-bold"> Sobre la Banda</h2>
                        <h4>Banda de rock alternativo</h4> 
                    </div>
                    <div class="col-12 col-md-4 align-self-center">
                    <i class="bi bi-instagram fuente me-5"></i>
                    <i class="bi bi-tiktok fuente me-5"></i>
                    <i class="bi bi-facebook fuente"></i>
                    </div>
                </div>
            </div>
        </footer>

    )

}