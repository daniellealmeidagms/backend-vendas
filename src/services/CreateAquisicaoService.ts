import { AppDataSource } from "src/database/datasource";
import Aquisicao from "src/database/entities/Aquisicao";

AppDataSource.getRepository

type AquisicaoRequest = {
  dataHoraAquisicao: number;
  formaPagamento: string;
  valorTotal: number;
  fkFornecedor: number;
  fkLojista: number;
}
export class CreateAquisicaoService {
  async execute({ dataHoraAquisicao, formaPagamento, valorTotal, fkFornecedor, fkLojista}: AquisicaoRequest): Promise<Aquisicao | Error> {
    const repo = AppDataSource.getRepository(Aquisicao);

    const aquisicao = repo.create({
      dataHoraAquisicao,
      formaPagamento,
      valorTotal,
      fkFornecedor,
      fkLojista
    });
    await repo.save(aquisicao);
    return aquisicao;
  }
}