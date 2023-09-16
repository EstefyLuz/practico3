import React from 'react';

function SeleccionJugada({ eleccionUsuario, eleccionPc }) {
  return (
    <div className="container2" id="seleccionarJugada">
      <h2>Elecciones:</h2>
      <div className="anotaciones">
        <div className="eleccionUs">
          <p id="usElije">Usuario: {eleccionUsuario || '-'}</p>
        </div>
        <div className="pcElije">
          <p id="pcElije">Computadora: {eleccionPc || '-'}</p>
        </div>
      </div>
    </div>
  );
}

export default SeleccionJugada;
