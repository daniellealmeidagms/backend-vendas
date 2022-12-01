import { AppDataSource } from 'src/database/datasource';
import Lojista from 'src/database/entities/Lojista';
import { getRepository } from 'typeorm';

type CategoryRequest = {
  cnpj: string;
  razaosocial: string;
  segmento: string;
  telefone: number;
  fkEndereco: bigint;
};

export class CategoryRequestService {
  async execute({
    cnpj,
    razaosocial,
    segmento,
    telefone,
    fkEndereco,
  }: CategoryRequest): Promise<Lojista | Error> {
    const repo = AppDataSource.getRepository(Lojista);

    if (await repo.findOne({ cnpj })) {
      return new Error('cnpj existe');
    }

    const Lojista = repo.create({
      cnpj,
      razaosocial,
      segmento,
      telefone,
      fkEndereco,
    });
    await repo.save(Lojista);
    return Lojista;
  }
}
