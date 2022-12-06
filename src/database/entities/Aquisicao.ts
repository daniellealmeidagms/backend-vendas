// Beatriz e Ana Cláudia
import { randomInt } from 'crypto';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('aquisicoes')
export default class Aquisicao {
  // Chave primária
  @PrimaryColumn()
  id: number;

  // Chaves estrangeiras
  @Column()
  fkLojista: number

  @Column()
  fkFornecedor: number

  // Atributos
  @Column()
  dataHoraAquisicao: Date;

  @Column()
  formaPagamento: string;

  @Column()
  valorTotal: number;

  // Variáveis de controle
  @Column()
  ativo: boolean;

  constructor(){
    this.id = randomInt(10000)
    this.ativo = true;
  }

}
