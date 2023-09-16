import './App.css';
import React, { useState, useEffect } from 'react';
import Titulo from './componentes/componente1/Titulo';
import Input from './componentes/componente1/Input';
import SeleccionJugada from './componentes/componente2/SeleccionJugada';
import Elecciones from './componentes/componente2/Elecciones';
import Resultado from './componentes/componente3/Resultado';
import Reiniciar from './componentes/componente3/Reiniciar';

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

  const reiniciarJuegoFunc = () => {
    setEleccionUsuario(null);
    setEleccionPc(null);
    setIntentos(0);
    setMarcadorJugador(0);
    setMarcadorPC(0);
    setNombreUsuario('');
    setReiniciarJuego(true);
  };

  useEffect(() => {
    if (reiniciarJuego) {
      setTimeout(() => {
        setReiniciarJuego(false);
      }, 1000);
    }
  }, [reiniciarJuego]);

  const onEleccionUsuario = (eleccionUsuario, eleccionPCAleatoria) => {
    setEleccionUsuario(eleccionUsuario);
    setEleccionPc(eleccionPCAleatoria);
    setIntentos(intentos + 1);
    determinarGanador(eleccionUsuario, eleccionPCAleatoria);
  };

  const determinarGanador = (eleccionUsuario, eleccionPc) => {
    if (eleccionUsuario === "piedra" && eleccionPc === "tijeras") {
      setMarcadorJugador(marcadorJugador + 1);
    } else if (eleccionUsuario === "papel" && eleccionPc === "piedra") {
      setMarcadorJugador(marcadorJugador + 1);
    } else if (eleccionUsuario === "tijeras" && eleccionPc === "papel") {
      setMarcadorJugador(marcadorJugador + 1);
    }  else if (eleccionPc === eleccionUsuario){
        //nada
    } else {
      setMarcadorPC(marcadorPC + 1);
    }

    if ((intentos === maxIntentos) || (marcadorJugador >= rondasParaGanar) || (marcadorPC >= rondasParaGanar)) {
        reiniciarJuegoFunc();
      }
  };

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
