// Jeovana e Welita
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
  @Column({ nullable: true })
  cpf_cnpj: string;

  @Column({ nullable: true })
  nome_razaosocial: string;

  @Column({ nullable: true })
  telefone: number;

  // Variáveis de controle
  @Column()
  ativo: boolean;

  constructor() {
    this.ativo = true;
  }
}
