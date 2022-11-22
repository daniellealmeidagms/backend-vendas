// Johnathan, Mateus e Kalleu
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export default class Endereco {
  @PrimaryColumn()
  id: number;

  @Column()
  cep: string;

  @Column()
  logradouro: string;

  @Column()
  complemento: string;

  @Column()
  bairro: string;

  @Column()
  localidade: string;

  @Column()
  uf: string;
}
