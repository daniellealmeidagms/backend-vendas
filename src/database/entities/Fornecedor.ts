// Gabriel e Lucas
import { randomInt } from 'crypto';
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
  @Column()
  cnpj: string;

  @Column()
  razaoSocial: string;

  @Column()
  telefone: number;

  // Variáveis de controle
  @Column()
  ativo: boolean;

  constructor(){
    this.id = randomInt(100000);
    this.ativo = true;
  }
}
