import CreateEnderecoController from '@controllers/endereco/CreateEnderecoController';
import CreateProdutoController from '@controllers/produto/CreateProdutoController';
import DeleteProdutoController from '@controllers/produto/DeleteProdutoController';
import ReadAllProdutosController from '@controllers/produto/ReadAllProdutoController';
import ReadOneProdutoController from '@controllers/produto/ReadOneProdutoController';
import UpdateProdutoController from '@controllers/produto/UpdateProdutoController';
import { Router } from 'express';

const routes = Router();

// --- PRINCIPAL ---
// meusite.com.br/
routes.get('/', (req, res) => {
  return res.json({ message: 'Home Page' });
});

// --- PRODUTO ---
routes.get('/produtos', new ReadAllProdutosController().handle);
routes.get('/produtos/:id', new ReadOneProdutoController().handle);
routes.post('/produtos', new CreateProdutoController().handle);
routes.put('/produtos/:id', new UpdateProdutoController().handle);
routes.patch('/produtos/:id', new DeleteProdutoController().handle);

// --- VENDA ---
routes.post('/vendas', new CreateProdutoController().handle);

// --- VENDA ---
routes.post('/enderecos', new CreateEnderecoController().handle);

export default routes;
