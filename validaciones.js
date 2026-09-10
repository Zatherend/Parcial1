const regionesYComunas = {
  "Arica y Parinacota": ["Arica", "Camarones", "Putre", "General Lagos"],
  "Tarapacá": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"],
  "Antofagasta": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"],
  "Atacama": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"],
  "Coquimbo": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"],
  "Valparaíso": ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Villa Alemana"],
  "Metropolitana de Santiago": ["Santiago", "Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"],
  "Libertador Gral. Bernardo O'Higgins": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"],
  "Maule": ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", " Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas"],
  "Ñuble": ["Chillán", "Bulnes", "Cobquecura", "Coelemu", "Coihueco", "Chillán Viejo", "El Carmen", "Ninhue", "Ñiquén", "Pemuco", "Pinto", "Portezuelo", "Quillón", "Quirihue", "Ránquil", "San Carlos", "San Fabián", "San Ignacio", "San Nicolás", "Treguaco", "Yungay"],
  "Biobío": ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualpén", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío"],
  "Araucanía": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"],
  "Los Ríos": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"],
  "Los Lagos": ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"],
  "Aysén del Gral. Carlos Ibáñez del Campo": ["Coyhaique", "Lago Verde", "Aysén", "Cisnes", "Guaitecas", "Cochrane", "O'Higgins", "Tortel", "Chile Chico", "Río Ibáñez"],
  "Magallanes y de la Antártica Chilena": ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos", "Antártica", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
};

document.addEventListener('DOMContentLoaded', () => {
  const formRegistro = document.getElementById('form-registro');
  const formLogin = document.getElementById('form-login');
  const selectRegion = document.getElementById('region');
  const selectComuna = document.getElementById('comuna');

  if (selectRegion && selectComuna) {

    selectRegion.innerHTML = '<option value="">Seleccione una región</option>';
    

    Object.keys(regionesYComunas).forEach(region => {
      const option = document.createElement('option');
      option.value = region;
      option.textContent = region;
      selectRegion.appendChild(option);
    });


    selectRegion.addEventListener('change', (e) => {
      const regionSeleccionada = e.target.value;
      selectComuna.innerHTML = '<option value="">Seleccione una comuna</option>';

      if (regionesYComunas[regionSeleccionada]) {
        regionesYComunas[regionSeleccionada].forEach(comuna => {
          const option = document.createElement('option');
          option.value = comuna;
          option.textContent = comuna;
          selectComuna.appendChild(option);
        });
      }
    });
  }
  


  const validarEmail = (email) => {
    const dominiosValidos = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'];
    const esDominioValido = dominiosValidos.some(dom => email.toLowerCase().endsWith(dom));
    return email.length > 0 && email.length <= 100 && esDominioValido;
  };

  const mostrarError = (input, mensaje) => {
    const contenedor = input.parentElement.querySelector('small');
    if (contenedor) {
      contenedor.textContent = mensaje;
      contenedor.style.color = 'red';
      }
  };

  const limpiarErrores = (form) => {
    form.querySelectorAll('small').forEach(s => s.textContent = '');
  };

  if (formRegistro) {
    formRegistro.addEventListener('submit', (e) => {
      limpiarErrores(formRegistro);
      let isValid = true;

      const nombre = formRegistro.querySelector('[name="nombre"]');
      const correo = formRegistro.querySelector('[name="correo"]');
      const password = formRegistro.querySelector('[name="password"]');

      if (!nombre.value.trim() || nombre.value.length > 100) {
        mostrarError(nombre, 'Nombre obligatorio (máx 100 caracteres)');
        isValid = false;
      }

      if (!validarEmail(correo.value)) {
        mostrarError(correo, 'Correo obligatorio (máx 100) y debe terminar en @duoc.cl, @profesor.duoc.cl o @gmail.com');
        isValid = false;
      }

      if (password.value.length < 4 || password.value.length > 10) {
        mostrarError(password, 'La contraseña debe tener entre 4 y 10 caracteres');
        isValid = false;
      }

      if (!isValid) e.preventDefault();
    });
  }


  if (formLogin) {
    formLogin.addEventListener('submit', (e) => {
      e.preventDefault(); 
      limpiarErrores(formLogin);
      let isValid = true;


      const correoInput = document.getElementById('email');
      const passwordInput = document.getElementById('password');
      
      const correo = correoInput.value.trim();
      const password = passwordInput.value;


      if (!validarEmail(correo)) {
        mostrarError(correoInput, 'Correo inválido (debe ser @duoc.cl, @profesor.duoc.cl o @gmail.com)');
        isValid = false;
      }


      if (password.length < 4 || password.length > 10) {
        mostrarError(passwordInput, 'La contraseña debe tener entre 4 y 10 caracteres');
        isValid = false;
      }

      if (isValid) {

        if (correo === "admin@duoc.cl" && password === "admin123") {
          alert("¡Bienvenido, Administrador!");
          localStorage.setItem("usuarioLogueado", JSON.stringify({ correo, rol: "Administrador" }));
          window.location.href = "admin-producto.html"; 
        } else {

          alert("¡Inicio de sesión exitoso!");
          localStorage.setItem("usuarioLogueado", JSON.stringify({ correo, rol: "Cliente" }));
          window.location.href = "productos.html"; 
        }
      }
    });
    }
  });