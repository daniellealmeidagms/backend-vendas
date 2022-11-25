import { AppDataSource } from 'src/database/datasource';
import Preco from 'src/database/entities/Preco';

type UpdatePrecoRequest = {
  id: number;
  valor: number;
  dataInicioVigencia: Date;
  dataFimVigencia: Date;
  descricao: string;
};
export class UpdatePrecoService {
  async execute({
    id,
    valor,
    dataInicioVigencia,
    dataFimVigencia,
    descricao,
  }: UpdatePrecoRequest) {
    const repo = AppDataSource.getRepository(Preco);
    const preco = await repo.findOne({ where: { id: id } });
    if (!preco) {
      return new Error('Preço não existe');
    }
    preco.valor = valor;
    preco.dataInicioVigencia = dataInicioVigencia;
    preco.dataFimVigencia = dataFimVigencia;
    preco.descricao = descricao;
    await repo.save(preco);
    return preco;
  }
}
