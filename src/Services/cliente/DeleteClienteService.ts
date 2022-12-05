import { AppDataSource } from '../database/datasource';
import Cliente from '../database/entities/Cliente';

AppDataSource.getRepository;

export class DeleteClienteService {
  async execute(cpf_cnpj: string) {
    const repo = AppDataSource.getRepository(Cliente);
    if (!(await repo.find({ where: { cpf_cnpj: cpf_cnpj } }))) {
      return new Error('Cliente does not exixts!');
    }
    await repo.delete(cpf_cnpj);
  }
}
