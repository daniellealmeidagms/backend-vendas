import {Request. Response } from 'express'
export default class ReadOneLojistaController{

  async handle(request: Request, response: Response) {
    const (id) = request.params;
    const idint = parseInt(id):
    const service = new GetOneLojistaService();
    const result = await service.execute({ idInt });
    
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  }

}