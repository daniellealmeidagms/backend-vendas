import { AppDataSource } from 'src/database/datasource';
import Preco from 'src/database/entities/Preco';

type ReadOnePrecoRequest = {
  id: number;
};

export class ReadOnePrecoService {
  async execute({ id }: ReadOnePrecoRequest) {
    const repo = AppDataSource.getRepository(Preco);
    const preco = await repo.findOne({ where: { id: id } });
    if (!preco) {
      return new Error('Preço não encontrado');
    }
    return preco;
  }
}
