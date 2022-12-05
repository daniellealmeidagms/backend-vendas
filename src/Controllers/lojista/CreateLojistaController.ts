import CreateLojistaService from "@services/lojista/CreateLojistaService";
import { Request, Response } from "express"

export default class CreateLojistaController {
  async handle(request : Request, response : Response) {
    const {cnpj, razaoSocial, segmento, telefone, fkEndereco } = request.body 
    
    const service = new CreateLojistaService();

    const result = await service.execute({cnpj, razaoSocial, segmento, telefone, fkEndereco});
    
    return response.json(result);
  }
}