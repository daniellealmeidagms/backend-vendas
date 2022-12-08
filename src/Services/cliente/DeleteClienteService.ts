import { AppDataSource } from '@database/datasource';
import Cliente from '@database/models/Cliente';

type ClienteRequest = { id: string };

export default class DeleteClienteService {
  async execute( { id } : ClienteRequest ) {
    const repo = AppDataSource.getRepository(Cliente);
    const cliente = await repo.findOne({ where: { id } });
    if (!cliente) {
      return new Error('Cliente não encontrado!');
    }
    cliente.ativo = false;
    await repo.save(cliente);
    return cliente;
  }
}
