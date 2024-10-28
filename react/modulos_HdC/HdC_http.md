# Requisições HTTP com React JS

## Sumário

1. [Conhecendo o JSON server](#conhecendo-o-json-server)
2. [A importância do useEffect](#a-importância-do-useeffect)
3. [Regate de dados](#resgate-de-dados)
4. [Enviando dados](#enviando-dados)
5. [Carregamento dinâmico de dados](#carregamento-dinâmico-de-dados)
6. [Fetch com Custom hook](#fetch-com-custom-hook)
7. [Refatorando o POST](#refatorando-o-post)
8. [Estado de loading](#estado-de-loading)
9. [Loading no POST](#loading-no-post)
10. [Tratando erros](#tratando-erros)

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

## Enviando dados

- Para adicionar dados via API vamos precisar dos inputs preenchendo os **useStates**;
- Reunimos os dados em uma função, que é disparada no evento de on **onSubmit**;
- O verbo HTTP que utilizaremos é o **POST**;
- O processo é parecido com o resgate de dados;

## Carregamento dinâmico de dados

- Se a requisição obter êxito, **podemos adicionar no front um novo item a lista**;
- Já temos a informação dele e **não precisamos fazer outra requisição HTTP**;
- Isso deixa nossos projetos mais performático;

## Fetch com Custom hook

- É normal separar as responsabildiades nos componentes;
- Ou seja, termos a função de requisição entre **outro arquivo**;
- Podemos criar o nosso próprio hook para isso;
- Isso é chamado de **custom hook**;
- A pasta geralmente utilizada é a **hooks**;

## Refatorando o POST

- É possível reutilizar o hook para fazer o **POST**;
- **Vamos criar um useEffect** que mapeia uma outra mudança de estado;
- Após ela ocorrer, adicionamos o produto;
- **Nem sempre reutilizar um hook**, para várias ações é a mlheor estratégia;

## Estado de loading

- Quando fazemos requisições HTTP é normal que a resposta **demora um pouco a chegar**;
- Neste intervalo inserimos um **elemento de loading**;
- È possível inserir no nosso hook esta abordagem;

## Loading no POST

- Podemos bloquear ações **enquanto a requisição ocorre**;
- Isso é interessante para evitar **duplicação de eventos**;
- Podemos identificar um POST ocorrendo, e bloquear o input de envio;

## Tratando erros

- Podemos tratar erros das requisições com **blocos try catch**;
- **É possível pegar os dados do erro**, e utilizar a mensagem para exibir algo na tela;
- Desta maneira é possível prever erros em todos os cenários do nosso app (resgate, envio, erro)