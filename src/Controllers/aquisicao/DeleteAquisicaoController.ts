import { Request, Response } from "express";
import DeleteAquisicaoService from "@services/aquisicao/DeleteAquisicaoService";

export class DeleteAquisicaoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const idInt = parseInt(id);

    console.log('Passei aqui - Controller');

    const service = new DeleteAquisicaoService();

    const result = await service.execute({idInt});

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(200).end();
  }
}