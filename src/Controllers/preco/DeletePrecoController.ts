import { Request, Response } from 'express';
import { DeletePrecoService } from '@services/preco/DeletePrecoService';

export class DeletePrecoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const service = new DeletePrecoService();
    const result = await service.execute({ id });
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.status(200).json('Produto excluído com sucesso!');
  }
}
