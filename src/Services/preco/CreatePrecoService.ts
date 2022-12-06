import { AppDataSource } from '@database/datasource';
import Preco from '@database/entities/Preco';

type PrecoRequest = {
  valor: number;
  dataInicioVigencia: Date;
  dataFimVigencia: Date;
  descricao: string;
};

export class CreatePrecoService {
  async execute({
    valor,
    dataInicioVigencia,
    dataFimVigencia,
    descricao,
  }: PrecoRequest): Promise<Preco | Error> {
    const repo = AppDataSource.getRepository(Preco);
    if (
      await repo.findOne({
        where: { valor, descricao },
      })
    ) {
      return new Error('Preço já cadastrado.');
    }
    const preco = repo.create({
      valor,
      dataInicioVigencia,
      dataFimVigencia,
      descricao,
    });
    await repo.save(preco);
    return preco;
  }
}
