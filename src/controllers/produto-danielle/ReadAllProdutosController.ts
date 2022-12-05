import ReadAllProdutosService from "@services/produto-danielle/ReadAllProdutosService";
import { Request, Response } from "express";

export default class ReadAllProdutosController {
 async handle(req: Request, res: Response) {
  const service = new ReadAllProdutosService();
  const result = await service.execute();
  if (result instanceof Error) {
    res.status(400).json(result.message);
  }
  res.status(200).json(result);
 }
}