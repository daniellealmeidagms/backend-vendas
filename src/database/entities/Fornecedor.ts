// Gabriel e Lucas
import { PrimaryColumn, Column, Entity } from 'typeorm';

@Entity()
export class Fornecedores {
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
