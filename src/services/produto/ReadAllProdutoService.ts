import { AppDataSource } from '@database/datasource';
import Produto from '@database/models/Produto';

export default class ReadAllProdutoService {
  async execute() {
    const repo = AppDataSource.getRepository(Produto);

    // SELECT * FROM produtos
    const produtos = await repo.find({where: {ativo: true}});

    if (!produtos){
      return new Error("Não há nenhum produto cadastrado");
    }

    return produtos;
  }
}
