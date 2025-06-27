import { useState } from 'react';
import './App.css';

function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [color, setColor] = useState('');

  const calcularIMC = () => {
    const imc = peso / (altura * altura);
    let nivel = '';
    let colorNivel = '';
    if (imc < 18.5) {
      nivel = 'Nivel bajo';
      colorNivel = '#ffba0a';
    } else if (imc < 25) {
      nivel = 'Nivel normal';
      colorNivel = '#355840';
    } else if (imc < 30) {
      nivel = 'Sobrepeso';
      colorNivel = '#ca6702';
    } else {
      nivel = 'Obesidad';
      colorNivel = '#9b2227';
    }

    setMensaje(`IMC: ${imc.toFixed(2)} - ${nivel}`);
    setColor(colorNivel);
  };

  return (
    <div className="app">
      <h1>Calculadora de IMC</h1>
      <input
        type="number"
        placeholder="Peso (kg)"
        onChange={(e) => setPeso(+e.target.value)}
      />
      <input
        type="number"
        placeholder="Altura (m)"
        onChange={(e) => setAltura(+e.target.value)}
      />
      <button onClick={calcularIMC}>Calcular</button>
      {mensaje && (
        <p className="mensaje" style={{ backgroundColor: color }}>
          {mensaje}
        </p>
      )}
    </div>
  );
}

export default App;

