import { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operacion, setOperacion] = useState("sumar");
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    let res;
    switch (operacion) {
      case 'sumar': res = num1 + num2; break;
      case 'restar': res = num1 - num2; break;
      case 'multiplicar': res = num1 * num2; break;
    }
    setResultado(res);
  };

  return (
    <div style={estilos.app}>
      <h1>Calculadora</h1>
      <input type="number" value={num1} onChange={e => setNum1(+e.target.value)} style={estilos.input} />
      <input type="number" value={num2} onChange={e => setNum2(+e.target.value)} style={estilos.input} />
      <select value={operacion} onChange={e => setOperacion(e.target.value)} style={estilos.input}>
        <option value="sumar">Sumar</option>
        <option value="restar">Restar</option>
        <option value="multiplicar">Multiplicar</option>
        <option value="dividir">Dividir</option>
      </select>
      <button
        onClick={calcular}
        disabled={operacion === 'dividir'}
        style={{ ...estilos.boton, opacity: operacion === 'dividir' ? 0.5 : 1 }}
      >
        Calcular
      </button>
      {resultado !== null && <p>Resultado: {resultado}</p>}
    </div>
  );
}

const estilos = {
  app: {
    backgroundColor: '#1e1b2e',
    color: '#e0d7f7',
    height: '100vh',
    textAlign: 'center',
    padding: '30px'
  },
  input: {
    backgroundColor: '#2d2740',
    color: '#e0d7f7',
    border: '1px solid #6b4f8c',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px'
  },
  boton: {
    backgroundColor: '#2d2740',
    color: '#e0d7f7',
    border: '1px solid #6b4f8c',
    borderRadius: '5px',
    padding: '10px 20px',
    marginTop: '10px'
  }
};

export default App;
