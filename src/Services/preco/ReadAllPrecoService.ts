import { AppDataSource } from '@database/datasource';
import Preco from '@database/models/Preco';

export class ReadAllPrecoService {
  async execute() {
    const repo = AppDataSource.getRepository(Preco);
    //SELECT * FROM precos
    const precos = await repo.find();
    return precos;
  }
}
