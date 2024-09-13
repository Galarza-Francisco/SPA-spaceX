import Header from '../templates/Header';
import Error404 from '../pages/error404.js';
import getHash from '../utils/getHash';
import routes from './routes';

const router = async () => {
    const header = document.getElementById('header');
    const content = document.getElementById('content');
    header.innerHTML = await Header();

    const route = getHash();

    // Busca la ruta que coincide en el objeto de rutas(routes.js)
    // Object.keys(routes) trae las rutas definidas en el objeto routes.js y el find busca la primer ruta que coincida con la ruta actual
    const rutasCoinciden = Object.keys(routes).find(r => {
        // trae la ruta por id y la ruta que estan definidas
        const ruta = route.split('/');
        const idRuta = r.split('/');

        // Verifica que las dos rutas coincidan, despues compara cada parte de las dos rutas y que tambien coincidan.
        return ruta.length === idRuta.length &&
            idRuta.every((part, i) => part === ruta[i] || part.startsWith(':'));
    });

    // inserta el contenido de la ruta que encuentra, sino da el error 404
    content.innerHTML = await (routes[rutasCoinciden] || Error404)();
};


export default router;
