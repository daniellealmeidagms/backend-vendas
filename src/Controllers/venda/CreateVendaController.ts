import { Request, Response } from 'express';
import Venda from '@database/entities/Venda';
import CreateVendaService from '@services/venda/CreateVendaService';

export default class CreateVendaController {
  async handle(request: Request, response: Response) {
    const {
      fkCliente,
      fkLojista,
      formaPagamento,
      vendaVarejo,
      desconto,
      valorFrete,
      valorTotal,
    } = request.body;
    const service = new CreateVendaService();
    const result = await service.execute({fkCliente,
      fkLojista,
      formaPagamento,
      vendaVarejo,
      desconto,
      valorFrete,
      valorTotal});
    return result;
  }
}
