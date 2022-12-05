import { CreateEnderecoServices } from "@services/CreateEnderecoService"
import { Request, Response } from "express"



export class CreateEnderecoController {
  async handle(request: Request, response: Response) {
    const { id, cep, logradouro, complemento, bairro, localidade, uf } = request.body
    
    const service = new CreateEnderecoServices();

    const result = await service.execute({ id, cep, logradouro, complemento, bairro, localidade, uf });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
  }
}