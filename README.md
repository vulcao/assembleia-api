Instalação do MySQL no Docker - Aula 2.2

Copia comando direto do dockerhub (https://hub.docker.com/_/mysql), mas faz uns ajustes

$ docker run --name assembleia-mysql -e MYSQL_ROOT_PASSWORD=umasenhafacil -e MYSQL_DATABASE=assembleia -p 3306:3306 -d mysql

Baixado app do site https://www.beekeeperstudio.io/download para gerenciar banco

Instalação do TYPEORM usando o site typeorm.org
npm install --save typeorm@0.3.11

npm i --save reflect-metadata@0.1.13

npm i --save mysql 

npm i @types/node --save-dev


criar novo modulo

