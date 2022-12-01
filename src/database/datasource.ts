import 'reflect-metadata';
import { DataSource } from 'typeorm';
import Aquisicao from './entities/Aquisicao';
import Cliente from './entities/Cliente';
import Endereco from './entities/Endereco';
import Lojista from './entities/Lojista';
import Preco from './entities/Preco';
import Produto from './entities/Produto';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'api-vendas',
  synchronize: true,
  logging: true,
  entities: [Aquisicao, Cliente, Endereco, Lojista, Preco, Produto],
  subscribers: [],
  migrations: [],
});
