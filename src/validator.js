const validator = {

  //Aquí va la función isValid
  isValid: function(numberValidation) {

    const createArray = numberValidation.split(''); //Declaro la variable que transforma los números ingresados en un array
    
    const arrayOfNumbers = createArray.map(Number); //Declaro la variable que transforma el array de string en array de números
    
    const reverseArray = arrayOfNumbers.reverse(); //Declaro la variable que reversa el array de números 
    //console.log(reverseArray);
    

    //A partir del array reversado, saco los índices pares y los multiplico por 2
    for (let i = 0; i < reverseArray.length; i++) {
      //condición: 
      if(i % 2 !== 0) {
        reverseArray[i] = reverseArray[i]*2;

        //numberx2 = reverseArray[i] //Agrego los índices pares a la constante declarada previamente
        if (reverseArray[i] >= 10) {
          let resultSum = 0;
          const sum2Digits = reverseArray[i].toString().split('');
          //console.log(sum2Digits + 'Los números de dos dígitos');
          for(let i = 0; i < sum2Digits.length; i++) {
            resultSum = resultSum + parseInt(sum2Digits[i]);
          }
          reverseArray[i] = resultSum;
          resultSum = 0; //Para reinicar el resultSum en 0 al inicio del nuevo ciclo
        }
      }
    }  
      
    let sumOfAllNumbers = 0; //Inicializo la variable que sumará todos los números
    //sumo todos los números
    for(let i = 0; i < reverseArray.length; i++) {
      sumOfAllNumbers = sumOfAllNumbers + parseInt(reverseArray[i]);
      //console.log((reverseArray[i]) + ' El array de los índices pares, multiplicados por 2');
    }
    
    //console.log((sumOfAllNumbers) + ' Esta es mi suma');
    
    if (sumOfAllNumbers % 10 === 0) {
      return true;
    } else {
      return false;
    }
  },

  // Aquí va la función maskify
  maskify: function(numbersToMaskify) {
    //Números que se deben ocultar
    const numbersToHide = numbersToMaskify.slice(0, -4);
    //Números que se deben mostrar
    const shownNumbers = numbersToMaskify.slice(-4);
    //Tapar los números
    const maskedNumbers = numbersToHide.replace(/./g, '#');
    //Pido que me devuelva todos los números, primero los que se ocultan, luego los que se muestran.
    return maskedNumbers + shownNumbers;
  },
};

export default validator;
