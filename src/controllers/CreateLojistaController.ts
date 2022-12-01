import { Request, Response } from "express"

export default class CreateLojistaController {
  async handle(request : Request, response : Response) {
    const {cnpj, razaosocial, segmento, telefone, fkendereco } = request.body 
    
    const service = new CreateLojistaService();

    const result = await service.execute({cnpj, razaosocial, segmento, telefone, fkendereco});
    
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
}