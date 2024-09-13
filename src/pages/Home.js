import getData from "../utils/getData";
import getHash from "../utils/getHash";
const Home = async () => {
  const rockets = await getData(); // Asegúrate de que getData es una función

  const view = `
       <div class="Rockets">
    ${rockets
      .map(
        (rocket) => `
        <article class="Rocket-item">
            <a href="#/info/${rocket.id}">
                <div class="Rocket-card">
                    <img src="${rocket.links.patch.small}" alt="${rocket.name}">
                    <h2>${rocket.name}</h2>
                </div>
            </a>
        </article>
    `
      )
      .join("")}
</div>

    `;
  return view;
};

export default Home;
