import { AppDataSource } from "src/database/datasource";
import Aquisicao from "@database/models/Aquisicao";

type AquisicaoDeleteRequest = {
  idInt: number;
}

export default class DeleteAquisicaoService{
  async execute({idInt}:AquisicaoDeleteRequest){
    const repo = AppDataSource.getRepository(Aquisicao);

    console.log('Passei aqui');
    console.log(idInt);
    
    const aquisicao = await repo.findOne({ where: { id: idInt } });

    console.log('Passei aqui também');
    console.log(aquisicao);

    if (!aquisicao) {
      return new Error('Aquisição não cadastrada!');
    }

    aquisicao.ativo = false;

    await repo.save(aquisicao);

    return "Aquisição excluída com sucesso!";

  }
}