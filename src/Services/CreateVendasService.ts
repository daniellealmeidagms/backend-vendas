import { getRepository } from 'typeorm';

type VendasRequest = {
  id: number;
  cliente: number;
  lojista: number;
  dataHoraVenda: Date;
  formaPagamento: string;
  vendaVarejo: boolean;
  desconto: number;
  valorFrete: number;
  valorTotal: number;
  enviada: boolean;
  ativo: boolean;
};

export class CreateVendasService {
  async execute({
    id,
    cliente,
    lojista,
    dataHoraVenda,
    formaPagamento,
    vendaVarejo,
    desconto,
    valorFrete,
    valorTotal,
    enviada,
    ativo,
  }: VendasRequest): Promise<Vendas | Error> {
    const repo = getRepository(Vendas);

    if (await repo.findOne({ id })) {
      return new Error('Vendas already exists');
    }

    const Vendas = repo.create({
      id,
      cliente,
      lojista,
      dataHoraVenda,
      formaPagamento,
      vendaVarejo,
      desconto,
      valorFrete,
      valorTotal,
      enviada,
      ativo,
    });

    await repo.save(Vendas);

    return Vendas;
  }
}
