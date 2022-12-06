import { AppDataSource } from "src/database/datasource";
import Aquisicao from "src/database/entities/Aquisicao";

AppDataSource.getRepository

type AquisicaoUpdateRequest = {
  id: string;
  dataHoraAquisicao: number;
  formaPagamento: string;
  valorTotal: number;
  fkFornecedor: number;
  fkLojista: number;
}

export class UpdateAquisicaoService {
  async execute({ id, dataHoraAquisicao, formaPagamento, valorTotal, fkFornecedor, fkLojista }: AquisicaoUpdateRequest) {
    const repo = AppDataSource.getRepository(Aquisicao);

    const aquisicao = await repo.findOne({});

    if (!aquisicao) {
      return new Error("Aquisicao does not exists");
    }
    aquisicao.formaPagamento = formaPagamento ? formaPagamento : aquisicao.formaPagamento;

    await repo.save(aquisicao);

    return aquisicao;
  }
}