const btnFacebook = document.getElementById('btn-facebook');
const imgUnica = document.querySelector('#imagen-unica');



imgUnica.setAttribute('alt' , 'texto alternativo agregado por js')
btnFacebook.innerHTML = `<img src="img/facebook.png" alt="Facebook" width="30">`;
btnFacebook.setAttribute('href','https://www.facebook.com/')