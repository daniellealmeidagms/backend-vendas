import { AppDataSource } from '@database/datasource';
import Cliente from '@database/models/Cliente';

type ClienteRequest = {
  cpf_cnpj: string;
  nome_razaosocial: string;
  segmento: string;
  telefone: number;
  fkEndereco: number;
};

export class CreateClienteService {
  async execute({
    cpf_cnpj,
    nome_razaosocial,
    segmento,
    telefone,
    fkEndereco,
  }: ClienteRequest): Promise<Cliente | Error> {
    const repo = AppDataSource.getRepository(Cliente);

    if (await repo.findOne({ where: { cpf_cnpj: cpf_cnpj } })) {
      return new Error('Cliente já cadastrado!');
    }

    const cliente = repo.create({
      cpf_cnpj,
      nome_razaosocial,
      segmento,
      telefone,
      fkEndereco,
    });

    await repo.save(cliente);

    return cliente;
  }
}
