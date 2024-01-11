import { Entity,PrimaryGeneratedColumn,Column, JoinColumn, ManyToOne } from 'typeorm'
import { Pauta } from 'src/pautas/pauta.entity';
import {Associado} from './associado/associado.entity';

@Entity()
export class Voto {
  
  @PrimaryGeneratedColumn()
  id?: string;

  @ManyToOne( () => Pauta )
  @JoinColumn({ name: 'id_pauta' })
  pauta: Pauta;

  @ManyToOne( () => Associado )
  @JoinColumn({ name: 'id_associado' })
  associado: Associado;

  @Column({ name: 'voto' })
  opcaoVoto: OpcaoVoto;
}

export enum OpcaoVoto {
  SIM = 'SIM',
  NAO = 'NAO'
}