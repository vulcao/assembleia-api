import { Controller,Res,Get,Param, Post,Put, Body, Delete } from '@nestjs/common';
import { Response } from 'express';
import { PeopleService } from './people.service';
import { Person, PersonUpdatingRequest } from './person';


@Controller('people')
export class PeopleController {

  constructor(
    private service: PeopleService
  ){}

  @Get()
  list(@Res() response: Response){
    const list = this.service.list();

    return response.status(200).send(list);
  }

  @Get('/:id')
  getById(@Param('id') id: number, @Res() response: Response){
    const person = this.service.findById(id);
    if (!person) {
      return response.status(404).send();
    }
    return response.status(200).send(person);
  }

  @Post()
  save(@Body() person: Person, @Res() response: Response){
    this.service.save(person);
    return response.status(201).send("Salvo com sucesso");
  }

  @Put('/:id')
  update(
    @Param('id') id: number, 
    @Body() person: Person,
    @Res() response: Response
    ){
    let personFound = this.service.findById(id);
    if (!personFound) {
      return response.status(404).send();
    }
    if(id != person.id) {
      return response.status(400).send();
    }
    this.service.update(id, person);

    return response.status(200).send("Atualizado com sucesso");
  }

  @Delete('/:id')
  delete(@Param('id') id: number, @Res() response: Response){
    const person = this.service.findById(id);
    if (!person) {
      return response.status(404).send();
    }
    this.service.delete(id);

    return response.status(204).send('esta mensagem não será exibido');
    // nesse exemplo usa o status 204 (no content) ao inves do 200
    // esse status nao mostra nenhuma msg, mesmo que ela esteja dentro do send()
  }
}
