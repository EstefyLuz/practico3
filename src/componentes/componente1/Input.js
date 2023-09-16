import React, { useState, useEffect } from 'react';

function Input({ setNombreUsuario, nombreUsuario, reiniciarJuego }) {
  const [nombre, setNombre] = useState('');
  const [alertSinNombre, setAlertSinNombre] = useState(false);
  const [alertConNombre, setAlertConNombre] = useState(false);

  useEffect(() => {
    if (reiniciarJuego) {
      setNombre('');
      setAlertSinNombre(false);
      setAlertConNombre(false);
    }
  }, [reiniciarJuego]);

  const manejarCambioInput = (evento) => {
    setNombre(evento.target.value);
  };

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
        disabled={alertConNombre || reiniciarJuego}
      />
      <button
        id="botonNombre"
        onClick={manejarClicBoton}
        disabled={alertConNombre || reiniciarJuego}
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
