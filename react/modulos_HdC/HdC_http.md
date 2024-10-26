# Requisições HTTP com React JS

## Sumário

1. [Conhecendo o JSON server](#conhecendo-o-json-server)
2. [A importância do useEffect](#a-importância-do-useeffect)
3. [Regate de dados](#resgate-de-dados)

## Conhecendo o JSON server

- O **JSON server** é um pacote npm;
- Ele **simula uma API**, ou seja, podemos fazer requisições HTTP;
- Vamos integrar este pacote ao React;
- Treino para APIs reais;
- Isso facilita os estudos por **não precisar de um back-end**;

## A importância do useEffect

- O **useEffect** faz com que seja possível controlar a execução de uma ação;
- Isso é interessante pois se não o utilizamos recursos podem ser re-executados a cada re-renderização;
- O componente é **re-renderizado a cada mudança**;
- O useEffect possui um **array de dependências** que coordena o que permite a execução do código;
- O useEffect é **muito comum** nas requisições HTTP;

## Resgate de dados

- Para resgatar dados de uma API temos um procedimento n oReact;
- Usar **useState** para salvar dados;
- Utilizar **useEffect** para chamar a API apenas quando necessário;
- Realizar a requisição da API com alguma ferramente, **Axios ou Fetch API**;