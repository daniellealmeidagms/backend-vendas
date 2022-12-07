import { AppDataSource } from '@database/datasource';
import Produto from '@database/models/Produto';

type ProdutoRequest = { id: string };

export default class ReadOneProdutoService {
  async execute({ id }: ProdutoRequest) {
    const repo = AppDataSource.getRepository(Produto);
    const produto = await repo.findOne({ where: { id } });
    if (!produto) {
      return new Error('Produto não encontrado!');
    }
    return produto;
  }
}
