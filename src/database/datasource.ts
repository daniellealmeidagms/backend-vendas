import 'reflect-metadata';
import { DataSource } from 'typeorm';
<<<<<<< HEAD

=======
>>>>>>> 4dd64bbcf20312242a42085258beb510fa8b8e27

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
<<<<<<< HEAD
    
=======

>>>>>>> 4dd64bbcf20312242a42085258beb510fa8b8e27
  ],
  subscribers: [],
  migrations: [],
});
