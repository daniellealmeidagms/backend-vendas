import { Request, Response } from 'express';
import GetAllFornecedoresService from '@services/fornecedor/ReadAllFornecedoresServices';

export class GetAllFornecedoresController {
  async handle(request: Request, response: Response) {
    const service = new GetAllFornecedoresService();
    const result = await service.execute();
    return response.json(result);
  }
}
