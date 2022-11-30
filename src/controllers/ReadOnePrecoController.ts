import { Request, Response } from 'express';
import { ReadOnePrecoService } from '../services/ReadOnePrecoService';

export class ReadOnePrecoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const idInt = parseInt(id);
    const service = new ReadOnePrecoService();
    const preco = await service.execute({ idInt });
    return response.json(preco);
  }
}
