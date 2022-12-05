// --- PRODUTO ---
import { Router } from 'express';
import ProdutoControllers from '@controllers/ProdutoControllers';

const produtoRoutes = Router();
const produtoController = new ProdutoControllers();

produtoRoutes.get('/', produtoController.readAll);
produtoRoutes.get('/:id', produtoController.readOne);
produtoRoutes.post('/', produtoController.create);
produtoRoutes.put('/:id', produtoController.update);
produtoRoutes.patch('/:id', produtoController.delete);

export default produtoRoutes;