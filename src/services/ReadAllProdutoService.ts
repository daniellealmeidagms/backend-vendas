import { AppDataSource } from '../database/datasource';
import Produto from '../database/entities/Produto';

export default class ReadAllProdutoService {
  async execute() {
    const repo = AppDataSource.getRepository(Produto);

    const produto = await repo.find();

    return produto;
  }
}
