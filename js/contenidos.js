// cambiar contenidos a elementos unicos

const caja = document.getElementById('caja-unica');
const estilos_clases = document.querySelector('#estilos_clases');



caja.innerText="cambio en el texto #1 con innerText";
caja.innerHTML="cambio en el texto #2 con innerHTML";
caja.textContent="cambio en el texto #3 con textContent";
estilos_clases.innerText="manipulacion de estilos css y clases"

// cambiar contenidos a elementos multiples

const cajas_contenidos = document.querySelectorAll('.caja-contenidos');
cajas_contenidos.forEach((caja, index) => {
caja.innerText="caja multiple numero #" + index
caja.style.color="blue"
caja.style.fontSize = "45px"
caja.style.textAlign="right"
});