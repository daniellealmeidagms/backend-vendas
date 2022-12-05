import { Request } from 'express';

export default class GetAllLojistaController {
  async handle(request: Request, response: Response) {
    const service = new GetAllLojistaService();

    const categories = await service.execute();
    
    return response.json(categories);
  }
}
