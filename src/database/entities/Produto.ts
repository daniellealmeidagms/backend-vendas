// Tiago e Karol
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('produtos')
export default class Produto {
  // Chave primária
  @PrimaryColumn()
  id: number;

  // Atributos
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

  // Variáveis de controle
  @Column()
  ativo: boolean;
}
