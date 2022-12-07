import { Request, Response } from 'express';
import GetAllAquisicaoService from '@services/aquisicao/ReadAllAquisicaoService';

export class GetAllAquisicaoController {
  async handle(request: Request, response: Response) {
    const service = new GetAllAquisicaoService();
    const result = await service.execute();
    if (result.length < 1){
      return response.json('Nenhuma aquisição cadastrada!');
    }
    return response.json(result);
  }
}
