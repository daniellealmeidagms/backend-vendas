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

    // SELECT * FROM produtos WHERE 
    const search = await repo.find({
      where: {
          descricao: descricao,
          tamanho: tamanho,
          categoria: categoria,
      },
    });
    // essa variável está preenchida
    if (search) {
      return new Error("Este produto já existe.");
    }

    // INSERT INTO produtos (id, descricao ...) VALUES('2jhfsd7', 'calça jeans', ...)
    const produto = repo.create({
      descricao,
      tamanho,
      categoria,
      fkPreco,
      qtdEstoque
    });

    // F5
    await repo.save(produto);

    return(produto);
  }
}