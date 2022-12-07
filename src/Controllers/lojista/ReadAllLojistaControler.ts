import ReadAllLojistaService from '@services/lojista/ReadAllLojistaService';
import { Request, Response } from 'express';

export default class ReadAllLojistaController {
  async handle(request: Request, response: Response) {
    const service = new ReadAllLojistaService();
    const categories = await service.execute();
    return response.json(categories);
  }
}
