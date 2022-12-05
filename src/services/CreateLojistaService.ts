import { ApppDataSourse } from 'src/database/datasource';
import Lojista from 'src/database/entities/Lojista';

type categoryRequest = {
  cnpj: number;
  razaosocial: string;
  segmento: string;
  telefone: number;
  fkendereco: string;
};

export default class CreateCategoryService {
  async execute({
    cnpj,
    razaosocial,
    segmento,
    telefone,
    fkendereco,
  }: CategoryRequst): Promise<Category> {
    const repo = getRepository(Lojista);

    const Lojista = repo.Create({
      cnpj,
      razaosocial,
      segmento,
      telefone,
      fkendereco,
    });
    await repo.save(Lojista);

    return Lojista;
  }
}
