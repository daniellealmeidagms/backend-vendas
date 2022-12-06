import { Request, Response } from "express"
import { GetAllAquisicaoService } from "@services/GetAllAquisicaoService";

export class GetAllAquisicaoController{
  async handle(request: Request, response: Response) {
    const service = new GetAllAquisicaoService
    return response.json();
    const aquisicao = await service.execute();
    return response.json(aquisicao);

  }
}