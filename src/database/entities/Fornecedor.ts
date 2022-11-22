// Gabriel e Lucas
import { PrimaryColumn, Column, Entity } from 'typeorm';

@Entity()
export default class Fornecedor {
  @PrimaryColumn()
  id: number;
  @Column()
  cnpj: string;
  @Column()
  razaoSocial: string;
  @Column()
  telefone: number;
  @Column()
  fkEndereco: number;
  @Column()
  ativo: boolean;
}
