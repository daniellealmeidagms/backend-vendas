import { Request, Response } from 'express';
import UpdateProdutoService from 'src/services/UpdateProdutoService';

export default class UpdateProdutoController {
  async handle(request: Request, response: Response) {
    const { idString } = request.params;
    const {
      descricao,
      tamanho,
      categoria,
      precoString,
      qtdEstoqueString,
      ativoString,
    } = request.body;

    const id = parseInt(idString);
    const preco = parseFloat(precoString);
    const qtdEstoque = parseInt(qtdEstoqueString);
    const ativo: boolean = ativoString;

    const service = new UpdateProdutoService();

    const result = await service.execute({
      id,
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
