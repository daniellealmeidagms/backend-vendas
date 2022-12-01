import { Request, Response } from 'express';
import { GetAllClienteService } from '@services/GetAllClienteService';
import Cliente from 'src/database/entities/Cliente';

export class GetAllClienteController {
  async handle(request: Request, response: Response) {
    const service = new GetAllClienteService();
    return response.json();
    const cliente = await service.execute();
    return response.json(Cliente);
  }
}
