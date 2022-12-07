import CreateVendaController from '@controllers/endereco/CreateEnderecoController';
import ReadAllVendaController from '@controllers/venda/ReadAllVendaController';
import ReadOneVendaController from '@controllers/venda/ReadOneVendaController';
import { Router } from 'express';

const vendaRoutes = Router();

vendaRoutes.post('/', new CreateVendaController().handle);
vendaRoutes.get('/', new ReadAllVendaController().handle);
vendaRoutes.get('/:id', new ReadOneVendaController().handle);
//vendaRoutes.put('/:id', new UpdateVendaController().handle);
//vendaRoutes.patch('/:id', new DeleteVendaController().handle);

export default vendaRoutes;
