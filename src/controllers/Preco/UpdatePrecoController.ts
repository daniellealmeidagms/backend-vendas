import { Request, Response } from 'express';
import { UpdatePrecoService } from '../services/UpdatePrecoService';

export class UpdatePrecoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { valor, descricao } = request.body;
    const service = new UpdatePrecoService();
    const result = await service.execute({ id, valor, descricao });
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
}
