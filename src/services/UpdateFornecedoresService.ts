import { AppDataSource } from 'src/database/datasource';
import { Fornecedor } from '../entities/Fornecedor';

type FornecedorUpdateRequest = {
  id: number;
  cnpj: string;
  razaoSocial: string;
  telefone: number;
  fkEndereco: number;
  ativo: boolean;
};
export class UpdateFornecedorService {
  async execute({ id, cnpj, razaoSocial, telefone, fkEndereco }: FornecedorUpdateRequest) {
    const repo = AppDataSource(Fornecedor);

    const Fornecedor = await repo.findone(id);

    if (!Fornecedor) {
      return new Error('Forneedor não existe!');
    }

    Fornecedor.razaoSocial = razaoSocial ? razaoSocial : Fornecedor.razaoSocial;
    Fornecedor.cnpj = cnpj ? cnpj : Fornecedor.cnpj;
    Fornecedor.telefone = telefone ? telefone : Fornecedor.telefone;
    Fornecedor.fkEndereco = fkEndereco;

    await repo.save(category);
  }
}
