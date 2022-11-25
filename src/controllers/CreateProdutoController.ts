import { Request, Response } from 'express';
import CreateProdutoService from 'src/services/CreateProdutoService';

export default class CreateProdutoController {
  async handle(request: Request, response: Response) {
    const { descricao, tamanho, categoria, preco, qtdEstoque, ativo } =
      request.body;

    const produto = new CreateProdutoService();

    const result = await produto.execute({
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
