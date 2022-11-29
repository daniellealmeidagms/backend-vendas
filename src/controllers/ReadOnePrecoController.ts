import { Request, Response } from 'express';
import { ReadOnePrecoService } from 'src/Services/ReadOnePrecoService';



export class ReadOnePrecoController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;
        const service = new ReadOnePrecoService();
        const preco = await service.execute();
        return response.json(preco);
    }
}