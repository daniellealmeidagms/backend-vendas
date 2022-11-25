import { Router } from 'express';
import { CreatePrecoController } from 'src/controllers/CreatePrecoController';
import { ReadAllPrecoController } from 'src/controllers/ReadAllPrecoController';
import { DeletePrecoController } from 'src/controllers/DeletePrecoController';

const routes = Router();
routes.post('/Preco', new CreatePrecoController().handle);
routes.get('/Preco', new ReadAllPrecoController().handle);
routes.delete('/Preco/:id', new DeletePrecoController().handle);
export { routes };
