import { getLaunches } from './api.js';

export const loadLaunchDetails = async (id) => {
  const launches = await getLaunches();
  const launch = launches.find((launch) => launch.id === id);

  if (!launch) return;

  const container = document.getElementById('launches-container');
  container.innerHTML = `
    <div class="launch-details">
      <img src="${launch.links.patch.small}" alt="${launch.name}" />
      <h2>${launch.name}</h2>
      <p><strong>Número de vuelo:</strong> ${launch.flight_number}</p>
      <p><strong>Fecha y hora de despegue:</strong> ${new Date(launch.date_utc).toLocaleString()}</p>
      <p><strong>Detalles:</strong> ${launch.details || 'No hay detalles disponibles'}</p>
      ${launch.failures.length ? '<p><strong>Fallas:</strong></p>' : ''}
      <ul>
        ${launch.failures.map(failure => `<li>${failure.reason}</li>`).join('')}
      </ul>
      <button id="back-button">Volver</button>
    </div>
  `;


  document.getElementById('back-button').addEventListener('click', () => {
    window.location.hash = '#/';
    // window.location.reload(); 
  });
};
