import Home from '../pages/Home.js';
import RocketInfo from '../pages/RocketInfo';
import Error404 from '../pages/error404';

const routes = {
    '/': Home,
    '/info/:id': RocketInfo,
};

export default routes;
