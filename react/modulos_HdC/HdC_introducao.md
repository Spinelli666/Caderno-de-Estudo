# Introdução

## Sumário

1. [O que é React JS?](#o-que-é-react-js)
2. [Dependências do React](#dependências-do-react)
3. [Hello World com React JS](#hello-world-com-react-js)
4. [Estrutura base do React JS](#estrutura-base-do-react-js)
5. [Configurando o Emmet para o React JS](#configurando-o-emmet-para-o-react-js)

## O que é React JS?

- React é uma **biblioteca JavaScript** para desenvolvimento de aplicações front-end;
- A categoria delas é **SPA** (Single Page Application);
- Podemos criar uma aplicação com React, ou inserir em um projeto já em andamento;
- A sua arquitetura é baseada em **componentes**;
- É mantido pelo **Facebook/Meta**;

## Dependências do React

- Para iniciar uma aplicação React da maneira convencional precisaremos de Node.js;
- Através do gerenciador de pacotes **npm**, é possível iniciar projetos;

## Hello World com React JS

- Para criar nossas aplicações utilizaremos o **Vite**;
- Antigamente era muito comum utilizar o **create-react-app**, porém ele tem uma pior peformance;
- Apenas precisamos digitar no terminal: **npm create vite@latest** e seguir as opções;

## Estrutura base do React JS

- Há algumas pastas e arquivos muito importantes;
- **node_modules**: dependências do projeto;
- **public**: assests e arquivos estáticos;
- **src**: onde escrevemos o código da aplicação;
- **src/index.js**: arquivo de incialização da aplicação; **Obs**: projetos mais novos é **src/main.jsx**;
- **src/App.js**: componente principal inicial (pode ser modificado);

## Extensão do VS Code para React

- Há diversas **extensões interessantes para o React no VS Code;**
- A principal e mais utilizada é a: **ES7 React snippets**;
- Ela ajuda a criar rapidamente estruturas que utilizamos em todo o projeto;

## Configurando o Emmet para o React JS

- O **Emmet** é uam extensão nativa do VS Code que ajuda a escrever código mais rápido;
- Mas ela não vem configurada para o React;
- Vamos acessar: **File > Settings > Extensions** e procurar o Emmet;
- Lá precisamos incluir: **javascript - javascriptreact**;