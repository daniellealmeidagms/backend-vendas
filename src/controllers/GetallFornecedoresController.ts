import { Request, Response } from 'src/database/datasource';
import { GetAllFornecedoresService } from '../services/GetAllFornecedoresService';

export class GetAllFornecedoresService {
  async handle(request: Request, response: Response) {
    const service = new GetAllFornecedoresService();
  
    const Fornecedores = await service.execute();
  
    return response.json(Fornecedores);
  }
}