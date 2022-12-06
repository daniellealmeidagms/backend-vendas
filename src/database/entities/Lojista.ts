// Pedro e Edu
import { randomInt } from 'crypto';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('lojistas')
export default class Lojista {
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
  segmento: string;

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
