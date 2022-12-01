import { AppDataSource } from 'src/database/datasource';
import Cliente from 'src/database/entities/Cliente';

AppDataSource.getRepository;

export class GetAllClienteService {
  async execute() {
    const repo = AppDataSource.getRepository(Cliente);

    const cliente = await repo.find();

    return cliente;
  }
}