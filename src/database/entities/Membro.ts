import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('membros')
export default class Membro {
  @PrimaryColumn()
  id: number;

  @Column()
  fkCargo: number;

  @Column()
  cpfMembro: string;

  @Column()
  nomeMembro: string;

  @Column()
  emailMembro: string;

  @Column()
  telefoneMembro: number;

  @Column()
  formacao: string;

  @Column()
  permissao: string;

  @Column()
  ativo: boolean;
}
