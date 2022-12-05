import { AppDataSource } from "@database/datasource";
import Produto from "@database/entities/Produto";

export default class ReadAllProdutosService{
  async execute(){
    const repo = AppDataSource.getRepository(Produto);
    // SELECT * FROM produtos
    const produtos = await repo.find();
    console.log(produtos);
    if (!produtos) {
      return new Error("Não foi encontrado nenhum produto.");
    }
    return(produtos);
  }
}