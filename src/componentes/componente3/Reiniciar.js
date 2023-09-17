import React from 'react';


// Funcion que arma el boton de reinicio. Y llama a la funcion de reiniciarJuego para que haga lo suyo
function Reiniciar({ reiniciarJuego }) {
  return (
    <div className="container4">
      <button id="reiniciar" onClick={reiniciarJuego}>
        Reiniciar Juego
      </button>
    </div>
  );
}

export default Reiniciar;
