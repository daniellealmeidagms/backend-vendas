import { Router } from 'express';
import { CreateClienteController } from 'src/controllers/CreateClienteController';

const routes = Router();
routes.post('/categories', new CreateClienteController().handle);

export { routes };
