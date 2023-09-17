// import React, { useState} from 'react';
import piedra from './Img/iconopiedra.png';
import papel from './Img/iconopapel.png';
import tijera from './Img/iconotijera.png';


 // Funcion que genera la eleccion de la pc y llama onElecciones pasada como prop y definida en app.js, 
 // que trae la eleccion del usuario tambien y llama a la funcion deterinarGanador 
function Elecciones({ onEleccionUsuario, nombreUsuario }) {
  const opcionesJuego = ["Piedra", "Papel", "Tijeras"];
  const manejarEleccion = (eleccionUsuario) => {
    const eleccionPCAleatoria = opcionesJuego[Math.floor(Math.random() * 3)];
    onEleccionUsuario(eleccionUsuario, eleccionPCAleatoria);
  };


  return (
    <div className="container1">
      <h2>Elije tu jugada:</h2>
      <div className="button">
        <button
          id="button1"
          // para que cuando haga click sea tomado como piedra. Cuando maejarEleccion pase Piedra como eleccion de
          // usuario en onEleccionUsuario se va a llamar a la func determnarGanador que tiene la logica para comparar
          // la eleccion de la pc con la del click del usuario y ver quien gana.
          onClick={() => manejarEleccion("Piedra")}
          // para que llame a manejarEleccion y tome la eleccion como piedra, solo si puso el nombre
          disabled={!nombreUsuario }
        >
          <img src={piedra} alt="Piedra" />
        </button>
        <button
          id="button2"
          // para que cuando haga click sea tomado como papel
          onClick={() => manejarEleccion("Papel")}
          // para que llame a manejarEleccion y tome la eleccion como papel, solo si puso el nombre
          disabled={!nombreUsuario}
        >
          <img src={papel} alt="Papel" />
        </button>
        <button
          id="button3"
          // para que cuando haga click sea tomado como tijera
          onClick={() => manejarEleccion("Tijeras")}
          // para que llame a manejarEleccion y tome la eleccion como tijera, solo si puso el nombre
          disabled={!nombreUsuario}
        >
          <img src={tijera} alt="Tijeras" />
        </button>
      </div>
    </div>
  );
}

export default Elecciones;

