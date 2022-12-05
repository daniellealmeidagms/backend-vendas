// Jeovana e Welita
import { randomInt } from 'crypto';
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('clientes')
export default class Cliente {
  // Chave primária
  @PrimaryColumn()
  id: number;

  // Chave estrangeira
  @Column()
  fkEndereco: number;

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
    this.id = randomInt(100000);
    this.ativo = true;
  }
}
