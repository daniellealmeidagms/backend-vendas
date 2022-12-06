// Diogo e Fernando
import { Entity, Column, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('vendas')
export default class Venda {
  // Chave primária
  @PrimaryColumn()
  id: string;

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

  constructor(){
    this.id = uuid();
    this.ativo = true;
    this.dataHoraVenda = new Date();
    this.enviada = false;
  }
}
