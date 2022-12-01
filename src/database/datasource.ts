import 'reflect-metadata';
import { DataSource } from 'typeorm';
import Aquisicoes from './entities/Aquisicao';
import Cliente from './entities/Cliente';
import Endereco from './entities/Endereco';
import { Fornecedor } from './entities/Fornecedor';
import Lojista from './entities/Lojista';
import Preco from './entities/Preco';
import Produto from './entities/Produto';

//const bruce = new Cachorro();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'api-vendas',
  synchronize: true,
  logging: true,
  entities: [
    Aquisicoes,
    Cliente,
    Endereco,
    Fornecedor,
    Lojista,
    Preco,
    Produto,
  ],
  subscribers: [],
  migrations: [],
});
