import { AppDataSource } from '@database/datasource';
import Venda from '@database/models/Venda';

type VendaCreateRequest = {
  fkCliente: number,
  fkLojista: number,
  formaPagamento: string;
  vendaVarejo: boolean;
  desconto: number;
  valorFrete: number;
  valorTotal: number;
};

export default class CreateVendaService {
  async execute({
    fkCliente,
    fkLojista,
    formaPagamento,
    vendaVarejo,
    desconto,
    valorFrete,
    valorTotal,
  }: VendaCreateRequest): Promise<Venda> {
    const repo = AppDataSource.getRepository(Venda);

    const venda = repo.create({
      fkCliente,
      fkLojista,
      formaPagamento,
      vendaVarejo,
      desconto,
      valorFrete,
      valorTotal,
    });

    await repo.save(venda);

    return venda;
  }
}
