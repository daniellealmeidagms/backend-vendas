import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('curso')
class Curso {
  @PrimaryGeneratedColumn()
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
