# Catálogo de Super-Heróis

## Sobre o projeto
O Catálogo de Super-Heróis é uma aplicação web desenvolvida em React com o objetivo de consumir e exibir dados de uma API externa de super-heróis.

A aplicação permite pesquisar personagens, visualizar cards com informações básicas e acessar uma página de detalhes por meio de rotas dinâmicas.

## Funcionalidades
- Listagem de super-heróis
- Pesquisa por nome
- Página de detalhes de cada herói
- Rotas dinâmicas com React Router
- Página sobre o projeto

## Tecnologias utilizadas
- React
- Vite
- React Router DOM
- CSS
- API pública de Super-Heróis (Akabab Superhero API)

## API utilizada
- https://akabab.github.io/superhero-api/api/all.json

## Como executar o projeto
1. Abra o terminal na pasta do projeto
2. Instale as dependências:
   npm install
3. Execute o projeto:
   npm run dev

## Estrutura de páginas
- `/` → Página inicial com listagem de heróis
- `/hero/:id` → Página de detalhes do herói
- `/sobre` → Página sobre o projeto

## Link online
[superhero-app1.netlify.app](https://superhero-app1.netlify.app/)

## Autor
**Wlamilton dos Reis Fidelis Neto** é o desenvolvedor deste projeto acadêmico, responsável pela criação da interface, integração com API externa, implementação das rotas dinâmicas e publicação da aplicação online.

## Arquitetura da Aplicação
A aplicação segue uma arquitetura simples baseada em front-end com consumo de API externa.  
O usuário interage com a interface desenvolvida em React, navegando entre as páginas da aplicação e acessando os detalhes dos heróis por meio de rotas dinâmicas.  
Os dados são obtidos da API pública Akabab Superhero API, que fornece informações como nome, imagem, biografia e atributos dos personagens.

### Desenho da arquitetura
![Arquitetura da Aplicação](superhero-app/images/arquinst.jpg)

### Página inicial
![Página Inicial](superhero-app/images/paginainicial.jpg)

### Detalhes do herói
![Detalhes do Herói](superhero-app/images/detalhes_heroi.jpg)

### Catálogo
![Catálogo](superhero-app/images/catalogo.jpg)

### Sobre o projeto
![Sobre](superhero-app/images/sobre.jpg)