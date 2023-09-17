import React, { useState, useEffect} from 'react';

// Funcion para manejar el input, uso props para actualizar el nombre del jugador, mostrarlo si ingresa el nombre 
// o pedirle que lo ingrese. Y reinicar el campo en el caso de que se reinicie el juego.
function Input({ setNombreUsuario, nombreUsuario, reiniciarJuego }) {
  // Estados pra almacenar el nombre y gestionar las alertas si hay o no hay nombre
  const [nombre, setNombre] = useState('');
  const [alertSinNombre, setAlertSinNombre] = useState(false);
  const [alertConNombre, setAlertConNombre] = useState(false);

  // Funcion para reiniciar el nombre cuando se reinicie el juego
  useEffect(() => {
    if (reiniciarJuego) {
      setNombre('');
      setAlertSinNombre(false);
      setAlertConNombre(false);
    }
  }, [reiniciarJuego]);

  // Funcion para manajar los cambios en input, para capturar los cambios que hayan si escriben el nombre 
  const manejarCambioInput = (evento) => {
    setNombre(evento.target.value);
  };

  // Funcion para el click en "Ingresar" el nombre. Si no puso nombre, cuando hace click se verifica que el
  // campo o este vacio, si lo esta se pasa a alertSinNombre a true, para mostrar por pantalla el mensaje de que 
  // lo tiene que ingresar antes de jugar. Si pone el nombre actualiza el nombre en setNombreUsuario y setAlertNombre
  // queda en true para mostrar el Bienvend@...
  const manejarClicBoton = () => {
    if (nombre.trim() === '') {
      setAlertSinNombre(true);
    } else {
      setAlertSinNombre(false);
      setAlertConNombre(true);
      setNombreUsuario(nombre);
    }
  };

  
  return (
    <div className="container1">
      <input
        type="text"
        id="nombre"
        placeholder="Ingresa tu Nombre"
        value={nombre}
        onChange={manejarCambioInput}
        //Si el input tiene nombre se desabilita
        disabled={alertConNombre}
      />
      
      <button
        id="botonNombre"
        onClick={manejarClicBoton}
        // Desabilito "Ingresar si hay nombre", si no hay nombre> muestro el mensaje para que lo ponga
        // si pone el nombre se le da la bienvenida
        disabled={alertConNombre}
      > 
        Ingresar
      </button>
      {alertSinNombre && <p id="alertSinNombre">¡Si no sabemos quien es el rival no podemos Jugar!</p>}
      {alertConNombre && (
        <p id="alertConNombre">Bienvenid@: {nombreUsuario}</p>
      )}
    </div>
  );
}

export default Input;
