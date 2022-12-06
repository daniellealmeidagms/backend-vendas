import { Request, Response } from "express"
import { CreateAquisicaoService } from "@services/CreateAquisicaoService"

export class CreateAquisicaoController {
  async handle(request: Request, response: Response) {
    const { dataHoraAquisicao, formaPagamento, valorTotal, fkFornecedor, fkLojista } = request.body

    const service = new CreateAquisicaoService();

    const result = await service.execute({ dataHoraAquisicao, formaPagamento, valorTotal, fkFornecedor, fkLojista });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }}