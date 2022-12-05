  import { AppDataSource } from "src/database/datasource";
  import Cliente from "@database/models/Cliente";

  AppDataSource.getRepository

  type ClienteUpdateRequest = {
  cpf_cnpj: string;
    nome_razaosocial: string;
    segmento: string;
    telefone: number;
    fkEndereco: number;
  }

  export class UpdateClienteoService {
    async execute({ cpf_cnpj, nome_razaosocial, segmento, telefone, fkEndereco }: ClienteUpdateRequest) {
      const repo = AppDataSource.getRepository(Cliente);

      const cliente = await repo.findOne({});

      if (!cliente) {
        return new Error("Cliente does not exists");
      }
      cliente.cpf_cnpj = cpf_cnpj ? cpf_cnpj : cliente.cpf_cnpj;

      await repo.save(cliente);

      return cliente;
    }
  }