import { AppDataSource } from "src/database/datasource";
import Aquisicao from "@database/models/Aquisicao";

export default class GetAllAquisicaoService {
  async execute() {

    const repo = AppDataSource.getRepository(Aquisicao);

    const aquisicao = await repo.find();

    return aquisicao;
  }
}