import { create } from "domain";
import { AppDataSource } from "@database/datasource";
import Fornecedor from '@database/entities/Fornecedor';

type FornecedorRequest = {
  cnpj: string
  razaoSocial: string;
  telefone: number;
  fkEndereco: number;
}

export class CreateFornecedorService {
  async execute({ 
    cnpj, 
    razaoSocial, 
    telefone, 
    fkEndereco }: FornecedorRequest): Promise < Fornecedor  | Error > {
    const repo = AppDataSource.getRepository(Fornecedor);

    if(await repo.findOne({ where : { cnpj } })){
      return new Error ( "Fornecedor já cadastrado!");
    }
    const fornecedor = repo.create({
      cnpj,
      razaoSocial,
      telefone,
      fkEndereco
    })
    await repo.save(fornecedor);
    return fornecedor;
  }
}
