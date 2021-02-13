const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)
/*s ele dice que el botton esta pendiente a un click y que nos muestre uno
de los chistes de base por decir lo asi */

generateJoke()
//ejecuta la funcion

// USING ASYNC/AWAIT
/*asyng y awai es para que esto sea asincono */
async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }
  /*esta parte es obligatoria para llamar la api 
  https://icanhazdadjoke.com/api*/

  const res = await fetch('https://icanhazdadjoke.com', config)
  /*se trae la api */
  /*la constnte config muestra un parametro de inicio */

  const data = await res.json()
  /*es para que en la constante data se guarden 
  en un fomrato json*/

  jokeEl.innerHTML = data.joke
  /*en la etiqueta con la clase joke renderiza me elemto joke del 
  json  */
}


