import { getLaunches } from './api.js';
import { loadLaunchDetails } from './router.js';

const createCard = (launch) => {
  const card = document.createElement('div');
  card.classList.add('card');

  const image = document.createElement('img');
  image.src = launch.links.patch.small || 'https://via.placeholder.com/150';
  image.alt = launch.name;

  const title = document.createElement('h3');
  title.textContent = launch.name;

  image.addEventListener('click', () => {
    window.location.hash = `#/launch/${launch.id}`;
  });

  card.appendChild(image);
  card.appendChild(title);
  return card;
};

const displayLaunches = async () => {
  const launchesContainer = document.getElementById('launches-container');
  launchesContainer.innerHTML = ''; 
  const launches = await getLaunches();

  launches.slice(0, 10).forEach((launch) => {
    const card = createCard(launch);
    launchesContainer.appendChild(card);
  });
};

const handleRouting = async () => {
  const hash = window.location.hash;


  if (hash.startsWith('#/launch/')) {
    const launchId = hash.split('/')[2];
    await loadLaunchDetails(launchId);
  } else {

    await displayLaunches();
  }
};

window.addEventListener('hashchange', handleRouting);

window.addEventListener('DOMContentLoaded', handleRouting);
