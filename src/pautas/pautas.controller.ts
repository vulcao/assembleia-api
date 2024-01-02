import { Controller, Body, Res, Post, HttpStatus, Get, Param } from '@nestjs/common';
import { Response, response } from 'express';
import { PautasService } from './pautas.service';
import { CriarPautaResource, NovaSessaoResource, toDomain, toRepresentation } from './pautas.resource';
import { Pauta } from './pauta.entity';
import { ErrorResponse } from 'src/common/erro.resource';

@Controller('pautas')
export class PautasController {
  constructor(
    private readonly service: PautasService
  ){}

  @Post()
  async save( @Body() pauta: CriarPautaResource, @Res() response: Response ){
    
    const pautaDomain: Pauta = toDomain(pauta);

    const result= await this.service.save(pautaDomain);

    if (result.isError()){
      return response
              .status(HttpStatus.CONFLICT)
              .send(new ErrorResponse(result.error.message));
    }
    return response
              .status(HttpStatus.CREATED)
              .send(toRepresentation(result.value));
  }

  @Get()
  async list( @Res() response: Response){
    const result = await this.service.findAll();

    return response.status(HttpStatus.OK).send( result.map(toRepresentation) );
  }

  //localhost:81/pauta/ID/sessao
  @Post(':id/sessao')
  async criarSessao(
    @Param('id') id: string, 
    @Body() resource: NovaSessaoResource,
    @Res() response: Response
    ){
      const pauta: Pauta = await this.service.findById(id);
      console.log('( NOVA REQUISICAO )+++++++++++++++++++++++++++++')
      console.log(new Date())
      console.log(pauta)
      if (!pauta){
        return response
                .status(HttpStatus.NOT_FOUND)
                .send(new ErrorResponse("Pauta não encontrada."))
      }
      console.log('( 1 )+++++++++++++++++++++++++++++')
      const sucesso = await this.service.iniciarSessao(pauta, resource.minutos);
      console.log(sucesso)
      if (sucesso === true){
        console.log('( if )++++++++++++++++++++++++++++++++')
        return response
                .status(HttpStatus.OK)
                .send()
      } else {
        console.log('( else )++++++++++++++++++++++++++++++++')
        return response
                .status(HttpStatus.CONFLICT)
                .send("Não foi posível inicia a sessão.")
      }
  }
}
