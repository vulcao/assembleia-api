import { Entity,PrimaryGeneratedColumn,Column,CreateDateColumn } from 'typeorm'

@Entity()
export class Pauta {
  
  @PrimaryGeneratedColumn()
  id?: string;

  @Column()
  descricao: string;

  @CreateDateColumn({ name: 'data_cadasto' })
  dataCadastro?: Date;

  @Column({ type: 'timestamp', nullable: true})
  abertura?: Date;

  @Column({ type: 'timestamp', nullable: true})
  fechamento?: Date;
  
  obterStatus() : string {
    console.log(this);
    if (this.fechamento && this.fechamento < new Date()){
      return StatusPauta.ENCERRADA;
    }
    if (this.abertura){
      return StatusPauta.INICIADA;
    }
    return StatusPauta.NAO_INICIADA;
  }

  public isFoiIniciada() : boolean {
    return this.isInStatus(StatusPauta.INICIADA);
  }
  public isFoiEncerrada() : boolean {
    return this.isInStatus(StatusPauta.ENCERRADA);
  }
  public isPossivelIniciarSessao(): boolean {
    console.log('isPossivelIniciarSessao')
    return this.isInStatus(StatusPauta.NAO_INICIADA);
  }
  public isInStatus(statusVerificar: StatusPauta): boolean {
    console.log('isInStatus')
    console.log({statusVerificar});
    const status = this.obterStatus();
    console.log({status});
    return status == statusVerificar;
  }
}

enum StatusPauta {
  NAO_INICIADA = 'Sessão não iniciada',
  INICIADA = 'Sessão iniciada',
  ENCERRADA = 'Sessão Encerada'
}