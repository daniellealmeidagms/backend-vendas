import { AppDataSource } from '@database/datasource';
import Produto from '@database/models/Produto';

type DeleteProdutoRequest = {
  id: string;
}

export default class DeleteProdutoService {
  async execute({id}:DeleteProdutoRequest) {
    const repo = AppDataSource.getRepository(Produto);

    const produto = await repo.findOne({ where: { id } });

    if (!produto) {
      return new Error('Produto não existe!');
    }

    produto.ativo = false;

    await repo.save(produto);

    return "Produto excluído com sucesso!";
  }
}
