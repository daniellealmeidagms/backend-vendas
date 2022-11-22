// Felipe e Ivan
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export default class Preco {
  @PrimaryColumn()
  id: number;
  @Column()
  valor: number;
  @Column()
  dataInicioVigencia: Date;
  @Column()
  dataFimVigencia: Date;
  @Column()
  descricao: string;
}
