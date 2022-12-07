import { AppDataSource } from 'src/database/datasource';
import  Fornecedor from '@database/models/Fornecedor';

export default class GetAllFornecedoresService {
  async execute() {
    const repo = AppDataSource.getRepository(Fornecedor);
    const fornecedores = await repo.find();
    return fornecedores;
  }
}
