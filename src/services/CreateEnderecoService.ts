import { AppDataSource } from "src/database/datasource";
import Endereco from "src/database/entities/Endereco";

type EnderecoRequest = {
  id: number;
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export class CreateEnderecoServices {

  async execute({ id, cep, logradouro, complemento, bairro, localidade, uf}: EnderecoRequest ): Promise<Endereco | Error> {
    const repo = AppDataSource.getRepository(Endereco);


    if (await repo.findOne({ id })) {
      return new Error("Address already exists");
    }

    const Endereco = repo.create({
      id,
      cep,
      logradouro,
      complemento,
      bairro,
      localidade,
      uf
    })

    await repo.save(Endereco);

    return Endereco;
  }
}