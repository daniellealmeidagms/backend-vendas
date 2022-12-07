import { AppDataSource } from 'src/database/datasource';
import Lojista from 'src/database/entities/Lojista';

type LojistaUpdateRequest = {
  idInt: number;
};

export default class ReadOneLojistaService {
  async execute({ idInt }: LojistaUpdateRequest) {
    const repo = AppDataSource.getRepository(Lojista);
    const lojista = await repo.find({ where: { id: idInt } });
    if (!lojista) {
      return new Error('Lojista não encontrado');
    }
    return lojista;
  }
}
