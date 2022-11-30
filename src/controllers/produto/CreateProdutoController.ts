import CreateProdutoService from "@services/produto/CreateProdutoService";
import { Request, Response } from "express";

export default class CreateProdutoController {
 async handle(req: Request, res: Response) {
  const { descricao, tamanho, categoria, fkPreco, qtdEstoque } = req.body;
  const service = new CreateProdutoService();
  const result = service.execute({descricao, tamanho, categoria, fkPreco, qtdEstoque});
  if(result instanceof Error){
    res.status(400).json(result);
  }
  return(result);
 }
}