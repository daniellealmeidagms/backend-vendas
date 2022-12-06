import { AppDataSource } from '@database/datasource';
import Preco from '@database/entities/Preco';

type DeletePrecoRequest = {
  idInt: number;
};

export class DeletePrecoService {
  async execute({ idInt }: DeletePrecoRequest) {
    const repo = AppDataSource.getRepository(Preco);
    if (!(await repo.findOne({ where: { id: idInt } }))) {
      return new Error('Preço não encontrado.');
    }
    // DELETE FROM precos WHERE id = $id
    await repo.delete(idInt);
    return "Preço excluído com sucesso!";
  }
}
