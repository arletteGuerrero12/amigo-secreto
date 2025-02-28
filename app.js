let amigos = [];

function anadirAmigo() {
    let friend = document.getElementById('amigo').value.trim(); // Elimina espacios en blanco al inicio y al final
    if (friend === '') {
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(friend); // Agrega el nombre ingresado al array
        console.log(amigos); // Para verificar en la consola que se está agregando correctamente
        document.getElementById('amigo').value = ''; // Limpia el input después de agregar
        mostrarAmigos(); // Llamar a la función para actualizar la lista
    }
}
function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos'); // Obtener el elemento <ul>
    lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li'); // Crear un nuevo elemento <li>
        li.textContent = amigos[i]; // Asignar el nombre del amigo
        lista.appendChild(li); // Agregar <li> a la lista <ul>
    }
}
function sortearAmigo() {
     
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Generar índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio]; // Obtener el nombre del amigo sorteado
    document.getElementById('resultado').innerHTML = `🎉 Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
