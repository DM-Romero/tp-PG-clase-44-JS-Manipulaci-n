/*alert("Hola mundo exterior")


let a = 1
let b = 4

let resultado = a + b
console.log(`resultado:${resultado}`);

console.log("holis desde la consola");



CAPTURAR LOS ELEMENTOS MAIN
---------------------------
console.log(window)
console.log(document);

const main = document.querySelector('main')
console.log(main)

CAPTURANDO H2 POR CLASS Y ID
----------------------------
const h2Title = document.querySelector('.subtitulo')
const h2Link = document.querySelector('#link')

console.log(h2Title);
console.log(h2Title.attributes)
console.log(h2Link);


MOSTRANDO LA a
--------------
const link = document.querySelector('h2#link a')

console.log(link)
console.log(link.textContent)


IF PARA EL NOMBRE
-----------------
if (nombre) {
    subtitulo.innerHTML += `${nombre}`; 
}else{
    subtitulo.innerHTML += 'Invitado';
}



*/

const main = document.querySelector('main')
const subtitulo = document.querySelector('.subtitulo')
const link = document.querySelector('h2#link a')
const parrafos = document.querySelectorAll('p')

//const nombre = prompt("Ingrese su nombre")

Swal.fire({
    title: "Ingresá tu nombre",
    input: "text",
    //inputLabel: "Nombre",
    showCancelButton: true,

}).then(({value: nombre})=> {
    subtitulo.innerHTML += nombre ? nombre : "Invitado"
    subtitulo.style.textTransform = "uppercase"
    link.style.color = "#E51B3E";
    //const respuesta = confirm("¿Desea colocar un fondo de pantalla?")

    Swal.fire({
        title: "Desea colocar un fondo de pantalla?",
        showDenyButton: true,
        confirmButtonText: "Aplicar",
        denyButtonText: `No, gracias`
    }).then((result) => {
        if (result.isConfirmed) document.body.classList.add("fondo")
    });

}).catch(error => console.log(error))

parrafos.forEach((parrafo, index)=> {
    ( index + 1) % 2 === 0 ? parrafo.classList.add("destacadoPar") : parrafo.classList.add("destacadoImpar")
})





