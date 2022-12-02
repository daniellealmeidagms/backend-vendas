import { Request, Response } from 'express';
import { ReadOneProdutoService } from 'src/services/ReadOneProdutoService';

export default class ReadOneProdutoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const idInt = parseInt(id);

    const service = new ReadOneProdutoService();

    const produtoProcurado = await service.execute({ idInt }); //Precisei colocar as chaves para funcionar, não sei o porquê.

    return response.json(produtoProcurado);
  }
}
