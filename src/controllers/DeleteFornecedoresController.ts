import { DeleteFornecedorService } from "src/database/datasource";
import { Request, Response } from AppDataSource

export class DeleteFornecedoresControler {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new DeleteFornecedorService();

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }
    
    return response.status(284).end();
    }
}