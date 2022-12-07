import { Request, Response } from 'express';
import GetAllFornecedoresService from '@services/fornecedor/ReadAllFornecedoresServices';

export class ReadAllFornecedoresController {
  async handle(request: Request, response: Response) {
    const service = new GetAllFornecedoresService();
    const result = await service.execute();
    if (result.length < 1){
      return response.json('Nenhum fornecedor cadastrado!');
    }
    return response.json(result);
  }
}
