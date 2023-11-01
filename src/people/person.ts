export class Person {

  id: number;
  name: string;
}

// criei essa classe seguindo o fluxo da aula, mas considerei a 
// implementação de segurança apresentada muito falha e acabei
// alterando diretamente no controller, por isso não uso a classe
export class PersonUpdatingRequest {
  name: string;
}
