import { AppDataSource } from '../database/datasource';
import Produto from '../database/entities/Produto';

export default class DeleteProdutoService {
  async execute(id: number) {
    const repo = AppDataSource.getRepository(Produto);

    if (!(await repo.findOne({ where: { id: id } }))) {
      return new Error('Produto não existe!');
    }

    await repo.delete(id);
  }
}
