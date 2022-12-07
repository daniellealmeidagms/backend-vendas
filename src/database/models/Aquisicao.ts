// Beatriz e Ana Cláudia
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('aquisicoes')
export default class Aquisicao {
  // Chave primária
  @PrimaryColumn()
  id: number;

  // Chaves estrangeiras
  @Column()
  fkFornecedor: number;

  @Column()
  fkLojista: number;

  // Atributos
  @Column({ type: 'timestamptz' })
  dataHoraAquisicao: Date;

  @Column({ nullable: true })
  formaPagamento: string;

  @Column({ nullable: true })
  valorTotal: number;

  // Variáveis de controle
  @Column()
  ativo: boolean;

  constructor() {
    this.ativo = true;
  }
}
