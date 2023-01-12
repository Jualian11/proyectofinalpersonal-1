import { Footer } from "../shared/Footer/Footer"

export function Integrantes(){

    let titulo="Integrantes INCUBUS"

    let Integrantes=[
        {
            nombre:"Pucho, Juan Pedro Martín Almarza",
            foto:"https://firebasestorage.googleapis.com/v0/b/stopify-banda.appspot.com/o/Pucho-vetusta.webp?alt=media&token=12687403-0c6a-45fe-865f-b3ee5592dc02",
            historia:"Pucho es cantante e intérprete de Vetusta Morla desde 1998, con la que ha publicado cinco álbumes de estudio, dos en directo y dos bandas sonoras. Ha trabajado para la Filmoteca Española y el Museo Nacional Thyssen–Bornemisza, y ha formado parte de jurado de varios festivales de cine."
        },
        {
            nombre:"Jorge González Giralda",
            foto:"https://firebasestorage.googleapis.com/v0/b/stopify-banda.appspot.com/o/Jorge_Gonz%C3%A1lez-vetusta.jpg?alt=media&token=69a4a7e9-0db3-4586-89a9-c434ec586772",
            historia:"Percucionista y programador, no hay mucha informacion sobre el."
        },
        {
            nombre:"David García",
            foto:"https://firebasestorage.googleapis.com/v0/b/stopify-banda.appspot.com/o/david-garcia-vetusta.jpg?alt=media&token=8ebcc15b-aab2-4eba-8a3c-40d4c5369da5",
            historia:"Miembro de Vetusta Morla, David García –más conocido como “El Indio”– es además un gran experto en sonidos funk-rumberos-flamencos como lleva tiempo demostrando. Ahora es el responsable de la compilación “Gipsy Power."
        },
        {
            nombre:"Guillermo Galván",
            foto:"https://firebasestorage.googleapis.com/v0/b/stopify-banda.appspot.com/o/Guille-galvan-vetusta.jpg?alt=media&token=ac476d36-994c-49b0-a3cc-2353b137dddc",
            historia:"Miembro de Vetusta Morla, guitarrista."
        },
        {
            nombre:"Juan Manuel Latorre",
            foto:"https://firebasestorage.googleapis.com/v0/b/stopify-banda.appspot.com/o/juan-manuel-vetusta.jpg?alt=media&token=56722091-b2f7-4c1f-a5a1-dc2a58848dcb",
            historia:"Miembro de Vetusta Morla, guitarrista."
        },
        {
            nombre:"Álvaro B. Baglietto",
            foto:"https://firebasestorage.googleapis.com/v0/b/stopify-banda.appspot.com/o/Alvaro-b-vetusta.jpg?alt=media&token=ee538b1e-e44c-4f36-b2d6-4b04e5d8cd64",
            historia:"Miembro de Vetusta Morla, bajista de la banda."
        }
    ]

    return(
        <>
            <h1 className="text-center fw-bold p-5">{titulo}</h1>
            <div className="container">
                <div className="row row-cols-1 row row-cols-md-3 g-5">
                    {
                        Integrantes.map(function(integrante){
                            return(
                                <>
                                
                                    <div className="col h-100">
                                        <h1 className="pb-3">{integrante.nombre}</h1>
                                        <div className="clearfix">
                                            <img src={integrante.foto} className="col-md-6 float-md-end mb-3 ms-md-3 img-fluid rounded-1" alt="fotico"/>

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