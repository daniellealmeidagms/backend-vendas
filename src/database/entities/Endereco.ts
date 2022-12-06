// Johnathan, Mateus e Kalleu
import { randomInt } from 'crypto';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('enderecos')
export default class Endereco {
  // Chave primária
  @PrimaryColumn()
  id: number;

  // Atributos
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

  // Variáveis de controle
  @Column()
  ativo: boolean;

  constructor(){
    this.id = randomInt(100000);
    this.ativo = true;
  }
}
