import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('necessidades')
export default class Necessidade {
  @PrimaryColumn()
  id: number;

  @Column()
  cid: string;

  @Column()
  descricaoSimples: string;

  @Column()
  descricaoTecnica: string;

  @Column()
  ativo: boolean;
}
