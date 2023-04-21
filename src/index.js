import validator from './validator.js';

//Declaro la variable del botón
const submitButton = document.getElementById('submitButton');

//Escucho el botón que envía los números de la tarjeta y guardo el valor recibido en la variable creditCardNumber
submitButton.addEventListener('click', () => {
  //Declaro la variable de los números de la tarjeta
  const creditCardNumber = document.getElementById('cardNumber').value;
  //Aplico la función maskify para los números ingresados
  validator.maskify(creditCardNumber);
  console.log(validator.maskify(creditCardNumber));

  //Aplico la función isValid para los números ingresados
  const valid = validator.isValid(creditCardNumber);
  if (valid === true) {
    alert('Tu tarjeta es válida');
  } else {
    alert('Tu tarjeta es inválida');
  }

  console.log(creditCardNumber);
});



console.log(validator);








/* const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  let creditCardNumber = document.getElementById('cardNumber').value;
  console.log(creditCardNumber);
});
*/









