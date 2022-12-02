// Tiago e Karol
import { Entity, Column, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('produtos')
export default class Produto {
  // Chave primária
  @PrimaryColumn()
  id: string;

  // Atributos
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

  // Variáveis de controle
  @Column()
  ativo: boolean;

  constructor() {
    this.id = uuid();
    this.ativo = true;
    console.log('ID gerado: ', this.id);
    console.log('Status: ', this.ativo);
  }
}
