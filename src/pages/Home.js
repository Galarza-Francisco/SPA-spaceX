import getData from "../utils/getData";
const Home = async () => {
  const rockets = await getData();

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
