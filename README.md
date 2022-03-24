# Calindra Challenge API

<div align="center">
  <a href="https://calindra.tech/">
    <img alt="logo" width="200" src="https://calindra.tech/img/icons-logos/logo-calindra.svg" />
  </a>
</div>

<p align="center">
  <a href="#page_with_curl-introdução">Introdução</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#wave-pré-requisitos">Pré-requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-como-rodar">Como rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-recomendações">Recomendações</a>&nbsp;&nbsp;&nbsp;
</p>

<p align='center'>
 <a href="https://insomnia.rest/run/?label=CalindraChallenge&uri=https%3A%2F%2Fgithub.com%2FMarques537%2FCalindra-Challenge%2Fblob%2Fmaster%2FCalindraChallengeInsominia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>


## :page_with_curl: Introdução

O desafio consiste na criação de uma API Rest que receba endereços e retorne a distância entre cada um dos endereços informados, utilizando a API de Geocoding do Google e
cálculo de distância Euclidiana. Os endereços são retornados ordenados do mais próximo para os mais longe. 

| Method   | Endpoint                                            | Description                                                                            |
| -------- | --------------------------------------------------- | -------------------------------------------------------------------------------------- |
| **GET**  | /distance                                       | Retorna a distância entre dois ou mais endereços                                         |


Exemplo de retorno \
![image](https://user-images.githubusercontent.com/58038679/160027051-1575a372-e078-4c7f-97c7-b770d301af38.png)


- [Dotenv](https://www.npmjs.com/package/dotenv): para variável de ambiente;
- [Express](https://www.npmjs.com/package/express): framework para Node.js que fornece recursos mínimos para construção de servidores web;
- [Google Maps Services](https://www.npmjs.com/package/@googlemaps/google-maps-services-js): Biblioteca do google para realizar requisições as APIs de mapas;
### :wave: Pré-requisitos

> [Node.js](http://nodejs.org/) \
> [VS Code](https://code.visualstudio.com/) - Editor Code \
> [Google Maps Services](https://developers.google.com/maps/documentation/geocoding/start) é necessário criar uma conta e gerar uma Key do Maps API

### :rocket: Como rodar

Rodando o projeto:

- Clone o projeto:

  ```sh
  git clone https://github.com/Marques537/Calindra-Challenge.git
  ```

- Abra a pasta:

  ```sh
  cd Calindra-Challenge
  ```

- Instale todos os pacotes via npm:

  ```sh
  npm install
  ```
- Altere o arquivo .env preenchendo com a sua Key gerada no Maps API

![image](https://user-images.githubusercontent.com/58038679/160024821-d09cc268-3563-4679-af6a-9ff1cf318150.png)

- Rode o projeto:

  ```sh
  npm run dev
  ```


## :information_source: Recomendações

> [Insomnia](https://insomnia.rest/) - Para fazer requisições 
