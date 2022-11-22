// Diogo e Fernando
import { Entity, Column, PrimaryColumn, Timestamp } from 'typeorm';

@Entity()
export default class Venda {
  @PrimaryColumn()
  id: number;
  @Column()
  formaPagamento: string;
  @Column()
  vendaVarejo: boolean;
  @Column()
  desconto: number;
  @Column()
  valorFrete: number;
  @Column()
  enviada: boolean;
  @Column()
  dataHoraVenda: Timestamp;
  @Column()
  ativo: boolean;
  @Column()
  fkCliente: number;
  @Column()
  fkLojista: number;
}
