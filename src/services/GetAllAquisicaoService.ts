import { AppDataSource } from "src/database/datasource";
import Aquisicao from "src/database/entities/Aquisicao";

AppDataSource.getRepository

export class GetAllAquisicaoService {
  async execute() {

    const repo = AppDataSource.getRepository(Aquisicao);

    const aquisicao = await repo.find();

    return aquisicao;
  }
}