import React, { useState} from 'react';
import piedra from './Img/iconopiedra.png';
import papel from './Img/iconopapel.png';
import tijera from './Img/iconotijera.png';

function Elecciones({ onEleccionUsuario, nombreUsuario, reiniciarJuego }) {
  const opcionesJuego = ["piedra", "papel", "tijeras"];
  const [alertSinNombre, setAlertSinNombre] = useState(false);
  const manejarEleccion = (eleccionUsuario) => {
    if (!nombreUsuario) {
      setAlertSinNombre(true);
      return;
    }
    const eleccionPCAleatoria = opcionesJuego[Math.floor(Math.random() * 3)];
    onEleccionUsuario(eleccionUsuario, eleccionPCAleatoria);
  };

  return (
    <div className="container1">
      <h2>Elije tu jugada:</h2>
      {alertSinNombre && <p id="alertSinNombre">¡Debes ingresar tu nombre antes de jugar!</p>}
      <div className="button">
        <button
          id="button1"
          onClick={() => manejarEleccion("piedra")}
          disabled={!nombreUsuario || reiniciarJuego}
        >
          <img src={piedra} alt="Piedra" />
        </button>
        <button
          id="button2"
          onClick={() => manejarEleccion("papel")}
          disabled={!nombreUsuario || reiniciarJuego}
        >
          <img src={papel} alt="Papel" />
        </button>
        <button
          id="button3"
          onClick={() => manejarEleccion("tijeras")}
          disabled={!nombreUsuario || reiniciarJuego}
        >
          <img src={tijera} alt="Tijeras" />
        </button>
      </div>
    </div>
  );
}

export default Elecciones;

