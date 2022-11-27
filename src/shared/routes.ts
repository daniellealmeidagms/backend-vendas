import { Router } from 'express';
import { CreatePrecoController } from 'src/controllers/CreatePrecoController';
import { ReadAllPrecoController } from 'src/controllers/ReadAllPrecoController';
import { DeletePrecoController } from 'src/controllers/DeletePrecoController';
import { UpdatePrecoController } from 'src/Controllers/UpdatePrecoController';

const routes = Router();
routes.post('/Preco', new CreatePrecoController().handle);
routes.get('/Preco', new ReadAllPrecoController().handle);
routes.delete('/Preco/:id', new DeletePrecoController().handle);
routes.put('/Preco/:id', new UpdatePrecoController().handle);
export { routes };
