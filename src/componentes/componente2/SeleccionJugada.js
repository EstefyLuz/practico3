import React from 'react';

// Funcion que retorna las modificaciones del HTML para que en pantalla se vean las elecciones elegidas por cada
// jugador, tomando como props eleccionUsuario y eleccionPC de App.js
function SeleccionJugada({ eleccionUsuario, eleccionPc }) {
  return (
    <div className="container2" id="seleccionarJugada">
      <h2>Elecciones:</h2>
        <div className="eleccionUs">
          <p id="usElije">Usuario: {eleccionUsuario || '-'}</p>
        </div>
        <div className="pcElije">
          <p id="pcElije">Computadora: {eleccionPc || '-'}</p>
        </div>
      </div>

  );
}

// Exporto para usar en App.js
export default SeleccionJugada;
