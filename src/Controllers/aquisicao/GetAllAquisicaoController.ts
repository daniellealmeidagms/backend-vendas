
import { Request, Response } from "express"
import GetAllAquisicaoService from "@services/aquisicao/GetAllAquisicaoService";

export class GetAllAquisicaoController{
  async handle(request: Request, response: Response) {
    const service = new GetAllAquisicaoService();
    const result = await service.execute();
    return response.json(result);
  }
}