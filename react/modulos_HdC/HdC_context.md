# Context API

## Sumário

1. [O que é Context API?](#o-que-é-context-api)
2. [Criando o contexto](#criando-o-contexto)
3. [Criando o provider](#criando-o-provider)
4. [Alterando o contexto](#alterando-o-contexto)

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

### Alterando o contexto

- Agora vamos **exibir e alterar** o valor do contexto;
- Vamos utilizar o hook **useContext** para trazer o nosso contexto as componentes;
- E com este mesmo hook é possível trazer a função que altera o seu valor;