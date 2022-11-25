import { Request, Response } from 'express';
import DeleteProdutoService from 'src/services/DeleteProdutoService';

export default class DeleteProdutoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params; //Desestruturação
    const idInt = parseInt(id);
    const service = new DeleteProdutoService();
    const result = await service.execute(idInt);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(204).end();
  }
}
