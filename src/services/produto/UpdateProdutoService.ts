import { AppDataSource } from '@database/datasource';
import Produto from '@database/entities/Produto';

type ProdutoUpdateRequest = {
  id: string;
  descricao: string;
  tamanho: string;
  categoria: string;
  fkPreco: number;
  qtdEstoque: number;
};

export default class UpdateProdutoService {
  //Defult permite que apenas 1 classe seja instanciada
  async execute({
    id,
    descricao,
    tamanho,
    categoria,
    fkPreco,
    qtdEstoque,
  }: ProdutoUpdateRequest): Promise <Produto | Error>{
    
    const repo = AppDataSource.getRepository(Produto);

    // SELECT * FROM produtos WHERE id = $id LIMIT 1
    const produto = await repo.findOne({ where: { id } });

    if (!produto) {
      return new Error('Produto não existe!');
    }

    // SE...ENTÃO...SENÃO
    //  condição ? então : senão
    // o valor que já estava na variável é o diferente do que o usuário informou
    // se isto for verdade, então armazene o valor informado pelo usuário
    // senão, mantenha o valor que já estava
    produto.descricao = descricao ? descricao : produto.descricao;
    produto.tamanho = tamanho ? tamanho : produto.tamanho;
    produto.categoria = categoria ? categoria : produto.categoria;
    produto.fkPreco = fkPreco ? fkPreco : produto.fkPreco;
    produto.qtdEstoque = qtdEstoque ? qtdEstoque : produto.qtdEstoque;

    // UPDATE produtos SET ... WHERE id = $id
    await repo.save(produto);

    return produto;
  }
}
