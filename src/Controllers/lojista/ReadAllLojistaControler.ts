import ReadAllLojistaService from '@services/lojista/ReadAllLojistaService';
import { Request, Response } from 'express';

export default class ReadAllLojistaController {
  async handle(request: Request, response: Response) {
    const service = new ReadAllLojistaService();
    const result = await service.execute();
    if (result.length < 1){
      return response.json('Nenhum lojista cadastrado!');
    }
    return response.json(result);
  }
}
