// Pedro e Edu
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
  @Column({ nullable: true })
  cnpj: string;

  @Column({ nullable: true })
  razaoSocial: string;

  @Column({ nullable: true })
  segmento: string;

  @Column({ nullable: true })
  telefone: number;

  // Variáveis de controle
  @Column()
  ativo: boolean;

  constructor() {
    this.ativo = true;
  }
}
