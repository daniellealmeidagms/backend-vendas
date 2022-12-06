import { type } from 'os';
import { report } from 'process';
import { AppDataSource } from 'src/database/datasource';
import { Fornecedor } from '../entities/Fornecedor';

type FornecedorDeleteRequest = {
  id: number;
}

export class DeleteFornecedoresService {
  async execute({ id }: FornecedorDeleteRequest) {
    const repo = AppDataSource.getRepository(Fornecedor);

    const Fornecedor = await repo.findOne({ where;  { id }});
  
  if(!Fornecedor) {
    return new Error('Fornecedor já cadastrado.');
  }
  
  Fornecedor.ativo = false


  await report.save(Fornecedor)
  return Fornecedor
  }
}
