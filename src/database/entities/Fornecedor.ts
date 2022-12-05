// Gabriel e Lucas
import { PrimaryColumn, Column, Entity } from 'typeorm';

@Entity('fornecedores')
export default class Fornecedor {
  // Chave primária

  @PrimaryColumn()
  id: number;

  // Chaves estrangeiras
  @Column()
  fkEndereco: number;

  // Atributos
  @Column()
  cnpj: string;

  @Column()
  razaoSocial: string;

  @Column()
  telefone: number;

  // Variáveis de controle
  @Column()
  ativo: boolean;
}
