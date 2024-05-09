// function animar() {
//     // Obtén todos los elementos que quieres animar
//     const elementoAnimado = document.getElementsByClassName('.animacion');
//     elementoAnimado.addEventListener('animationend', () => {
//         elementoAnimado.style.display = 'none';
//     });
    
    
// }

// document.getElementById("click").addEventListener("click", animar);

// const elementos = document.getElementsByClassName

function animar() {
    var elementos = document.getElementsByClassName('animacion');
    for (var i = 0; i < elementos.length; i++) {
        // Agregar clase para iniciar la animación
        elementos[i].classList.add('anima');

        // Utilizar setTimeout para ocultar los elementos después de la animación
        setTimeout(function(elemento) {
            elemento.style.display = 'none';
        }, 2000, elementos[i]); // 2000ms (2 segundos) es la duración de la animación
    }
}



document.getElementById('click').addEventListener('click',animar );

// function activarAnimacion() {
//     const elementosAnimados = document.getElementsByClassName('animacion');

//     // Itera sobre todos los elementos seleccionados por la clase 'LabTecno'
//     for (let i = 0; i < elementosAnimados.length; i++) {
//         const elementoAnimado = elementosAnimados[i];

//         // Escucha el evento 'click' para cada elemento
//         elementoAnimado.addEventListener('click', () => {
//             // Agrega la clase de animación al hacer clic
//             elementoAnimado.classList.add('animacion');

           
//         });
//     }
// }

// // Llama a la función activarAnimacion() cuando se carga el DOM
// document.addEventListener('DOMContentLoaded', activarAnimacion);


