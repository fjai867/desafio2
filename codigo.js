document.getElementById("btnid").addEventListener('click',adivinanza)


function adivinanza(){
    const url ='https://api.adviceslip.com/advice'
    fetch(url)
    .then(response=> response.json())
    .then(datos => {
        document.getElementById('titulo').innerHTML=`<h3>advice # ${datos.slip.id}</h3>`
        document.getElementById('parrafo').innerHTML=`<p>${datos.slip.advice}</p>`
    })

    .catch(err => console.log(err))
}