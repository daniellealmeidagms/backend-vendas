// Pedro e Edu
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export default class Lojista {
  @PrimaryColumn()
  id: number;

  @Column()
  cnpj: string;

  @Column()
  razaosocial: string;

  @Column()
  segmento: string;

  @Column()
  telefone: number;

  @Column()
  ativo: boolean;

  @Column()
  fkEndereco: number;
}
