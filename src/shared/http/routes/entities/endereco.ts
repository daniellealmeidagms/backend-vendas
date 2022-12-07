import CreateEnderecoController from '@controllers/endereco/CreateEnderecoController';
import ReadAllEnderecoController from '@controllers/endereco/ReadAllEnderecoController';
import ReadOneEnderecoController from '@controllers/endereco/ReadOneEnderecoController';
import { Router } from 'express';

const enderecoRoutes = Router();

enderecoRoutes.post('/', new CreateEnderecoController().handle);
enderecoRoutes.get('/', new ReadAllEnderecoController().handle);
enderecoRoutes.get('/:id', new ReadOneEnderecoController().handle);
//enderecoRoutes.put('/:id', new UpdateEnderecoController().handle);
//enderecoRoutes.patch('/:id', new DeleteEnderecoController().handle);

export default enderecoRoutes;