import { Request, Response } from 'express';
import {
  UpdateFornecedoresController,
  UpdateFornecedorService,
} from '../services/UpdateFornecedoresService';

export class UpdateFornecedoresController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { cnpj, razaoSocial, telefone, fkEndereco } = request.body;

    const service = new UpdateFornecedorService();

    const result = await service.execute({
      id,
      cnpj,
      razaoSocial,
      telefone,
      fkEndereco,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }
}
