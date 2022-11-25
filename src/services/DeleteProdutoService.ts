import { AppDataSource } from '../database/datasource';
import Produto from '../database/entities/Produto';

export default class DeleteProdutoService {
  async execute(id: string) {
    const repo = AppDataSource.getRepository(Produto);

    if (!(await repo.findOne(id))) {
      return new Error('Produto não existe!');
    }

    await repo.delete(id);
  }
}
