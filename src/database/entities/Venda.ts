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
  @Column({ type: 'timestamptz', nullable: true })
  dataHoraVenda: string;

  @Column({ nullable: true })
  formaPagamento: string;

  @Column({ nullable: true })
  vendaVarejo: boolean;

  @Column({ nullable: true })
  desconto: number;

  @Column({ nullable: true })
  valorFrete: number;

  @Column({ nullable: true })
  valorTotal: number;

  // Variáveis de controle
  @Column()
  enviada: boolean;

  @Column()
  ativo: boolean;

  constructor() {
    this.dataHoraVenda = new Date().toISOString();
    this.enviada = false;
    this.ativo = true;
  }
}
