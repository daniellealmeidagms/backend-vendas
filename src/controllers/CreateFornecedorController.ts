import { Request, response, Response } from "express";

export class CreateFornecedorController{
  async handle(request: Request, response: Response) {
    const { id; cnpj; razaoSocial; telefone; fkEndereco; ativo} = request.body
    
  
  const service = new CreateFornecedorService();

  const result = await service.execute({ id, cnpj, razaoSocial, telefone, fkEndereco, ativo });

  if(result instanceof error) {
  return response.status(400).json(result.message);
}
   
return response.json(result);
  }
}