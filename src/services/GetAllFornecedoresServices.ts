import { AppDataSource } from 'src/database/datasource';
import { Fornecedor } from '../entities/Fornecedor';

export class GetAllFornecedoresService {
  async execute() {
    const repo = AppDataSource(Fonecedor);

    const Fornecedores = await repo.find();

    return Fornecedores;
  }
}
