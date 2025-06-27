const lista = document.getElementById("lista-tareas");

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(res => res.json())
  .then(data => {
    const completadas = data.filter(t => t.completed);
    completadas.forEach(t => {
      const li = document.createElement("li");
      li.textContent = t.title;
      lista.appendChild(li);
    });
  });