
criar novo modulo

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

-------------------------------------------

Criar modulo com a CLI do Nest
https://docs.nestjs.com/cli/overview

nest generate ou nest g

cd src
nest g mo people

CLI do nest cria e registra automaticamente

nest g co people <- criar controller , como tem o mesmo nome do modulo ele aproveita a pasta

nest g s people <- vai criar o serviço

os arquivos xxx.spec.ts sao referentes aos testes, no caso do curso não serão usados (deletado)


criar classe:
nest g class people/person


criei um people.http para testar as requisições


docker run --name assembleia-mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=assembleia -p 3306:3306 mysql 

-------------------------------------------

Criar modulo com a CLI do Nest
https://docs.nestjs.com/cli/overview

nest generate ou nest g

cd src
nest g mo people

CLI do nest cria e registra automaticamente

nest g co people <- criar controller , como tem o mesmo nome do modulo ele aproveita a pasta

nest g s people <- vai criar o serviço

os arquivos xxx.spec.ts sao referentes aos testes, no caso do curso não serão usados (deletado)


criar classe:
nest g class people/person


criei um people.http para testar as requisições



Aula 2.2 - Instalação do MySQL no Docker 

Copia comando direto do dockerhub (https://hub.docker.com/_/mysql), mas faz uns ajustes

$ docker run --name assembleia-mysql -e MYSQL_ROOT_PASSWORD=umasenhafacil -e MYSQL_DATABASE=assembleia -p 3306:3306 -d mysql

Baixado app do site https://www.beekeeperstudio.io/download para gerenciar banco

AULA 2.3 - Instalação do TYPEORM usando o site typeorm.org
npm install --save typeorm@0.3.11

npm i --save reflect-metadata@0.1.13

npm i --save mysql 

npm i @types/node --save-dev

-------------------------------------------------------------------------------
Cria modulo Database

nest g module database
OBS caso nao execute entre na pasta /srv e execute novamente - foi o que aconteceu aqui

NestJS tem um container de injecao de dependencias (@injectable na classe) ou cria um provider (Service Provider) ---> implementado no arquivo /src/database/database.providers.ts
As propriedades entities e synchronize servem para:
1. fazer o nest pesquisar (nos arquivos apontados pelo regex) pelas entities descritas para o sistema;
2. criar (sincronizar) no banco as tabelas conforme as entidades que o nest encontrar ao iniciar o sistema.


Criar Entidades:
Criar modulo de pautas ---> feito no arquivo /src/pautas/pautas.entity.ts

Ao executar a aplicação o nest deve criar a tabela no mysql (tem q estar rodando, lógico)

Erro de versão de driver...
1. remover a versão atual
npm un mysql
2. instalar a versao correta
npm i mysql2

-------------------------------------------------------------------------------
Postman pede a instalação de um agente, ao invéz eu criei um arquivo pautas.http na raiz

conclui a aula 33

