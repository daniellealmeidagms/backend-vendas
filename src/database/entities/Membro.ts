import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('membros')
export default class Membro {
  @PrimaryColumn()
  id: bigint;

  @Column()
  fkCargo: bigint;

  @Column()
  cpfMembro: string;

  @Column()
  nomeMembro: string;

  @Column()
  emailMembro: string;

  @Column()
  telefoneMembro: bigint;

  @Column()
  formacao: string;

  @Column()
  permissao: string;

  @Column()
  ativo: boolean;
}
