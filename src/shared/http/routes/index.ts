import { CreateAquisicaoController } from '@controllers/aquisicao/CreateAquisicaoController';
import { DeleteAquisicaoController } from '@controllers/aquisicao/DeleteAquisicaoController';
import { GetAllAquisicaoController } from '@controllers/aquisicao/GetAllAquisicaoController';
import { UpdateAquisicaoController } from '@controllers/aquisicao/UpdateAquisicaoController';
import { CreateClienteController } from '@controllers/cliente/CreateClienteController';
import CreateEnderecoController from '@controllers/endereco/CreateEnderecoController';
import { CreateFornecedorController } from '@controllers/fornecedor/CreateFornecedorController';
import { GetAllFornecedoresController } from '@controllers/fornecedor/GetallFornecedoresController';
import CreateLojistaController from '@controllers/lojista/CreateLojistaController';
import { CreatePrecoController } from '@controllers/preco/CreatePrecoController';
import { DeletePrecoController } from '@controllers/preco/DeletePrecoController';
import { ReadAllPrecoController } from '@controllers/preco/ReadAllPrecoController';
import { ReadOnePrecoController } from '@controllers/preco/ReadOnePrecoController';
import { UpdatePrecoController } from '@controllers/preco/UpdatePrecoController';
import CreateProdutoController from '@controllers/produto/CreateProdutoController';
import DeleteProdutoController from '@controllers/produto/DeleteProdutoController';
import ReadAllProdutosController from '@controllers/produto/ReadAllProdutoController';
import ReadOneProdutoController from '@controllers/produto/ReadOneProdutoController';
import UpdateProdutoController from '@controllers/produto/UpdateProdutoController';
import CreateVendaController from '@controllers/venda/CreateVendaController';
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
routes.post('/vendas', new CreateVendaController().handle);

// --- ENDEREÇO ---
routes.post('/enderecos', new CreateEnderecoController().handle);

// --- LOJISTA ---
routes.post('/lojistas', new CreateLojistaController().handle);

// --- CLIENTES ---
routes.post('/clientes', new CreateClienteController().handle);


// --- PREÇO ---
routes.post('/precos', new CreatePrecoController().handle)
routes.get('/precos', new ReadAllPrecoController().handle)
routes.get('/precos/:id', new ReadOnePrecoController().handle)
routes.put('/precos/:id', new UpdatePrecoController().handle)
routes.delete('/precos/:id', new DeletePrecoController().handle)

// --- PREÇO ---
routes.post('/fornecedores', new CreateFornecedorController().handle)
routes.get('/fornecedores', new GetAllFornecedoresController().handle)
routes.get('/fornecedores/:id', new ReadOnePrecoController().handle)
routes.put('/fornecedores/:id', new UpdatePrecoController().handle)
routes.delete('/fornecedores/:id', new DeletePrecoController().handle)

// --- AQUISIÇÕES ---
routes.post('/aquisicoes', new CreateAquisicaoController().handle)
routes.get('/aquisicoes', new GetAllAquisicaoController().handle)
routes.put('/aquisicoes/:id', new UpdateAquisicaoController().handle)
routes.patch('/aquisicoes/:id', new DeleteAquisicaoController().handle)


export default routes;
