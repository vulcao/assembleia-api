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
    if (this.fechamento && this.fechamento < new Date()){
      return StatusPauta.ENCERRADA;
    }
    if (this.abertura){
      return StatusPauta.INICIADA;
    }
    return StatusPauta.NAO_INICIADA;
  }

  public isPossivelIniciarSessao(): boolean {
    const i = this.isInStatus(StatusPauta.INICIADA);
    const e = this.isInStatus(StatusPauta.ENCERRADA);
    if(i || e) {
      return false;
    }
    return true;
  }

  public isFoiIniciada() : boolean {
    return this.isInStatus(StatusPauta.INICIADA);
  }
  public isFoiEncerrada() : boolean {
    return this.isInStatus(StatusPauta.ENCERRADA);
  }
  
  public isInStatus(statusVerificar: StatusPauta): boolean {
    const status = this.obterStatus();
    return status == statusVerificar;
  }
}

enum StatusPauta {
  NAO_INICIADA = 'Sessão não iniciada',
  INICIADA = 'Sessão iniciada',
  ENCERRADA = 'Sessão Encerada'
}