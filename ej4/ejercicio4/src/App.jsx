import { useState } from 'react';
import './App.css';

function App() {
  const [BtnIzqAct, setBtnIzqAct] = useState(true);

  const manejarIzquierdo = () => {
    setBtnIzqAct(false);
  };

  const manejarDerecho = () => {
    setBtnIzqAct(true);
  };

  return (
    <div className='contenedor'>
      <h1></h1>
      <button onClick={manejarIzquierdo} disabled={!BtnIzqAct}>
        Izquierdo
      </button>
      <button onClick={manejarDerecho} disabled={BtnIzqAct} style={{ marginLeft: '10px' }}>
        Derecho
      </button>
    </div>
  );
}

export default App;
