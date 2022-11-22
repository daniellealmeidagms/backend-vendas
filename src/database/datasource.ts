import 'reflect-metadata';
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'api-gestao',
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
});
