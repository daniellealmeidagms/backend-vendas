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

  @Column()
  formaPagamento: string;

  @Column()
  valorTotal: number;

  // Variáveis de controle
  @Column()
  ativo: boolean;
}
