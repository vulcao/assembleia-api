import { Controller,Res,Get,Param, Post, Body } from '@nestjs/common';
import { Response } from 'express';
import { PeopleService } from './people.service';
import { Person } from './person';


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

}
