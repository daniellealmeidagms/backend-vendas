import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('cargos')
export default class Cargo {
  @PrimaryColumn()
  id: number;

  @Column()
  descricaoCargos: string;

  @Column()
  atcleivos: boolean;
}
