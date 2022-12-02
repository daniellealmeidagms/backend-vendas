import ReadOneProdutoService from "@services/produto/ReadOneProdutoService";
import { Request, Response } from "express";

export default class ReadOneProdutoController {
 async handle(req: Request, res: Response) {
  const { id } = req.params;
  const service = new ReadOneProdutoService();
  const result = await service.execute({id});
  if (result instanceof Error) {
    res.status(400).json(result.message);
  }
  res.status(200).json(result);
 }
}