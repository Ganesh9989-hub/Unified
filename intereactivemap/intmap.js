document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([10.49, 77.89], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    const marker = L.marker([51.505, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();

    map.on('click', function(e) {
        const { lat, lng } = e.latlng;
        L.marker([lat, lng]).addTo(map)
            .bindPopup(`You clicked the map at ${lat.toFixed(2)}, ${lng.toFixed(2)}`)
            .openPopup();
    });
});
