import CreateLojistaController from '@controllers/lojista/CreateLojistaController';
import DeleteLojistaController from '@controllers/lojista/DeleteLojistaController';
import ReadAllLojistaController from '@controllers/lojista/ReadAllLojistaControler';
import ReadOneLojistaController from '@controllers/lojista/ReadOneLojistaController';
import UpdateLojistaController from '@controllers/lojista/UpdateLojistaController';
import { Router } from 'express';

const lojistaRoutes = Router();

lojistaRoutes.get('/', new ReadAllLojistaController().handle);
lojistaRoutes.get('/:id', new ReadOneLojistaController().handle);
lojistaRoutes.post('/', new CreateLojistaController().handle);
lojistaRoutes.put('/:id', new UpdateLojistaController().handle);
lojistaRoutes.patch('/:id', new DeleteLojistaController().handle);

export default lojistaRoutes;
