// Felipe e Ivan
import { randomInt } from 'crypto';
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('precos')
export default class Preco {
  // Chave primária
  @PrimaryColumn()
  id: number;

  // Atributos
  @Column({nullable: true})
  valor: number;

  @Column({nullable: true,  type: 'timestamptz'})
  dataInicioVigencia: Date;

  @Column({nullable: true})
  dataFimVigencia: Date;

  @Column({nullable: true})
  descricao: string;

  // Variáveis de controle
  @Column()
  ativo: boolean;

  constructor() {
    this.id = randomInt(10000);
    this.ativo = true;
  }
}
