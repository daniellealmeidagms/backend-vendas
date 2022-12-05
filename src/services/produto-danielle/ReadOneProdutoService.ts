import { AppDataSource } from "@database/datasource";
import Produto from "@database/entities/Produto";

type ReadOneProdutoRequest = {
 id : string;
}

export default class ReadOneProdutoService{
  async execute({id}:ReadOneProdutoRequest):Promise<Produto | Error>{
    const repo = AppDataSource.getRepository(Produto);
    // SELECT * FROM produtos WHERE id = $id LIMIT 1
    const produto = await repo.findOne({where: {id}});
    console.log(produto);
    if (!produto) {
      return new Error("Não foi encontrado nenhum produto.");
    }
    return(produto);
  }
}