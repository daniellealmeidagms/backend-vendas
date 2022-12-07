import { AppDataSource } from '@database/datasource';
import Lojista from '@database/models/Lojista';

type LojistaUpdateRequest = {
  idInt: number;
};

export default class ReadOneLojistaService {
  async execute({ idInt }: LojistaUpdateRequest) {
    const repo = AppDataSource.getRepository(Lojista);
    const lojista = await repo.findOne({ where: { id: idInt } });
    if (!lojista) {
      return new Error('Lojista não encontrado');
    }
    return lojista;
  }
}
