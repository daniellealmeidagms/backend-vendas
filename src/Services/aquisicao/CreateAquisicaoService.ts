import { AppDataSource } from "@database/datasource";
import Aquisicao from "@database/models/Aquisicao";

type AquisicaoRequest = {
  dataHoraAquisicao: Date;
  formaPagamento: string;
  valorTotal: number;
  fkFornecedor: number;
  fkLojista: number;
};

export default class CreateAquisicaoService {
  async execute({ 
    dataHoraAquisicao, 
    formaPagamento, 
    valorTotal, 
    fkFornecedor, 
    fkLojista }: AquisicaoRequest): Promise<Aquisicao | Error> {
    const repo = AppDataSource.getRepository(Aquisicao);

    if (await repo.findOne({ where : {dataHoraAquisicao, fkFornecedor, fkLojista} })) {
      return new Error("Aquisição já existe");
    }

    const aquisicao = repo.create({
      dataHoraAquisicao,
      formaPagamento,
      valorTotal,
      fkFornecedor,
      fkLojista,
    });
    await repo.save(aquisicao);
    return aquisicao;
  }
}