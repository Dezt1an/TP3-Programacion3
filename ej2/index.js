const palabras = ["manzana", "banana", "pera", "durazno", "frutilla", "mango"];
const input = document.getElementById("busqueda");
const lista = document.getElementById("lista");
const mensaje = document.getElementById("mensaje");
const boton = document.getElementById("filtrar");

function mostrarLista(filtradas) {
  lista.innerHTML = "";
  if (filtradas.length === 0) {
    mensaje.textContent = "No se encontraron coincidencias.";
    return;
  }
  mensaje.textContent = "";
  filtradas.forEach(p => {
    const li = document.createElement("li");
    li.textContent = p;
    lista.appendChild(li);
  });
}

boton.addEventListener("click", () => {
  const texto = input.value.trim().toLowerCase();
  if (texto === "") {
    mensaje.textContent = "Error: el campo está vacío.";
    lista.innerHTML = "";
    return;
  }
  const filtradas = palabras.filter(p => p.toLowerCase().includes(texto));
  mostrarLista(filtradas);
});