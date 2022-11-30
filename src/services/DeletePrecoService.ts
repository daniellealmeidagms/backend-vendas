import { AppDataSource } from '../database/datasource';
import Preco from '../database/entities/Preco';

type DeletePrecoRequest = {
  id: number;
};

export class DeletePrecoService {
  async execute({ id }: DeletePrecoRequest) {
    const repo = AppDataSource.getRepository(Preco);
    if (!(await repo.findOne({ where: { id } }))) {
      return new Error('Preço não existe');
    }
    await repo.delete(id);
  }
}
