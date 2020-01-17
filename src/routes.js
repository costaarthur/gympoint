import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import AdmController from './app/controllers/AdmController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.post('/admsessions', AdmController.store);

// routes.put('/users', authMiddleware, UserController.update);
// da para utilizar o middleware assim/\ de forma local

// ou de forma global assim. Ai funciona em apenas nas rotas abaixo dele
routes.use(authMiddleware);
routes.put('/users', UserController.update);

export default routes;
