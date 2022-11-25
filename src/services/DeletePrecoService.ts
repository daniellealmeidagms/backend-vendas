import { AppDataSource } from 'src/database/datasource';
import Preco from 'src/database/entities/Preco';

type DeletePrecoRequest = {
  id: number;
};

export class DeletePrecoService {
  async execute({ id }: DeletePrecoRequest) {
    const repo = AppDataSource.getRepository(Preco);
    if (!(await repo.findOne({ where: { id: id } }))) {
      return new Error('Preço não existe');
    }
    await repo.delete(id);
  }
}