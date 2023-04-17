const validator = {

  //Aquí va la función isValid
  isValid: function(numberValidation) {
    //Declaro la variable que transforma los números ingresados en un array
    const createArray = numberValidation.split('');
    console.log(createArray);
    //Declaro la variable que transforma el array de string en array de números
    const arrayOfNumbers = createArray.map(Number);
    console.log(arrayOfNumbers);
    //Declaro la variable que reversa el array de números 
    const reverseArray = arrayOfNumbers.reverse();
    console.log(reverseArray);

    //Creo una función para identificar qué números son pares y qué números son impares en el array
    // eslint-disable-next-line no-unused-vars
    function pairIndex(arr) {
      //Uso un for para agregar a un array todos los números en posiciones pares de la tarjeta
      for (let i = 1; i <= arr.lenght; i += 2) {
        //Declaro el array vacío que luego contendrá los números en posiciones pares de la tarjeta
        let pairIndexOfArray = [];
        //El array contendrá los números que estaban en el índice par
        pairIndexOfArray = pairIndexOfArray.push(arr[i]);
        //Multipliar el número * 2
        const multiplyByTwo = pairIndexOfArray.map(function(element) {
          return element * 2;
        });
        console.log(multiplyByTwo);
        //Si el producto entre el número y 2 es mayor o igual a 10
        if (multiplyByTwo >= 10) {
        //Los dígitos del producto entre el número y dos se suman
        
        }
        //Si no, nos quedamos con el valor del producto entre ese número y dos

      }
      // eslint-disable-next-line prefer-const
      let validationContainer = false;
      return validationContainer;
    
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
    return maskedNumbers + shownNumbers
  }
};

export default validator;
