# Juego de PIEDRA, PAPEL O TIJERAS

El siguiente juego es el piedra, papel y tijeras, es una version muy similar a la del practico2 pero hecho con React. En este caso, se intento **corregir o mejorar algunas cuestiones con respecto al proyecto pasado**. 

## Como se juega? 🚀

Las reglas son las mismas:
* Papel gana a piedra, piedra gana a tijera y tijera gana a papel. 
* Se juega contra la pc. 
* la pc elige un número aleatorio del 0 al 2, donde cada una va a corresponder a una selección. 
* El usuario elije primeramente sin saber que eligió la computadora. 
* Luego de las elecciones saldran los resultados por pantalla.
* Gana la partida quien _gane mas veces en 5 intentos_ o _quien llegue a tres rondas ganadas primero._ 

### Para comenzar a jugar 📋

Para poder jugar es necesio ingresar un nombre, si no se ingresa, no se habilitan las opciones.

***Una de las mejoras realizadas es que en esta version, una vez que la persona ingresa su nombre de usuario, no le permite modificarlo en pleno juego, sino que tiene que terminar o reiniciar el mismo.***

### Instalación 🔧

Como siempre, no se necesita instalacion ya que se puede acceder a traves del link de github https://estefyluz.github.io/practico3/

## Ejecución las pruebas y mejoras ⚙️

***Campos de valores en input nombre*** Sigue igual se admite numeros, simbolos y letras, no toma como nombre si solo hay espacios, pero una vez ingresado el alias se bloquea la caja para comenzar el juego

***opciones de piedra, papel o tijeras:*** Sigue siendo necesario ingresar el nombre antes de seleccionar alguna opcion. 

***Resultados:*** 
Se muestran los resultados de la ronda en el marcador, quien contabiliza como estan saliendo las manos.

_Otra de las mejoras es que luego de ganar una partida ya no se puede seguir jugando como en la version anterior ya que ahora se condiciona a que cuando haya un ganador se reinicie el juego_

***Boton Reinicio:***
En la version anterior lo que hacia era recargar la pagina, ahora resetea al estado original las elecciones, cantidad de intentos intentos, marcadores y el nombre del jugador.


### Pruebas 🔩

Se realizaron pruebas para confirmar la funcionalidad del juego.

* Se han evaluado casos donde los campos de entrada esten vacíos, mostrando alertas para informar al usuario sobre la necesidad de completarlos.

* Se valdo que luego de determinarse un ganador no se pueda jugar mas y se reinicie el juego, independientemente de que la cantidad de jugadas que se hayan hecho.

* Se han realizado validaciones para verificar que los resultados de las rondas y el resultado final sean correctos. 

* Se han realizado validaciones para verificar que los marcadores y elecciones ingresen las opciones correctas.

* Se verifica el uso del boton reiniciar para confirmar que funcione correctamente.

## Comentarios a mejorar ⌨️

* También queda pendiente de mejorar que al hacer click en las elecciones sin haber agragado un nombre de usuario salga una alerta, por el momento la alerta solo sale cuando clickeamos _ingresar nombre_

* Por otro lado a mejorar, siempre se espero de mi parte, que las funciones sean mas limpias, creo que he mejorado al practico anterior, pero en algunos casos como id, etc, para el uso de css quizas me haya quedado codigo escrito inecesario. Por cuestiones de tiempo no llego a limpiarlo.

* Esta version tampoco cuenta con la mejora que se esperaba con respecto al uso de los botones de PIEDRA, PAPEL O TIJERAS, ya que no notifica que hay que ingresar un nombre (si no se ingreso ninguno) haciendo click en ellos. 
Se inteto hacerlo de la misma similar se habia manejado el boton de input. Donde verifico que no haya nombre para mostrar un parrafo, pero en este caso o no aparecia la nota si hacia click, o en otra version aparecia, pero lo hacia apenas iniciaba la pagina y no me gustaba. 
La logica era:
_Que cuando el usuario hiciera click en su eleccion, se verifique si el nombre de usuario estaba ingresado antes de gestionar la eleccion, de no ser asi debia salir la leyenda para que lo ingrese, pero la leyenda no salia_ Se deja un fragmento de codigo para ver mas adelante

```
function Elecciones({ onEleccionUsuario, nombreUsuario, reiniciarJuego }) {
...
  const [alertSinNombre, setAlertSinNombre] = useState(false);
  const manejarEleccion = (eleccionUsuario) => {
    if (!nombreUsuario) {
      setAlertSinNombre(true);
      return;
    }
   ...
  };

  return (
    <div className="container1">
      <h2>Elije tu jugada:</h2>
      {alertSinNombre && <p id="alertSinNombre">¡Debes ingresar tu nombre antes de jugar!</p>}
      <div className="button">
        <button
          id="button1"
         ...
        </button>
        ...
        </div>
    </div>
  );
}
```


## Construido con 🛠️

REACT.  
