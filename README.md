<h1 align="center">Yahoo Finance - RapidAPI</h1>

## Description

Get stock symbol analysis and news using [rapidapi yahoo finance api](https://rapidapi.com/apidojo/api/yahoo-finance1).<br>
Build using [Nest](https://github.com/nestjs/nest) framework.

## Swagger
https://yahoo-finance-rapid-api.herokuapp.com/swagger/

## Environment setup
Create .env file in the application root directory with environment variables
```
RAPIDAPI_KEY=Your_Rapid_API_Key
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# build
$ npm run build

# production mode
$ npm run start:prod
```

## To Develop & Debug

Install nestjs globally using the following command
```
npm i -g @nestjs/cli
```
After installing nestjs use the below commands 
```
# start server
$ npm run start

# start server in watch mode
$ npm run start:dev

# start server in watch mode with debugging enabled
$ npm run start:debug
```
