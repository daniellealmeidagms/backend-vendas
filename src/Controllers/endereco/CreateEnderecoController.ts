import { Request, Response } from 'express';
import Endereco from '@database/entities/Endereco';
import { CreateEnderecoService } from '@services/endereco/CreateEnderecoService';

export default class CreateVendaController {
  async handle(request: Request, response: Response) {
    const {
      cep,
      logradouro,
      complemento,
      bairro,
      localidade,
      uf
    } = request.body;
    const service = new CreateEnderecoService();
    const result = await service.execute({
      cep,
      logradouro,
      complemento,
      bairro,
      localidade,
      uf
    });
    response.status(200).json(result);
  }
}
