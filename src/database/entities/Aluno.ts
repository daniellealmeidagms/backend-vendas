import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('alunos')
export default class Aluno {
  @PrimaryColumn()
  id: number;

  @Column()
  fkMembro: number;

  @Column()
  cpfAluno: string;

  @Column()
  nomeAluno: string;

  @Column()
  nomeSocialAluno: string;

  @Column()
  emailAluno: string;

  @Column()
  telefoneAluno: number;

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
