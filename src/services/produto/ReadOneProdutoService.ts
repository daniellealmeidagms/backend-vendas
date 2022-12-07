import { AppDataSource } from 'src/database/datasource';
import Produto from '@database/models/Produto';

type ProdutoUpdateRequest = { id: string };

export class ReadOneProdutoService {
  async execute({ id }: ProdutoUpdateRequest) {
    const repo = AppDataSource.getRepository(Produto);
    // SELECT * FROM produtos WHERE id = $id LIMIT 1
    const produto = await repo.findOne({ where: { id } });
    if (!produto) {
      return new Error('Produto não encontrado!');
    }
    return produto;
  }
}
