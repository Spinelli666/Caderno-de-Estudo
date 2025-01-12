# Context API

## Sumário

1. [O que é Context API?](#o-que-é-context-api)
2. [Criando o contexto](#criando-o-contexto)
3. [Criando o provider](#criando-o-provider)
4. [Consultando e alterando o valor](#consultando-e-alterando-o-valor)
5. [Refatorando o contexto em um hook](#refatorando-o-contexto-em-um-hook)
6. [Criando contexto mais complexo](#criando-contexto-mais-complexo)
7. [Alterando Contexto complexo](#alterando-contexto-complexo)

### O que é COntext API?

- Um recurso do React que facilita o **compartilhamento de dados entre os componentes**;
- Quando há a necessidade de **dados globais**, provavelmente vai utilizar o COntext;
- Quando há muitas idas e vindas de props, também deve se considerar o Context;
- Geralmente ficam na **pasta context**;

### Criando o contexto

- O primeiro passo é **criar o Context**;
- O arquivo tem a **primeira letra maiúscula**, como nos componentes, e geralmente **termina com Context**;
Exemplo:
```
AlgumContext.js;
```
- A convenção é deixar na **pasta context** em src;
- Onde utilizamos o contexto, o arquivo precisa ser importado;

### Criando o provider

- O provider vai **delimitar o escopo do contexto**;
- Ou seja, em que componentes teremos acesso aos dados;
- O provider deve **encapsular os componentes** que precisam do context;
- Geralmente é colocado em **main.jsx**;
- O provider tem a **prop children**, para inserirmos elementos dentro;

### Consultando e alterando o valor

- Agora vamos **exibir e alterar** o valor do contexto;
- Vamos utilizar o hook **useContext** para trazer o nosso contexto as componentes;
- E com este mesmo hook é possível trazer a função que altera o seu valor;

### Refatorando o contexto em um hook

- Podemos **criar um hook** e trabalhar o contexto nele;
- Concentramos o **useContext em um só local**, que será no hook;
- E há um intervalo para uma possível validação na alteração do contexto;

### Criando contexto mais complexo

- **Contextos mais complexos** podem necessitar de variações no comportamento;
- Por isso o mais indicado é utilizar o hook **useReducer**;
- Ele funciona como um **useState**, mas com mais possibilidade

### Alterando Contexto complexo

- Para alterar o contexto vamos utilizar uma função chamada **dispatch**;
- Ela também estará no **useReducer**;
- Precisamos enviar todas as informações necessárias para a alteração do valor do contexto;
- Ou seja, o **switch entrará em ação**;