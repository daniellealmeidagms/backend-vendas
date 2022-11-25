import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' });
});

routes.get('/aluno', (req, res) => {
  return res.json({ message: 'Olá, Aluno!' });
});

export default routes;
