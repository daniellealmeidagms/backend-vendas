import { AppDataSource } from '../database/datasource';
import Produto from '../database/entities/Produto';

type ProdutoRequest = {
  descricao: string;
  tamanho: string;
  categoria: string;
  preco: number;
  qtdEstoque: number;
  ativo: boolean;
};

export default class CreateProdutoService {
  async execute({
    descricao,
    tamanho,
    categoria,
    preco,
    qtdEstoque,
    ativo,
  }: ProdutoRequest): Promise<Produto | Error> {
    const repo = AppDataSource.getRepository(Produto);

    /*if (await repo.findOne({ descricao})) {
      return new Error("Produto ja existe");
    }*/

    const produto = repo.create({
      descricao,
      tamanho,
      categoria,
      preco,
      qtdEstoque,
      ativo,
    });

    await repo.save(produto);

    return produto;
  }
}
