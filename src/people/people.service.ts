import { Injectable } from '@nestjs/common';
import { Person, PersonUpdatingRequest } from './person';

@Injectable()
export class PeopleService {
  people: Person[] = [];

  list() : Person[] {
    return this.people;
  }

  findById(id: number) : Person{
    const foundPerson = this.people.find(p => p.id == id);
    return foundPerson;
  }

  save(person: Person){
    this.people.push(person);
  }

  update(id: number, person: Person){
    this.people.forEach(function(p){
      if (id == p.id){
        p.name = person.name;
      }
    })
  }

  delete(id: number){
    const newList = this.people.filter(p => p.id != id);
    this.people = newList;
  }
}
