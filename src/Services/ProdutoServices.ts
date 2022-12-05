import { AppDataSource } from "@database/datasource";
import Produto from "@database/models/Produto";

type ProdutoCreateRequest = {
    descricao : string; // camiseta do brasil
    tamanho: string; //tamanho P
    categoria : string; // esportiva
    fkPreco : number;
    qtdEstoque : number;
}

type ProdutoUpdateRequest = {
  id: string;
  descricao: string;
  tamanho: string;
  categoria: string;
  fkPreco: number;
  qtdEstoque: number;
};

type ProdutoIdRequest = {
  id : string;
}

const repo = AppDataSource.getRepository(Produto);

export default class ProdutoService{

  async create({descricao, tamanho, categoria, fkPreco, qtdEstoque} : ProdutoCreateRequest): Promise <Produto | Error> {
    if (await repo.findOne({ where : {descricao} })) {
      return new Error("Produto já existe");
    }
    const produto = repo.create({
      descricao,
      tamanho,
      categoria,
      fkPreco,
      qtdEstoque
    });
    await repo.save(produto);
    return(produto);
  }

  async readAll() {
    const produtos = await repo.find({where: {ativo: true}});
    if (!produtos){
      return new Error("Não há nenhum produto cadastrado");
    }
    return produtos;
  }

  async readOne({ id }: ProdutoIdRequest): Promise <Produto | Error> {
    const produto = await repo.findOne({ where: { id } });
    if (!produto) {
      return new Error('Produto não encontrado!');
    }
    return produto;
  }

  async delete({ id }:ProdutoIdRequest) {
    const produto = await repo.findOne({ where: { id } });
    if (!produto) {
      return new Error('Produto não encontrado!');
    }
    produto.ativo = false;
    await repo.save(produto);
    return "Produto excluído com sucesso!";
  }

  async update({
    id,
    descricao,
    tamanho,
    categoria,
    fkPreco,
    qtdEstoque,
  }: ProdutoUpdateRequest): Promise <Produto | Error>{
    const produto = await repo.findOne({ where: { id } });
    if (!produto) {
      return new Error('Produto não encontrado!');
    }
    produto.descricao = descricao ? descricao : produto.descricao;
    produto.tamanho = tamanho ? tamanho : produto.tamanho;
    produto.categoria = categoria ? categoria : produto.categoria;
    produto.fkPreco = fkPreco ? fkPreco : produto.fkPreco;
    produto.qtdEstoque = qtdEstoque ? qtdEstoque : produto.qtdEstoque;
    await repo.save(produto);
    return produto;
  }

}