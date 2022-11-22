// Jeovana e Welita
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity()
export default class Cliente {
  @PrimaryColumn()
  id: number;

  @Column()
  cpf_cnpj: string;

  @Column()
  nome_razaosocial: string;

  @Column()
  segmento: string;

  @Column()
  telefone: number;

  @Column()
  fkEndereco: number;

  @Column()
  ativo: boolean;
}
