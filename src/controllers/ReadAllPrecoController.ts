import { Request, Response } from 'express';
import { ReadAllPrecoService } from 'src/services/ReadAllPrecoService';

export class ReadAllPrecoController {
  async handle(request: Request, response: Response) {
    const service = new ReadAllPrecoService();
    const preco = await service.execute();
    return response.json(preco);
  }
}
