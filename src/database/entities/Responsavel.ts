import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('responsaveis')
export default class Responsavel {
  @PrimaryColumn()
  id: bigint;

  @Column()
  nomeResponsavel: string;

  @Column()
  emailResponsavel: string;

  @Column()
  telefoneResponsavel: string;
}
