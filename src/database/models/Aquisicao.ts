import { Entity, Column, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('aquisicoes')
export default class Aquisicao {
  // Chave primária
  @PrimaryColumn()
  id: string;

  // Chaves estrangeiras
  @Column()
  fkLojista: string

  @Column()
  fkFornecedor: string

  // Atributos
  @Column({type: 'timestamptz'})
  dataHoraAquisicao: Date;

  @Column()
  formaPagamento: string;

  @Column()
  valorTotal: number;

  // Variáveis de controle
  @Column()
  ativo: boolean;

  constructor(){
    this.id = uuid();
    this.ativo = true;
  }

}
