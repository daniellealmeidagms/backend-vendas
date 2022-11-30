import { AppDataSource } from '../database/datasource';
import Preco from '../database/entities/Preco';

type ReadOnePrecoRequest = {
  id: number;
};

export class ReadOnePrecoService {
  async execute({ id }: ReadOnePrecoRequest) {
    const repo = AppDataSource.getRepository(Preco);
    const preco = await repo.findOne({ where: { id } });
    if (!preco) {
      return new Error('Preço não encontrado');
    }
    return preco;
  }
}
