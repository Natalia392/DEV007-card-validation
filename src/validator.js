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
    
    //Declaro el array vacío que luego contendrá los números en posiciones pares de la tarjeta
    const pairIndex = [];

    //Uso un for para agregar a un array todos los números en posiciones pares de la tarjeta
    for (let i = 1; i <= reverseArray.length; i += 2) {

      //El array contendrá los números que estaban en el índice par
      let pairIndexArray =  [];

      //Agrego los elementos del array reversado previamente 
      pairIndex.push(reverseArray[i]);
      
      //para que se agregue al array de los índices pares, lo igualo a la constante
      pairIndexArray = pairIndex;
      console.log(pairIndexArray);
    }
    console.log(pairIndex);
    //Se multiplican los números del array y se entrega un nuevo array de vuelta con los números *2
    const numberx2 = [];
    for (let i = 0; i < pairIndex.length; i++) {
      let numberx2Array = [];
      numberx2.push(pairIndex[i]*2);

      //Entonces, este array contiene los índices pares multiplicadosx2
      numberx2Array = numberx2;
      console.log(numberx2Array);

      // ------> Ahora tengo que pedir de vuelta el array y ver si los dígitos dan más de 9 

      //Declaro la variable que contendrá la suma final

      //Recorro el array de los números multiplicados por 2
      for (let i = 0; i < numberx2.length; i++) {

        //Extraigo los números multiplicados y lo guardo en la variable num
        const num = numberx2[i];
        
        //Si el número es mayor o igual a 10
        //Declaro el array que recibirá los números para sumar
        const sumOfAllNumbers = [];
        if (num >= 10) {

          //Declaro el número que resultará de la suma de los dígitos
          let resultSum = 0;

          //sumar sus dos dígitos. Para eso:
          
          //Declaro una array para cada uno de esos números >=10
          let sumDigits = num.toString();
          sumDigits = sumDigits.split('');
          for (i = 0; i < sumDigits.length; i++) {
            resultSum  = resultSum + parseInt(sumDigits[i]); //resultSum = parseInt(sumDigits[0]) + parseInt(sumDigits[1]);
          }
          //Sumo los números del array de los dígitos >=  10
          sumOfAllNumbers.push(resultSum);
          /*let total1 = 0
          for (i = 0; i < sumOfAllNumbers.length; i++) {
            //Este es el total de la suma de los números >= a 10
            total1 = total1 += sumOfAllNumbers[i];
          }
          console.log(total1); */
        } else {
          //Agrego los dígitos al array de números que no se sumaron sus dígitos.
          sumOfAllNumbers.push(num);
          console.log(sumOfAllNumbers);
        } 
      }
    }

    // eslint-disable-next-line prefer-const
    let validationContainer = false;
    return validationContainer;
  
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
