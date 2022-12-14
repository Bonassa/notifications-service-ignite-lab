<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descri????o

Este projeto foi desenvolvido durante o Ignite Lab da Rocketseat em dezembro de 2022. Tem por objetivo a cria????o de um microservi??o utilizando NodeJS em conjunto com o framework NestJS.

## Ferramentas utilizadas
- [NodeJS](https://nodejs.org/en/)
- [NestJS](https://docs.nestjs.com/)
- [Prisma](https://www.prisma.io/)
- [Insomnia](https://insomnia.rest/)

## Design Patters
- Factory Patter
- Database in Memory Patter

## Roteiro de cria????o

1- Instala????o da CLI do NestJS
  ```bash
    npm i -g @nestjs/cli
  ```

2- Cria????o do projeto NestJS
  ```bash
    nest new notifications-service
  ```

3- Instala????o da CLI do Prisma como dev dependencie
  ```bash
    npm install prisma -D
  ```

4- Instala????o do client do Prisma
  ```bash
    npm install @prisma/client
  ```

5- Inicializa????o do Prisma com o SQLite
  ```bash
    npx prisma init --datasource-provider SQLite
  ```

6- Integra????o do NestJS com o Prisma
  https://docs.nestjs.com/recipes/prisma

7- Valida????es dos dados de API utilizando classes
  ```bash
    npm install class-validator class-transformer
  ```

## Comandos do Prisma

1- Cria????o de Migration
  ```bash
    npx prisma migrate dev

    #Insere o nome da migration para controle de vers??es
  ```

2- Inicializa????o do Prisma Studio
  ```bash
    npx prisma studio
  ```

## Instala????o das depend??ncias

```bash
$ npm install
```

## Rodando a aplica????o

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Testes

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```