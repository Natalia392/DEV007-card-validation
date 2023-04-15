import validator from './validator.js';

//Declaro la variable del botón
const submitButton = document.getElementById('submitButton');

//Creo una función para que al ingresar el input, éste sólo acepte números.
/*function onlyNumbers() {
  if ((submitButton.keyCode < 48) && (submitButton.keyCode > 57)) 
  submitButton.returnValue = false;
} */

//Escucho el botón que envía los números de la tarjeta y guardo el valor recibido en la variable creditCardNumber
submitButton.addEventListener('click', () => {
  //Declaro la variable de los números de la tarjeta
  const creditCardNumber = document.getElementById('cardNumber').value;
  //Aplico la función maskify para los números ingresados
  const mask = validator.maskify(creditCardNumber);
  console.log(mask);
  


  // console.log(reversedArrayCreditCardNumber);
  //Identifico qué números son pares y qué números son impares en el array

  //Aplico la función isValid para los números ingresados
  const valid = validator.isValid(creditCardNumber);
  console.log(valid);
});


console.log(validator);








/* const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  let creditCardNumber = document.getElementById('cardNumber').value;
  console.log(creditCardNumber);
});
*/






    


