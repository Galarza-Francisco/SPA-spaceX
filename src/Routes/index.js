import Header from '../templates/Header';
import Home from '../pages/Home.js';
import Rocket from '../pages/Rocket';
import RocketInfo from '../pages/RocketInfo';
import Error404 from '../pages/error404.js'
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/getResolveRoutes';
import routes from './routes';

const router = async () => {
    const header = document.getElementById('header');
    const content = document.getElementById('content');

    header.innerHTML = await Header();
    const hash = getHash();
    const route = resolveRoutes(hash);

    // Encontrar la ruta que coincide
    const matchingRoute = Object.keys(routes).find(r => {
        const routeParts = route.split('/');
        const routeKeys = r.split('/');
        if (routeParts.length !== routeKeys.length) return false;
        return routeKeys.every((part, i) => part === routeParts[i] || part.startsWith(':'));
    });

    const render = routes[matchingRoute] || Error404;
    content.innerHTML = await render();
};

export default router;