import { Request, Response } from 'express';
import { UpdateProdutoService } from 'src/services/UpdateProdutoService';

export default class UpdateProdutoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { descricao, tamanho, categoria, preco, qtdEstoque, ativo } =
      request.body;
    const service = new UpdateProdutoService();

    const result = await service.execute({
      descricao,
      tamanho,
      categoria,
      preco,
      qtdEstoque,
      ativo,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
