import { AppDataSource } from "src/database/datasource";
import Aquisicao from "src/database/entities/Aquisicao";

AppDataSource.getRepository


export class DeleteAquisicaoService{
  async execute(id: number){
    const repo = AppDataSource.getRepository(Aquisicao);

    if (!(await repo.find({ where: {id}}))) {
  return new Error("Aquisicao does not exists!");
    }
    await repo.delete(id);
  }
}