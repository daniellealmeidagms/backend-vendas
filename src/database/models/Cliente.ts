import { Entity, PrimaryColumn, Column } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('clientes')
export default class Cliente {
  // Chave primária
  @PrimaryColumn()
  id: string;

  // Chave estrangeira
  @Column()
  fkEndereco: string;

  // Atributos
  @Column()
  cpf_cnpj: string;

  @Column()
  nome_razaosocial: string;

  @Column()
  segmento: string;

  @Column()
  telefone: number;

  // Variáveis de controle
  @Column()
  ativo: boolean;

  constructor(){
    this.id = uuid();
    this.ativo = true;
  }
}
