import { Router } from 'express';
import precoRoutes from './preco';
import produtoRoutes from './produto';

const routes = Router();

routes.use('/precos', precoRoutes);
routes.use('/produtos', produtoRoutes);

routes.get('/', (req, res) => {
  return res.json({ message: 'Home Page' });
});

export default routes;
