import CreateFornecedorController from '@controllers/fornecedor/CreateFornecedorController';
import { DeleteFornecedoresControler } from '@controllers/fornecedor/DeleteFornecedoresController';
import ReadAllFornecedorController from '@controllers/fornecedor/ReadAllFornecedorController';
import ReadOneFornecedorController from '@controllers/fornecedor/ReadOneFornecedorController';
import { UpdateFornecedoresController } from '@controllers/fornecedor/UpdateFornecedoresController';
import { Router } from 'express';

const fornecedorRoutes = Router();

fornecedorRoutes.post('/', new CreateFornecedorController().handle);
fornecedorRoutes.get('/', new ReadAllFornecedorController().handle);
fornecedorRoutes.get('/:id', new ReadOneFornecedorController().handle);
fornecedorRoutes.put('/:id', new UpdateFornecedoresController().handle);
fornecedorRoutes.patch('/:id', new DeleteFornecedoresControler().handle);

export default fornecedorRoutes;