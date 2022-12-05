import { Request, Response } from 'express';
import CreateProdutoService from '@services/ProdutoServices';

const service = new CreateProdutoService();

export default class CreateProdutoController {
  
  async create(request: Request, response: Response) {
    const { descricao, tamanho, categoria, fkPreco, qtdEstoque } = request.body;
    const result = await service.create({
      descricao,
      tamanho,
      categoria,
      fkPreco,
      qtdEstoque,
    });
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }

  async readAll(request: Request, response: Response) {
    const result = await service.readAll();
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }

  async readOne(request: Request, response: Response) {
    const { id } = request.params;
    const result = await service.readOne({ id }); //Precisei colocar as chaves para funcionar, não sei o porquê.
    if(result instanceof Error){
      return response.status(404).json(result.message);
    }
    return response.json(result);
  }

  async update(request: Request, response: Response) {
    const { id } = request.params;
    const { descricao, tamanho, categoria, fkPreco, qtdEstoque } = request.body;
    const result = await service.update({
      id,
      descricao,
      tamanho,
      categoria,
      fkPreco,
      qtdEstoque,
    });
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const result = await service.delete({id});
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.status(204).end(result);
  }

}
