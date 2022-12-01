// Felipe e Ivan
import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('precos')
export default class Preco {
  // Chave primária
  @PrimaryColumn()
  id: number;

  // Atributos
  @Column()
  valor: number;

  @Column()
  dataInicioVigencia: Date;

  @Column()
  dataFimVigencia: Date;

  @Column()
  descricao: string;

  // Variáveis de controle
  @Column()
  ativo: boolean;
}
