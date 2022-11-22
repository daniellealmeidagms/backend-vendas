// Tiago e Karol
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export default class Produto {
  @PrimaryColumn()
  id: number;

  @Column()
  descricao: string;

  @Column()
  tamanho: string;

  @Column()
  categoria: string;

  @Column()
  preco: number;

  @Column()
  qtdEstoque: number;

  @Column()
  ativo: boolean;
}
