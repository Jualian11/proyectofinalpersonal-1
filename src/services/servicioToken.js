export async function generarToken(){

    const client_id="client_id=659198131ac249eabbbf87aef0a65790"
    const client_secret="client_secret=4f313844847d4afc9436d4500c23aeb0"
    const grant_type="grant_type=client_credentials"

    let dataSend=grant_type+"&"+client_secret+"&"+client_id

    const URL="https://accounts.spotify.com/api/token"

    const REQUEST={
        method:"POST",
        headers:{"Content-type":"application/x-www-form-urlencoded"},
        body:dataSend
    }

    let respuesta=await fetch(URL,REQUEST)

    let token=await respuesta.json()

    let tokenDefinitivo=token.token_type+" "+token.access_token

    console.log(tokenDefinitivo)

}