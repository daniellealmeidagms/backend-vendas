import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('acoes')
export default class Acao {
  @PrimaryColumn()
  id: bigint;

  @Column()
  aluno: bigint;

  @Column()
  descricaoAcao: string;

  @Column()
  statusAcao: string;

  @Column()
  datainicio: Date;

  @Column()
  dataFim: Date;

  @Column()
  ativo: boolean;
}
