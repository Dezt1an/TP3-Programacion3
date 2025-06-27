const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const operacion = document.getElementById("operacion");
const boton = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

operacion.addEventListener("change", () => {
  boton.disabled = operacion.value === "dividir";
});

boton.addEventListener("click", () => {
  const a = parseFloat(num1.value);
  const b = parseFloat(num2.value);
  let res;
  switch (operacion.value) {
    case "sumar": res = a + b; break;
    case "restar": res = a - b; break;
    case "multiplicar": res = a * b; break;
  }
  resultado.textContent = `Resultado: ${res}`;
});