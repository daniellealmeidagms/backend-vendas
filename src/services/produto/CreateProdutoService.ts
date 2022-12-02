import { AppDataSource } from "@database/datasource";
import Produto from "@database/entities/Produto";

type CreateProdutoRequest = {
    descricao : string; // camiseta do brasil
    tamanho: string; //tamanho P
    categoria : string; // esportiva
    fkPreco : number;
    qtdEstoque : number;
}

export default class CreateProdutoService{
  async execute({descricao, tamanho, categoria, fkPreco, qtdEstoque} :CreateProdutoRequest): Promise <Produto | Error> {
      
    const repo = AppDataSource.getRepository(Produto);

    const produto = repo.create({
      descricao,
      tamanho,
      categoria,
      fkPreco,
      qtdEstoque
    });

    // INSERT INTO produtos (id, descricao ...) VALUES('2jhfsd7', 'calça jeans', ...)// F5
    await repo.save(produto);

    return(produto);
  }
}