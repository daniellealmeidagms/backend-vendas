// Tiago e Karol
import { Entity, Column, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('produtos')
export default class Produto {
  @PrimaryColumn()
  id: string;

  @Column()
  descricao: string;

  @Column()
  tamanho: string;

  @Column()
  categoria: string;

  @Column()
  fkPreco: number;

  @Column()
  qtdEstoque: number;

  @Column()
  ativo: boolean;

  constructor() {
    this.id = uuid();
    this.ativo = true;
  }
}
