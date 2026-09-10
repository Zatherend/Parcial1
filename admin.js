document.addEventListener('DOMContentLoaded', () => {

    const formProducto = document.getElementById('form-producto');
    
    if (formProducto) {
        formProducto.addEventListener('submit', function(e) {
            e.preventDefault(); 
            

            const codigo = document.getElementById('codigoProducto').value.trim();
            const nombre = document.getElementById('nombreProducto').value.trim();
            const descripcion = document.getElementById('descripcionProducto').value.trim();
            const precio = parseFloat(document.getElementById('precioProducto').value);
            const stock = parseInt(document.getElementById('stockProducto').value);
            

            let errores = [];


            if (!codigo || codigo.length < 3) {
                errores.push("El código del producto es obligatorio y debe tener al menos 3 caracteres.");
            }


            if (!nombre || nombre.length > 100) {
                errores.push("El nombre del producto es obligatorio y no puede superar los 100 caracteres.");
            }


            if (descripcion.length > 500) {
                errores.push("La descripción no puede superar los 500 caracteres.");
            }


            if (isNaN(precio) || precio < 0) {
                errores.push("El precio es obligatorio y debe ser mayor o igual a 0.");
            }


            if (isNaN(stock) || !Number.isInteger(stock) || stock < 0) {
                errores.push("El stock es obligatorio, debe ser un número entero y mayor o igual a 0.");
            }

  
            if (errores.length > 0) {
                alert("⚠️ Errores en el formulario de producto:\n\n- " + errores.join("\n- "));
                return;
            }

    
            if (stock <= 5) {
                alert("⚠️ ¡Atención! El producto se ha guardado, pero se encuentra en Stock Crítico (5 o menos unidades disponibles).");
            } else {
                alert("✅ ¡Producto guardado y validado con éxito!");
            }


        });
    }



    const formUsuario = document.getElementById('form-usuario');

    if (formUsuario) {
        formUsuario.addEventListener('submit', function(e) {
            e.preventDefault();


            const run = document.getElementById('runUsuario').value.trim();
            const nombre = document.getElementById('nombreUsuario').value.trim();
            const apellidos = document.getElementById('apellidosUsuario').value.trim();
            const correo = document.getElementById('correoUsuario').value.trim();
            const rol = document.getElementById('rolUsuario').value;

            let errores = [];


            const regexRun = /^[0-9]+[0-9kK]{1}$/;
            if (!run) {
                errores.push("El RUT es obligatorio.");
            } else if (run.includes('.') || run.includes('-')) {
                errores.push("El RUT no debe contener puntos ni guion (Ej: 19011022K).");
            } else if (run.length < 7 || run.length > 9) {
                errores.push("El RUT debe tener una longitud de entre 7 y 9 caracteres.");
            } else if (!regexRun.test(run)) {
                errores.push("El formato del RUT no es válido.");
            }


            if (!nombre || nombre.length > 50) {
                errores.push("El nombre es obligatorio y máximo 50 caracteres.");
            }


            if (!apellidos || apellidos.length > 100) {
                errores.push("Los apellidos son obligatorios y máximo 100 caracteres.");
            }


            const dominiosPermitidos = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'];
            let dominioValido = dominiosPermitidos.some(dominio => correo.endsWith(dominio));

            if (!correo || correo.length > 100) {
                errores.push("El correo es obligatorio y máximo 100 caracteres.");
            } else if (!dominioValido) {
                errores.push("El correo debe pertenecer a uno de los dominios permitidos: @duoc.cl, @profesor.duoc.cl o @gmail.com");
            }


            if (!rol) {
                errores.push("Debe seleccionar un rol o tipo de usuario.");
            }


            if (errores.length > 0) {
                alert("⚠️ Errores en el formulario de usuario:\n\n- " + errores.join("\n- "));
                return;
            }

            alert("✅ ¡Usuario registrado/actualizado y validado con éxito!");
            

        });
    }
});