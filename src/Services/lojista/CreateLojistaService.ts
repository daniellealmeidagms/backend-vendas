import { AppDataSource } from '@database/datasource';
import Lojista from '@database/entities/Lojista';

type CreateLojistaRequest = {
  cnpj: string;
  razaoSocial: string;
  segmento: string;
  telefone: number;
  fkEndereco: number;
};

export default class CreateLojistaService {
  async execute({
    cnpj,
    razaoSocial,
    segmento,
    telefone,
    fkEndereco,
  }: CreateLojistaRequest): Promise<Lojista> {
    const repo = AppDataSource.getRepository(Lojista);

    const lojista = repo.create({
      cnpj,
      razaoSocial,
      segmento,
      telefone,
      fkEndereco
    });
    await repo.save(lojista);

    return lojista;
  }
}
