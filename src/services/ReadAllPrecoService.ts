import { AppDataSource } from "src/database/datasource";
import Preco from "src/database/entities/Preco";


export class ReadAllPrecoService {
  async execute() {
    const repo = AppDataSource.getRepository(Preco);
    const preco = await repo.find();
    return preco;
  }
}