import { Request, Response } from 'express';
import ReadAllProdutoService from '@services/produto/ReadAllProdutoService';

export default class ReadAllProdutoController {
  async handle(request: Request, response: Response) {
    const service = new ReadAllProdutoService();

    const result = await service.execute();

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
