import 'reflect-metadata';
import { DataSource } from 'typeorm';
<<<<<<< Updated upstream
import Aquisicoes from './entities/Aquisicao';
import Cliente from './entities/Cliente';
import Endereco from './entities/Endereco';
import { Fornecedor } from './entities/Fornecedor';
import Lojista from './entities/Lojista';
import Preco from './entities/Preco';
import Produto from './entities/Produto';
=======
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
    Aquisicoes,
    Cliente,
    Endereco,
    Fornecedor,
    Lojista,
    Preco,
    Produto,
=======

>>>>>>> Stashed changes
  ],
  subscribers: [],
  migrations: [],
});
