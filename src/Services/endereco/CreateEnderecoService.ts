import { AppDataSource } from "@database/datasource";
import Endereco from "@database/entities/Endereco";

type EnderecoRequest = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export class CreateEnderecoService {

  async execute({ cep, logradouro, complemento, bairro, localidade, uf }: EnderecoRequest ): Promise<Endereco> {
    const repo = AppDataSource.getRepository(Endereco);

    const endereco = repo.create({
      cep,
      logradouro,
      complemento,
      bairro,
      localidade,
      uf
    })

    console.log("passei aqui");
    console.log(cep);

    await repo.save(endereco);

    return endereco;
  }
}