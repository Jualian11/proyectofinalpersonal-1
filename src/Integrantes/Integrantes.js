import { Footer } from "../shared/Footer/Footer"

export function Integrantes(){

    let titulo="Integrantes INCUBUS"

    let Integrantes=[
        {
            nombre:"Brandon Boyd",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyjv-121a0.appspot.com/o/Brandon-Boyd-Incubus.jpg?alt=media&token=54cf8db4-f79f-4603-88f7-b95a0af90975",
            historia:"Brandon Charles Boyd Wiseman es un músico, escritor y artista estadounidense, especialmente conocido como líder y vocalista de la banda americana de rock alternativo Incubus."
        },
        {
            nombre:"Mike Einziger",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyjv-121a0.appspot.com/o/Michael-Einziger-incubus.jpg?alt=media&token=1d7eb471-55d5-4882-a10d-6514d42d8926",
            historia:"Michael Einziger es conocido principalmente por ser el guitarrista de la banda Incubus. Mike es multi instrumentista, ya que además de la guitarra toca el mellotron, el piano, sintetizadores, samplers y compone piezas orquestales. "
        },
        {
            nombre:"Alex Katunich",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyjv-121a0.appspot.com/o/Alex-Katunich-incubus.jpg?alt=media&token=47ccc5b2-418c-437c-9d5f-88cbd4ec1140",
            historia:"Traducción del inglés-George Alex Katunich es un músico estadounidense. Es mejor conocido como el ex bajista de Incubus. Desde la escuela secundaria, Katunich ha usado el nombre artístico de Dirk Lance, que aparentemente fue tomado de los créditos de una película pornográfica de la década de 1970."
        },
        {
            nombre:"José Pasillas",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyjv-121a0.appspot.com/o/JosePasillas-incubus.jpg?alt=media&token=4312eed7-ef2a-466e-b905-6f9e3276cc16",
            historia:"José Antonio Pasillas es un baterista estadounidense, que actualmente está en la formación de la banda de rock Incubus."
        },
        {
            nombre:"Chris Kilmore",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyjv-121a0.appspot.com/o/ChrisKilmore-incubus.jpg?alt=media&token=6647f4ad-7e2a-4e35-bd35-e4d41fa6f665",
            historia:"Chris Kilmore, conocido en el mundo de la música como DJ Kilmore, es un músico estadounidense. Es uno de los miembros de la banda de rock californiana Incubus ."
        },
        {
            nombre:"Ben Kenney",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyjv-121a0.appspot.com/o/BenKenney-incubus.jpg?alt=media&token=c26558c4-8ebc-4010-afe1-fb96e5faf17b",
            historia:"Benjamin Lee Kenney, es un músico de Brielle, NJ Estados Unidos, y el bajista de la banda Incubus. Ben Kenney tocaba la guitarra para el grupo de hip-hop The Roots antes de unirse a Incubus en 2003 después de la salida del bajista y miembro fundador Alex Katunich Dirk Lance."
        }
    ]

    return(
        <>
            <h1 class="text-center fw-bold p-5">{titulo}</h1>
            <div class="container">
                <div class="row row-cols-1 row row-cols-md-3 g-5">
                    {
                        Integrantes.map(function(integrante){
                            return(
                                <>
                                
                                    <div class="col h-100">
                                        <h1 class="pb-3">{integrante.nombre}</h1>
                                        <div class="clearfix">
                                            <img src={integrante.foto} class="col-md-6 float-md-end mb-3 ms-md-3 img-fluid rounded-1" alt="fotico"/>

                                            <h5>
                                             {integrante.historia}
                                            </h5>
                                            <br/>
    

  
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