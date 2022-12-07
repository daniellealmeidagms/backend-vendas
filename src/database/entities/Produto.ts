// Tiago e Karol
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('produtos')
export default class Produto {
  // Chave primária
  @PrimaryColumn()
  id: number;

  // Atributos
  @Column({ nullable: true })
  descricao: string;

  @Column({ nullable: true })
  tamanho: string;

  @Column({ nullable: true })
  categoria: string;

  @Column({ nullable: true })
  preco: number;

  @Column({ nullable: true })
  qtdEstoque: number;

  // Variáveis de controle
  @Column()
  ativo: boolean;

  constructor() {
    this.qtdEstoque = 0;
    this.ativo = true;
  }
}
