import { getLaunches } from './api.js';

const getLaunchIdFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  return params.get('id');
};

const loadLaunchDetails = async () => {
  const launchId = getLaunchIdFromUrl();
  const launches = await getLaunches();
  const launch = launches.find(l => l.id === launchId);

  if (launch) {
    const launchDetailsContainer = document.getElementById('launch-details');

    const image = document.createElement('img');
    image.src = launch.links.patch.small || 'https://via.placeholder.com/150';
    image.alt = launch.name;

    const title = document.createElement('h2');
    title.textContent = launch.name;

    const flightNumber = document.createElement('p');
    flightNumber.textContent = `Número de vuelo: ${launch.flight_number}`;

    const date = document.createElement('p');
    date.textContent = `Fecha de despegue: ${new Date(launch.date_utc).toLocaleString()}`;

    const details = document.createElement('p');
    details.textContent = `Detalles: ${launch.details || 'No disponible'}`;

    const failures = document.createElement('p');
    failures.textContent = launch.failures.length ? `Fallas: ${launch.failures.map(f => f.reason).join(', ')}` : 'Sin fallas';

    launchDetailsContainer.appendChild(image);
    launchDetailsContainer.appendChild(title);
    launchDetailsContainer.appendChild(flightNumber);
    launchDetailsContainer.appendChild(date);
    launchDetailsContainer.appendChild(details);
    launchDetailsContainer.appendChild(failures);
  }
};

window.addEventListener('DOMContentLoaded', loadLaunchDetails);
