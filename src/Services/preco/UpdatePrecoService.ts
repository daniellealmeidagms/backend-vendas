import { AppDataSource } from '@database/datasource';
import Preco from '@database/models/Preco';

type UpdatePrecoRequest = {
  idInt: number;
  valor: number;
  dataInicioVigencia: Date;
  dataFimVigencia: Date;
  descricao: string;
};
export class UpdatePrecoService {
  async execute({
    idInt,
    valor,
    dataInicioVigencia,
    dataFimVigencia,
    descricao,
  }: UpdatePrecoRequest) {
    const repo = AppDataSource.getRepository(Preco);
    const preco = await repo.findOne({ where: { id: idInt } });
    if (!preco) {
      return new Error('Preço não encontrado.');
    }
    preco.valor = valor ? valor : preco.valor;
    preco.dataInicioVigencia = dataInicioVigencia ? dataInicioVigencia : preco.dataInicioVigencia;
    preco.dataFimVigencia = dataFimVigencia ? dataFimVigencia : preco.dataFimVigencia;
    preco.descricao = descricao ? descricao : preco.descricao;
    await repo.save(preco);
    return preco;
  }
}