import { Request, Response } from 'express';
import { UpdateClienteService } from '@services/UpdateClienteService';

export class UpdateClienteController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { cpf_cnpj, nome_razaosocial, segmento, telefone, fkEndereco } =
      request.body;
    const service = new UpdateClienteService();
    const result = await service.execute({
  cpf_cnpj: string;
  nome_razaosocial: string;
  segmento: string;
  telefone: number;
  fkEndereco: number;
    });
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    return response.json(result);
  }
}
