import { CreateClienteController } from '@controllers/cliente/CreateClienteController';
import CreateEnderecoController from '@controllers/endereco/CreateEnderecoController';
import CreateLojistaController from '@controllers/lojista/CreateLojistaController';
import CreateVendaController from '@controllers/venda/CreateVendaController';
import { Router } from 'express';
import produtoRoutes from './produtos';

const routes = Router();

// --- PRINCIPAL ---
routes.get('/', (req, res) => {
  return res.json({ message: 'Home Page' });
});

// --- PRODUTO ---
routes.use('/produtos', produtoRoutes);

// --- VENDA ---
routes.post('/vendas', new CreateVendaController().handle);

// --- ENDEREÇO ---
routes.post('/enderecos', new CreateEnderecoController().handle);

// --- LOJISTA ---
routes.post('/lojistas', new CreateLojistaController().handle);

// --- CLIENTES ---
routes.post('/clientes', new CreateClienteController().handle);

export default routes;
