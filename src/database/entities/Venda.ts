// Diogo e Fernando
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('vendas')
export default class Venda {
  // Chave primária
  @PrimaryColumn()
  id: number;

  // Chaves estrangeiras
  @Column()
  fkCliente: number;

  @Column()
  fkLojista: number;

  // Atributos
  @Column({ type: 'timestamptz' })
  dataHoraVenda: Date;

  @Column()
  formaPagamento: string;

  @Column()
  vendaVarejo: boolean;

  @Column()
  desconto: number;

  @Column()
  valorFrete: number;

  @Column()
  valorTotal: number;

  // Variáveis de controle
  @Column()
  enviada: boolean;

  @Column()
  ativo: boolean;
}
