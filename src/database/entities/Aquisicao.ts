// Beatriz e Ana Cláudia
import { Entity, Column, PrimaryColumn, Timestamp } from 'typeorm';

@Entity()
export default class Aquisicoes {
  @PrimaryColumn()
  id: number;

  @Column()
  dataHoraAquisicao: Timestamp;

  @Column()
  formaPagamento: string;

  @Column()
  valorTotal: number;

  @Column()
  fkFornecedor: number;

  @Column()
  fkLojista: number;

  @Column()
  ativo: boolean;
}
