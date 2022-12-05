import { Request } from 'express';

export class CreateVendasController {
  async handle(request: Request, response: Response) {
    const {
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
    };
  }
}
