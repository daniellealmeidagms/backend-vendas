import { AppDataSource } from 'src/database/datasource';
import Produto from 'src/database/entities/Produto';

type ProdutoUpdateRequest = {
  id: number;
  descricao: string;
  tamanho: string;
  categoria: string;
  preco: number;
  qtdEstoque: number;
  ativo: boolean;
};

export default class UpdateProdutoService {
  //Defult permite que apenas 1 classe seja instanciada
  async execute({
    id,
    descricao,
    tamanho,
    categoria,
    preco,
    qtdEstoque,
    ativo,
  }: ProdutoUpdateRequest) {
    const repo = AppDataSource.getRepository(Produto);

    const produto = await repo.findOne(id);

    if (!produto) {
      return new Error('Produto não existe!');
    }

    produto.id = id ? id : produto.id;
    produto.descricao = descricao ? descricao : produto.descricao;
    produto.tamanho = tamanho ? tamanho : produto.tamanho;
    produto.categoria = categoria ? categoria : produto.categoria;
    produto.preco = preco ? preco : produto.preco;
    produto.qtdEstoque = qtdEstoque ? qtdEstoque : produto.qtdEstoque;
    produto.ativo = ativo ? ativo : produto.ativo;

    await repo.save(produto);

    return produto;
  }
}
