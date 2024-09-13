import getHash from '../utils/getHash';
import getData from '../utils/getData';
const Rocket = async () => {
    const id = getHash();
    console.log('ID del cohete:', id);

    const rockets = await getData();
    const rocket = rockets.find(rocket => rocket.id === id);

    if (!rocket) {
        console.error('No se encontró el cohete con el ID:', id);
        return '<p>Cohete no encontrado</p>';
    }

    const view = `
        <div class="Rockets-inner">
        <article class="Rockets-card">
            <img src="${rocket.links.patch.small}" alt="${rocket.name}">
            <h3>Fallas: <span>${rocket.failures.length}</span></h3>
            <h3>Detalles: <span>${rocket.details ? rocket.details : 'No disponible'}</span></h3>
            <h3>Números de vuelo: <span>${rocket.cores[0].flight}</span></h3>
            <h3>Fecha y hora de despegue: <span>${rocket.date_utc}</span></h3>
        </article>
        </div> 
    `;
    return view;
};

export default Rocket;
