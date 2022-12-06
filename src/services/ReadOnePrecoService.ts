import { AppDataSource } from '../database/datasource';
import Preco from '../database/entities/Preco';

type ReadOnePrecoRequest = {
  idInt: number;
};

export class ReadOnePrecoService {
  async execute({ idInt }: ReadOnePrecoRequest) {
    const repo = AppDataSource.getRepository(Preco);
    const preco = await repo.findOne({ where: { id: idInt } });
    if (!preco) {
      return new Error('Preço não encontrado');
    }
    return preco;
  }
}
