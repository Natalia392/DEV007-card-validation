import validator from './validator.js';

//Declaro la variable del botón
const submitButton = document.getElementById('submitButton');

const inputBox = document.getElementById('cardNumber'); //para obtener lo ingresado en el input

const justNumbers = document.getElementById('just-numbers');

inputBox.addEventListener('input', (event) => {
  const inputRegistered = event.target.value; //El input recibido 
  const regex = /^[0-9]/g; //Búsqueda global de caracteres que no sean dígitos
  inputBox.value = inputRegistered.replace(/\s/g, '').replace(/\D/g, ''); //Usando el método replace, se impide que ingrese spaces (\s) ni letras (\D)

  if (regex.test(inputBox.value) === true) {
    justNumbers.innerHTML = '';
  } else {
    justNumbers.innerHTML = 'Sólo puedes ingresar números';
  }
});

//Escucho el botón que envía los números de la tarjeta y guardo el valor recibido en la variable creditCardNumber
submitButton.addEventListener('click', () => {
  
  const creditCardNumber = document.getElementById('cardNumber').value; //Declaro la variable de los números de la tarjeta
  
  const mask = validator.maskify(creditCardNumber); //Declaro la constante para mask los números ingresados

  const valid = validator.isValid(creditCardNumber); //Declaro la constante para validar los números

  const respuestaMask = document.getElementById('respuesta-mask'); //Para mostrar en pantalla los números enmascarados:

  const isItValid = document.getElementById('isItValid');

  //para que no acepte un input vacío:
  if((creditCardNumber === '')) {
    alert('Ingresa tu tarjeta')
  } else {
    //Para mostrar a la usuaria si su tarjeta es o no válida, el siguiente condicional:
    if (valid === true) {

      isItValid.innerHTML = 'Tu tarjeta es válida';
      respuestaMask.innerHTML = 'Tarjeta ingresada: ' +  mask;

    } else {

      isItValid.innerHTML = 'Tu tarjeta es inválida';
      respuestaMask.innerHTML = 'Tarjeta ingresada: ' +  mask;
    }
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









