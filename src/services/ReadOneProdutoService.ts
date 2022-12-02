import { AppDataSource } from 'src/database/datasource';
import Produto from 'src/database/entities/Produto';

type ProdutoUpdateRequest = { idInt: number };

export class ReadOneProdutoService {
  async execute({ idInt }: ProdutoUpdateRequest) {
    const repo = AppDataSource.getRepository(Produto);
    const produto = await repo.findOne({ where: { id: idInt } });
    if (!Produto) {
      return new Error('Produto não encontrado!');
    }

    return produto;
  }
}
