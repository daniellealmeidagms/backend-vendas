import ReadOneLojistaService from '@services/lojista/ReadOneLojistaService';
import { Request, Response } from 'express';

export default class ReadOneLojistaController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const idInt = parseInt(id);
    const service = new ReadOneLojistaService();
    const result = await service.execute({ idInt });
    if (result instanceof Error) {
      response.status(400).json(result.message);
    }
    response.json(result);
  }
}
