import { Request, Response } from 'express';
import ReadAllProdutoService from '../services/ReadAllProdutoService';

export default class ReadAllProdutoController {
  async handle(request: Request, response: Response) {
    const service = new ReadAllProdutoService();

    const produtos = await service.execute();

    return response.json(produtos);
  }
}
