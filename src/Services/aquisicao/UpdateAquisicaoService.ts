import { AppDataSource } from "src/database/datasource";
import Aquisicao from "@database/models/Aquisicao";

AppDataSource.getRepository

type AquisicaoUpdateRequest = {
  idInt: number;
  dataHoraAquisicao: number;
  formaPagamento: string;
  valorTotal: number;
  fkFornecedor: number;
  fkLojista: number;
}

export class UpdateAquisicaoService {
  async execute({ idInt, dataHoraAquisicao, formaPagamento, valorTotal, fkFornecedor, fkLojista }: AquisicaoUpdateRequest) {
    const repo = AppDataSource.getRepository(Aquisicao);

    const aquisicao = await repo.findOne({where: {id: idInt}});

    if (!aquisicao) {
      return new Error("Aquisicao does not exists");
    }
    aquisicao.formaPagamento = formaPagamento ? formaPagamento : aquisicao.formaPagamento;

    await repo.save(aquisicao);

    return aquisicao;
  }
}