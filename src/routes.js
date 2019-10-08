import { Router } from 'express';
import Sc7010Controller from './app/controllers/Sc7010Controller';

const routes = new Router();

/*routes.get('/', (req, res) => {
    return res.json('deu certo');
});*/

routes.get('/pedidos', Sc7010Controller.index);

export default routes;
