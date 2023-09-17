import React from 'react';
// Tomo las propiedades desde App.js (padre) para recibir las props actuales de marcador, intentosm quien juega...
function Resultado({
  marcadorJugador,
  marcadorPC,
  intentos,
  maxIntentos, 
  nombreUsuario,


}) {
  // Lo que devuelve en pantalla segun corresponda el estado de los marcadores y la cantidad de intentos.
  // Dependiendo lo que suceda con la jugada, muestra el mensaje que corresponda.
  return (
    <div className="container3" id="ronda">
     <h2 id="Marcador">Marcador</h2>
      <div className="anotaciones">
      </div>
      {((intentos === maxIntentos && marcadorJugador > marcadorPC) || (marcadorJugador === 3)) &&(
        <p>El juego terminó. Feliciataciones {nombreUsuario} , GANASTE!!!</p>
      )}
      {((intentos === maxIntentos  && marcadorJugador < marcadorPC) || (marcadorPC ===3)) &&(
        <p>El juego terminó. PERDISTE {nombreUsuario} , te gano la Computadora</p>
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

