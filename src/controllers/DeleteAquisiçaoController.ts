import { Request, Response } from "express";
import { DeleteAquisicaoService } from "@services/DeleteAquisicaoService";


export class DeleteAquisicaoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const idInt = parseInt(id);

    const service = new DeleteAquisicaoService();

    const result = await service.execute(idInt);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(200).end();
  }
}