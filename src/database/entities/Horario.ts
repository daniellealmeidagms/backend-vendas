import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('horarios')
export default class Horario {
  @PrimaryColumn()
  id: number;

  @Column()
  horarioInicio: string;

  @Column()
  horarioFim: string;

  @Column()
  diaSemana: string;
}
