import { Router } from 'express';
import { CreatePrecoController } from '../controllers/CreatePrecoController';
import { ReadAllPrecoController } from '../controllers/ReadAllPrecoController';
import { ReadOnePrecoController } from 'src/controllers/ReadOnePrecoController';
import { DeletePrecoController } from '../controllers/DeletePrecoController';
import { UpdatePrecoController } from '../controllers/UpdatePrecoController';

const routes = Router();
routes.post('/Preco', new CreatePrecoController().handle);
routes.get('/Preco', new ReadAllPrecoController().handle);
routes.get('/Preco', new ReadOnePrecoController().handle);
routes.delete('/Preco/:id', new DeletePrecoController().handle);
routes.put('/Preco/:id', new UpdatePrecoController().handle);
export { routes };
