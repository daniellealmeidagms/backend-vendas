import { Request, Response } from "express";
import { UpdateAquisicaoService } from "@services/UpdateAquisicaoService";



export class UpdateAquisicaoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { dataHoraAquisicao, formaPagamento, valorTotal, fkFornecedor, fkLojista } = request.body;
    const service = new UpdateAquisicaoService();
    const result = await service.execute({ id, dataHoraAquisicao, formaPagamento, valorTotal, fkFornecedor, fkLojista })
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
}

