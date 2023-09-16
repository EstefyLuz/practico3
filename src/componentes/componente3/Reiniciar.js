import React from 'react';

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
