// manipulacion de estilos de un elemento unico

const elemento = document.getElementById('estilo-unico');

elemento.style.backgroundColor = "red"; 
elemento.style.fontSize="30px";
elemento.style.textAlign="center";


// manipulacion de estilos varios elementos teniendo en cuenta su contenedor padre
const cajas_estilos = document.querySelectorAll('#estilos .caja');
cajas_estilos.forEach((caja,index) => {
caja.style.border="2px dashed blue";

});


// manipulacion de clases
elemento.classList.add('active');