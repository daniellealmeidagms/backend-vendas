import { Request, Response } from 'express';
import { DeletePrecoService } from 'src/services/DeletePrecoService';

export class DeletePrecoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const idInt = parseInt(id);
    const service = new DeletePrecoService();
    const result = await service.execute({ idInt });
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.status(204).end();
  }
}
