import validator from './validator.js';

//Declaro la variable del botón
const submitButton = document.getElementById('submitButton');

//Escucho el botón que envía los números de la tarjeta y guardo el valor recibido en la variable creditCardNumber
submitButton.addEventListener('click', () => {
  
  const creditCardNumber = document.getElementById('cardNumber').value; //Declaro la variable de los números de la tarjeta
  
  const mask = validator.maskify(creditCardNumber); //Declaro la constante para mask los números ingresados

  const valid = validator.isValid(creditCardNumber); //Declaro la constante para validar los números

  //Para mostrar en pantalla los números enmaskarados:
  const respuestaMask = document.getElementById('respuesta-mask');


  //Para mostrar a la usuaria si su tarjeta es o no válida, el siguiente condicional:
  if (valid === true) {
    alert('Tu tarjeta es válida');
    respuestaMask.innerHTML = 'Tu tarjeta es válida';
    respuestaMask.innerHTML = 'Tu tarjeta ingresada: ' +  mask;
  } else {
    alert('Tu tarjeta es inválida');
    respuestaMask.innerHTML = 'Tu tarjeta es inválida';
    respuestaMask.innerHTML = 'Tu tarjeta ingresada: ' +  mask;
  }

  //console.log(creditCardNumber);
});



//console.log(validator);








/* const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  let creditCardNumber = document.getElementById('cardNumber').value;
  console.log(creditCardNumber);
});
*/









