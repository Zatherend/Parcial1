const productos = [
    { id: 1, nombre: "Monkey D. Luffy", precio: 3000000000, imagen: "img/luffycara.webp" },
    { id: 2, nombre: "Roronoa Zoro", precio: 1111000000, imagen: "img/zorocara.jpg" },
    { id: 3, nombre: "Nami", precio: 366000000, imagen: "img/namicara.jpg" },
    { id: 4, nombre: "Usopp", precio: 500000000, imagen: "img/usoppcara.webp" },
    { id: 5, nombre: "Vinsmoke Sanji", precio: 1032000000, imagen: "img/sanjicara.webp" },
    { id: 6, nombre: "Tony Tony Chopper", precio: 1000, imagen: "img/choppercara.jpg" },
    { id: 7, nombre: "Nico Robin", precio: 930000000, imagen: "img/nicorobincara.jpg" },
    { id: 8, nombre: "Franky", precio: 394000000, imagen: "img/frankycara.jpg" },
    { id: 9, nombre: "Brook", precio: 383000000, imagen: "img/brookcara.jpg" },
    { id: 10, nombre: "Jinbe", precio: 1100000000, imagen: "img/jinbecara.jpg" }
];

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function renderizarProductos() {
    const catalogo = document.getElementById('catalogo-productos');
    if (!catalogo) return;

    catalogo.innerHTML = productos.map(producto => `
            <div class="col-md-4 mb-4">
                <div class="card h-100 shadow-sm border-danger">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}" style="height: 300px; object-fit: cover;">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title text-danger fw-bold">${producto.nombre}</h5>
                        <p class="card-text text-muted fw-semibold">Recompensa: ${producto.precio.toLocaleString()} Berries</p>
                        <button class="btn btn-danger mt-auto" onclick="agregarAlCarrito(${producto.id})">Añadir al Carrito</button>
                    </div>
                </div>
            </div>
    `).join('');
}

window.agregarAlCarrito = function(id) {
    const productoSeleccionado = productos.find(p => p.id === id);
    if (!productoSeleccionado) return;

    const itemExistente = carrito.find(item => item.id === id);

    if (itemExistente) {
        itemExistente.cantidad++;
    } else {
        carrito.push({ ...productoSeleccionado, cantidad: 1 });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`¡Has añadido el cartel de ${productoSeleccionado.nombre} al carrito!`);
};

async function cargarDatosApi() {
    const apiContainer = document.getElementById('api-data');
    if (!apiContainer) return;

    const apiUrl = 'https://api.jikan.moe/v4/anime/21';

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('No se pudo conectar a la API');

        const { data: anime } = await response.json();
        apiContainer.innerHTML = `
            <ul class="list-unstyled mb-0">
                <li><strong>Título Oficial:</strong> ${anime.title}</li>
                <li><strong>Estado:</strong> ${anime.status}</li>
                <li><strong>Episodios Actuales:</strong> ${anime.episodes ? anime.episodes : 'En emisión continua'}</li>
                <li><strong>Puntuación Global:</strong> ⭐ ${anime.score} / 10</li>
                <li><strong>Rango de Popularidad:</strong> #${anime.popularity} en el mundo</li>
            </ul>
        `;
    } catch (error) {
        apiContainer.innerHTML = `<p class="text-danger">⚠️ Error al cargar los datos en vivo. Por favor, intenta más tarde.</p>`;
        console.error('Error en la API de Jikan:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderizarProductos();
    cargarDatosApi();
});