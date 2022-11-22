import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('alunos')
export default class Aluno {
  @PrimaryColumn()
  id: bigint;

  @Column()
  fkMembro: bigint;

  @Column()
  cpfAluno: string;

  @Column()
  nomeAluno: string;

  @Column()
  nomeSocialAluno: string;

  @Column()
  emailAluno: string;

  @Column()
  telefoneAluno: bigint;

  @Column()
  dataNascimento: Date;

  @Column()
  prioridade: string;

  @Column()
  inicioAtendimento: Date;

  @Column()
  fimAtendimento: Date;

  @Column()
  ativo: boolean;
}
