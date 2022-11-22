import 'reflect-metadata';
import { DataSource } from 'typeorm';
import Acao from './entities/Acao';
import Aluno from './entities/Aluno';
import Cargo from './entities/Cargo';
import Curso from './entities/Curso';
import Horario from './entities/Horario';
import Membro from './entities/Membro';
import Necessidade from './entities/Necessidade';
import Responsavel from './entities/Responsavel';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'api-gestao-teste',
  synchronize: true,
  logging: true,
  entities: [
    Acao,
    Aluno,
    Cargo,
    Curso,
    Horario,
    Membro,
    Necessidade,
    Responsavel,
  ],
  subscribers: [],
  migrations: [],
});
