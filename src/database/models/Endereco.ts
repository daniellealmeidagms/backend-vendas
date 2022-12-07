// Johnathan, Mateus e Kalleu
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('enderecos')
export default class Endereco {
  // Chave primária
  @PrimaryColumn()
  id: number;

  // Atributos
  @Column({ nullable: true })
  cep: string;

  @Column({ nullable: true })
  logradouro: string;

  @Column({ nullable: true })
  complemento: string;

  @Column({ nullable: true })
  bairro: string;

  @Column({ nullable: true })
  localidade: string;

  @Column({ nullable: true })
  uf: string;

  // Variáveis de controle
  @Column()
  ativo: boolean;

  constructor() {
    this.ativo = true;
  }
}
