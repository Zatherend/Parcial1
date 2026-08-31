
document.addEventListener('DOMContentLoaded', () => {
    

    const apiUrl = 'https://api.jikan.moe/v4/anime/21'; 


    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo conectar a la API');
            }
            return response.json();
        })
        .then(data => {
        
            const anime = data.data;
            const apiContainer = document.getElementById('api-data');

           
            apiContainer.innerHTML = `
                <ul class="list-unstyled mb-0">
                    <li><strong>Título Oficial:</strong> ${anime.title}</li>
                    <li><strong>Estado:</strong> ${anime.status}</li>
                    <li><strong>Episodios Actuales:</strong> ${anime.episodes ? anime.episodes : 'En emisión continua'}</li>
                    <li><strong>Puntuación Global:</strong> ⭐ ${anime.score} / 10</li>
                    <li><strong>Rango de Popularidad:</strong> #${anime.popularity} en el mundo</li>
                </ul>
            `;
        })
        .catch(error => {
         
            const apiContainer = document.getElementById('api-data');
            apiContainer.innerHTML = `<p class="text-danger">⚠️ Error al cargar los datos en vivo. Por favor, intenta más tarde.</p>`;
            console.error('Error en la API de Jikan:', error);
        });
});