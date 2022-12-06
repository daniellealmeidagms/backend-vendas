import CreateProdutoService from "@services/produto-danielle/CreateProdutoService";
import { Request, Response } from "express";

export default class CreateProdutoController {
 async handle(req: Request, res: Response) {
  const { descricao, tamanho, categoria, fkPreco, qtdEstoque } = req.body;
  const service = new CreateProdutoService();
  const result = await service.execute({descricao, tamanho, categoria, fkPreco, qtdEstoque});
  if(result instanceof Error){
    res.status(400).json("Erro ao cadastrar produto.");
  }
  res.status(200).json(result);
 }
}