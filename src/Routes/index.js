import Header from '../templates/Header';
import Error404 from '../pages/error404.js';
import getHash from '../utils/getHash';
import routes from './routes';

const router = async () => {
    const header = document.getElementById('header');
    const content = document.getElementById('content');
    header.innerHTML = await Header();

    // trae la ruta 
    const route = getHash();

   // busca la ruta que coincide
const rutasCoinciden = Object.keys(routes).find(r => {
    const partesRuta = route.split('/');
    const idRuta = r.split('/');
    return partesRuta.length === idRuta.length &&
        idRuta.every((part, i) => part === partesRuta[i] || part.startsWith(':'));
});

content.innerHTML = await (routes[rutasCoinciden] || Error404)();

};

export default router;
