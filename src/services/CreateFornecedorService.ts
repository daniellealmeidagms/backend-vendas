import { create } from "domain";
import { AppDataSource } from "src/database/datasource";
import { Fornecedor } from "../entities/Fornecedor";
AppDataSource.getRepository

type FornecedorRequest = {
  id: number;
  cnpj: string
  razaoSocial: string;
  telefone: number;
  fkEndereco: number;
  ativo: boolean;
}

export class Fornecedor.ts{
async execute({ id, cnpj, razaoSocial, telefone, fkEndereco, ativo }: FornecedorRequest): promises < Fornecedor  | Error > {
  const repo = getRepository(Fornecedor);

//SELECT * FROM FORNECEDOR WHERE CNPJ = "CNPJ" LIMIT 1
    if(await repo.findOne({ name })){
    return new Error ( "Fornecedor já cadastrado")
  }

  const Fornecedor = repo.create({
    id,
    cnpj,
    razaoSocial,
    telefone,
    fkEndereco,
    ativo
  })

  await repo.save(Fornecedor);

  return Fornecedor;
 }
}
