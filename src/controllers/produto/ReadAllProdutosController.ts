import ReadAllProdutosService from "@services/produto/ReadAllProdutosService";
import { Request, Response } from "express";

export default class ReadAllProdutosController {
 async handle(req: Request, res: Response) {
  const service = new ReadAllProdutosService();
  const result = service.execute();
  if (!result) {
    res.json("Nenhum produto cadastrado.");
  }
  return(result);
 }
}