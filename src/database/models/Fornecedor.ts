// Gabriel e Lucas
import { PrimaryColumn, Column, Entity } from 'typeorm';

@Entity('fornecedores')
export default class Fornecedor {
  // Chave primária
  @PrimaryColumn()
  id: number;

  // Chaves estrangeiras
  @Column()
  fkEndereco: number;

  // Atributos
  @Column({ nullable: true })
  cnpj: string;

  @Column({ nullable: true })
  razaoSocial: string;

  @Column({ nullable: true })
  telefone: number;

  // Variáveis de controle
  @Column()
  ativo: boolean;

  constructor() {
    this.ativo = true;
  }
}
