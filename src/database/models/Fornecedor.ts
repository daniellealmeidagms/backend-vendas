import { v4 as uuid } from 'uuid';
import { PrimaryColumn, Column, Entity } from 'typeorm';

@Entity('fornecedores')
export default class Fornecedor {
  // Chave primária
  @PrimaryColumn()
  id: string;

  // Chaves estrangeiras
  @Column()
  fkEndereco: string;

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
    this.id = uuid();
    this.ativo = true;
  }
}
