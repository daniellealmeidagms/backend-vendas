import { v4 as uuid } from 'uuid';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('enderecos')
export default class Endereco {
  // Chave primária
  @PrimaryColumn()
  id: string;

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
    this.id = uuid()
    this.ativo = true;
  }
}
