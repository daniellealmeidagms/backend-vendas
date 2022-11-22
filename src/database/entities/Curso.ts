import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('cursos')
export default class Curso {
  @PrimaryColumn()
  id: bigint;

  @Column()
  descricaoCurso: string;

  @Column()
  turno: string;

  @Column()
  modalidade: string;

  @Column()
  semestral: boolean;

  @Column()
  ativo: boolean;
}
