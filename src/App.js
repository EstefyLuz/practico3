// importo los componentes que necesito utilizar
import './App.css';
import React, { useState, useEffect } from 'react';
import Titulo from './componentes/componente1/Titulo';
import Input from './componentes/componente1/Input';
import SeleccionJugada from './componentes/componente2/SeleccionJugada';
import Elecciones from './componentes/componente2/Elecciones';
import Resultado from './componentes/componente3/Resultado';
import Reiniciar from './componentes/componente3/Reiniciar';

// Funcion principal con sus estados (useState, todo lo que sea set+algo es lo que se utiliza para actualizar los estados)
// Para poder ir trabajando con las actualizaciones de las elecciones, los marcadores, los nombres que se ingresen
// cantidad de intentos, etc.
function App() {
  const [eleccionUsuario, setEleccionUsuario] = useState(null);
  const [eleccionPc, setEleccionPc] = useState(null);
  const [intentos, setIntentos] = useState(0);
  const [marcadorJugador, setMarcadorJugador] = useState(0);
  const [marcadorPC, setMarcadorPC] = useState(0);
  const [nombreUsuario, setNombreUsuario] = useState('');
  const maxIntentos = 5;
  const rondasParaGanar = 3;
  const [reiniciarJuego, setReiniciarJuego] = useState(false);

  // Fucion para reiniciar el juego. Reinicia elecciones, intentos, marcador, nombre, todo al estado original.
  // poniendo setReiniciar econ el estado true para que active
  const reiniciarJuegoFunc = () => {
    setEleccionUsuario(null);
    setEleccionPc(null);
    setIntentos(0);
    setMarcadorJugador(0);
    setMarcadorPC(0);
    setNombreUsuario('');
    setReiniciarJuego(true);
  };

  // Funcion para desactivar el reinicio del juego desp de 1 segundo, vuelve al estado setReiniciarJuego en false,
  // porque me quedaba contantemente reiniciando y no permitia jugar despues del primer partido.
  useEffect(() => {
    if (reiniciarJuego) {
      setTimeout(() => {
        setReiniciarJuego(false);
      }, 1000);
    }
  }, [reiniciarJuego]);

  // funcion para manejar las elecciones que se hacen
  const onEleccionUsuario = (eleccionUsuario, eleccionPCAleatoria) => {
    setEleccionUsuario(eleccionUsuario);
    setEleccionPc(eleccionPCAleatoria);
    setIntentos(intentos + 1);
    determinarGanador(eleccionUsuario, eleccionPCAleatoria);
  };

  // Funcion para determinar quien es el que gana y si hay ganador suma los marcadores que correspondan
  const determinarGanador = (eleccionUsuario, eleccionPc) => {
    if (eleccionUsuario === "Piedra" && eleccionPc === "Tijeras") {
      setMarcadorJugador(marcadorJugador + 1);
    } else if (eleccionUsuario === "Papel" && eleccionPc === "Piedra") {
      setMarcadorJugador(marcadorJugador + 1);
    } else if (eleccionUsuario === "Tijeras" && eleccionPc === "Papel") {
      setMarcadorJugador(marcadorJugador + 1);
    }  else if (eleccionPc === eleccionUsuario){
        // que no sume a ninguno de los jugadores
    } else {
      setMarcadorPC(marcadorPC + 1);
    }

    // Condicional para saber cuando se debe llamar a la funcion de reiniciar el juego 
    // cuando se llegue al maximo de intentos o haya un ganador
    if ((intentos === maxIntentos) || (marcadorJugador >= rondasParaGanar) || (marcadorPC >= rondasParaGanar)) {
        reiniciarJuegoFunc();
      }
  };

  // Para que se muestre en pantalla / reenderizacion
  return (
    <div className="App">
      <header className="App-header">
        <Titulo />
        <Input setNombreUsuario={setNombreUsuario} nombreUsuario={nombreUsuario} reiniciarJuego={reiniciarJuego} />
        <SeleccionJugada eleccionUsuario={eleccionUsuario} eleccionPc={eleccionPc} />
        <Elecciones onEleccionUsuario={onEleccionUsuario} nombreUsuario={nombreUsuario} reiniciarJuego={reiniciarJuego} />
        <Resultado
          marcadorJugador={marcadorJugador}
          marcadorPC={marcadorPC}
          intentos={intentos}
          maxIntentos={maxIntentos}
          rondasParaGanar={rondasParaGanar}
          reiniciarJuego={reiniciarJuegoFunc}
          nombreUsuario={nombreUsuario}
        />
        <Reiniciar reiniciarJuego={reiniciarJuegoFunc} />
      </header>
    </div>
  );
}

export default App;
