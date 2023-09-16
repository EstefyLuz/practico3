import React from 'react';

function Resultado({
  marcadorJugador,
  marcadorPC,
  intentos,
  maxIntentos, //5

  nombreUsuario,
}) {
  return (
    <div className="container3" id="ronda">
     <h2 id="Marcador">Marcador</h2>
      <div className="anotaciones">
      </div>
      {((intentos === maxIntentos && marcadorJugador > marcadorPC) || (marcadorJugador === 3)) &&(
        <p>El juego terminó. Gana {nombreUsuario}</p>
      )}
      {((intentos === maxIntentos  && marcadorJugador < marcadorPC) || (marcadorPC ===3)) &&(
        <p>El juego terminó. Gana la compu</p>
      )}
      {intentos === maxIntentos && marcadorJugador === marcadorPC && (
        <p>El juego terminó. EmpateeeEEE</p>
      )}
      <div className="anotaciones">
        <p id="MarcadorUs">{nombreUsuario ? `${nombreUsuario}:` : "Usuario:"} {marcadorJugador}</p>
        <p id="MarcadorPc">Computadora: {marcadorPC}</p>
      </div>
      
    </div>
  );
}

export default Resultado;

