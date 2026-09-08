document.addEventListener('DOMContentLoaded', () => {
    const tablaCarrito = document.getElementById('tabla-carrito');
    const totalPrecio = document.getElementById('total-precio');
    const botonVaciar = document.getElementById('vaciar-carrito');

    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    const renderizarCarrito = () => {
        tablaCarrito.innerHTML = '';
        let total = 0;

        carrito.forEach((producto, index) => {
            const subtotal = producto.precio * producto.cantidad;
            total += subtotal;

            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td><img src="${producto.imagen}" alt="${producto.nombre}" width="50"></td>
                <td>${producto.nombre}</td>
                <td>${producto.cantidad}</td>
                <td>$${subtotal.toFixed(2)}</td>
                <td><button class="btn-eliminar" data-index="${index}">Eliminar</button></td>
            `;
            tablaCarrito.appendChild(fila);
        });

        totalPrecio.innerText = total.toFixed(2);
    };

    const eliminarProducto = (index) => {
        carrito.splice(index, 1);
        localStorage.setItem('carrito', JSON.stringify(carrito));
        renderizarCarrito();
    };

    const vaciarCarrito = () => {
        carrito = [];
        localStorage.removeItem('carrito');
        renderizarCarrito();
    };

    tablaCarrito.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-eliminar')) {
            const index = e.target.dataset.index;
            eliminarProducto(index);
        }
    });

    if (botonVaciar) {
        botonVaciar.addEventListener('click', vaciarCarrito);
    }

    renderizarCarrito();
});