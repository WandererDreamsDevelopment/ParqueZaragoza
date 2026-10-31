document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');

    startBtn.addEventListener('click', () => {
        // Al dar clic, solicitamos acceso al GPS del teléfono de inmediato
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    console.log(`GPS obtenido con éxito: Lat ${lat}, Lon ${lon}`);
                    
                    // Aquí puedes redirigir a la vista del mapa/radar o cargar el modelo 3D
                    alert('¡GPS conectado! Entrando al tour virtual del Parque Zaragoza...');
                    // window.location.href = "mapa.html"; // Tu siguiente vista
                },
                (error) => {
                    alert('Por favor, activa los permisos de ubicación para disfrutar la experiencia Pokémon Go en el parque.');
                    console.warn(`Error de geolocalización: ${error.message}`);
                },
                { enableHighAccuracy: true }
            );
        } else {
            alert('Tu navegador no soporta geolocalización.');
        }
    });
});