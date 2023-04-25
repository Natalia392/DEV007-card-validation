# Tarjeta de crédito válida

https://natalia392.github.io/DEV007-card-validation/ 

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos buscados durante el desarrollo del proyecto](#3-consideraciones-generales)
* [4. El proyecto](#4-El-proyecto)
* [5. Conclusiones](#5-conclusiones)


***

## 1. Preámbulo

Para el proyecto Card Validation, se nos pide crear una página web para ingresar números de tarjetas de crédito. 
A partir de los números inngresados, esta página debe lograr dos cosas:

1. Que se valide si el número puede pertenecer a una tarjeta de crédito. 
Para esto se utiliza el algoritmo de Luhn, que indica los pasos a seguir para procesar un número
y verificar que pueda pertenecer a una tarjeta de crédito válida.

2. Que muestre en pantalla los números de la tarjeta, ocultándolos todos salvo los últimos cuatro.

    ![gráfica de algoritmo de Luhn](https://user-images.githubusercontent.com/12631491/217016579-865679e0-0949-4afd-b13f-d2ebba7a0c54.png)

## 2. Resumen del proyecto

Temática:

Al pensar este proyecto, se pensó en que en el momento de comprar
en una tienda online o de pagar online, las páginas pueden
redirigir a los usuarios a una ventana para pagar.
Esta es una ventana en la que aparece simplemente la instrucción de introducir
los números de la tarjeta, seguido de la imagen de una tarjeta a modo de 
ejemplo y luego el campo para ingresar los números con su respectivo botón.

Se eligió un blanco con tono rosa, para generar un aspecto tranquilo
y un azul para complementarlo.

La página muestra en pantalla, debajo del botón, el número de tarjeta oculto
y también los mensajes que indican si la tarjeta es válida o inválida, así 
como el mensaje que advierte que se deben ingresar sólo números.

## 3. Objetivos buscados durante el desarrollo del proyecto

**Se nos plantearon los siguientes objetivos:**

* Trabajar en base a un boilerplate, la estructura básica de un proyecto en
  distintas carpetas (a través modulos en JS).
* Conocer las herramientas de mantenimiento y mejora del código (linters y
  pruebas unitarias).
* Aprender sobre objetos, estructuras, métodos e iteración (bucles)
  en JavaScript
* Implementar control de versiones con git (y la plataforma github)

Este proyecto se resolvió de manera individual, 
en el período de 2 sprints. 


## 4. El proyecto:

En la página desarrollada nos encontramos con lo siguiente:

**Diseño de la página:**

**La interfaz permite a la usuaria:**

Como se mencionó, la página tiene una interfaz que presenta
un input para anotar los números y un botón para ingresarlos.

**Estas son algunas de las imágenes que se tomaron como referencia
para diseñar el prototipo:**


![](/src/img/card-eg.png)


![](/src/img/card-eg2.png)


**Este es el prototipo que se diseñó:**


![](/src/img/prototipo.png)



**Funcionalidad de la página**

Respecto a la funcionalidad, la página permite: 

* Insertar un numero para validar. Este input sólo permite
  usar caracteres numéricos en la tarjeta a validar [0-9].  
* Muestra en pantalla los siguientes mensajes:
  * Los números de la tarjeta ocultos hasta los últimos cuatro dígitos.
  * El mensaje que indica si la tarjeta es válida o inválida.
  * Un mensaje en rojo que advierte que sólo se pueden ingresar números
    en el caso de que la usuaria ingrese letras o espacios.
* Si se presiona el botón sin haber enviado nada, manda un alert que
  indica que debe ingresarse el número de la tarjeta.


## 5. Conclusiones

La idea al desarrollar el proyecto fue crear una interfaz simple 
y sin más que lo requerido al momento de pagar online, es decir,  
la información para poder procesar el pago con su tarjeta.
 
El objetivo de los usuarios es introducir su tarjeta para que se valide
y así poder realizar el proceso de pago.

Bajo esa consideración, se cumple con entregar esa interfaz al usuario
y la validación o no validación de su tarjeta, así como facilitarle
el no ingresar caracteres que de por sí serán inválidos.

