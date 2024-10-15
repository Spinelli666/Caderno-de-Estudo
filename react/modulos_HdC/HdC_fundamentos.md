# Introdução

1. [Criando o primeiro componente](#criando-o-primeiro-componente)
2. [Importando componentes](#importando-componentes)
3. [Conhecendo o JSX](#conhecendo-o-jsx)
4. [Comentários no React JS](#comentários-no-react-js)
5. [Utilizando Template expressions](#utilizando-template-expressions)
6. [Hierarquia de componentes](#hierarquia-de-componentes)
7. [Eventos de click no React](#eventos-de-click-no-react)
8. [Eventos com funções](#eventos-com-funções)

## Criando o primeiro componente

- Os componentes ficam dentro de uma pasta chamada **components**, que criamos em src;
- Nomeados em CamelCase: **FisrtComponent.jsx**;
- A utilização da extensão **.jsx** facilita a formatação para os editores;
- Dentro do componente precisamos **criar e exportar uma função**, que á lógica dele;

## Importando componentes

- Para utilizar e reutilizar um componente é necessário o processo de **importação**;
- A sintaxe é: **import X from './components/X.jsx'** onde o X é o nome do componente;
- Para inserir o componente dentro de outro vamos utilizar a sintaxe de tag do HTML com o nome do componente: `<FirstComponent/>`;

## Conhecendo o JSX

- **JSX é o HTML do React**, o código interno das funções de componentes, após o return;
- Vamos escrever as nossas tags e importar os outros componentes;
- Há algumas diferenças do HTML, ex: **class = className**;
- Podemos **escrever JavaScript dentro do JSX**;
- O JSX pode ter **apenas um elmento pai**;

## Comentários no React JS

- Há duas formas de inserir comentários em React;
- Podemos utilizar a sintaxe de JS fora e dentro das funções, com: **// Comentário**
- Ou na JSX com: `{/* Algum comentário */}`
- AS chaves são necessárias para executar qualquer instrução de JS;

## Utilizando Template expressions

- **Template Expression** é o recurso que permite a execução de JS no JSX;
- Podemos também inserir variávies;
- A sintaxe é: **{ 2 + 2 }**
- Tudo que vai entre as chaves é entendido e executado como JavaScript;

## Hierarquia de componentes

- Os componentes podem ser **reutilizados** em outros componentes;
- Podemos montar também uma **hierarquia**, onde um componente é pai do outro;
- E ao importar o componente pai, todos os outros vem juntos;

## Eventos de click no React

- Os eventos são essenciais para programar apps de front-end, vimos isso em **DOM**;
- **Em React temos os mesmos eventos**, só que de forma simplificada;
- Por exemplo: com **onClick**, conseguimos disparar um evento que ativa uma função ao clicar em um elemento;

## Eventos com funções

- Quando temos **lógicas complexas**, é mais indicado criar uma função para o evento;
- Isso vai separar as responsabilidades, e deixar nosso código mais de dar **manuntenção**;

## Funções de renderização

- Podemos criar funções nos componentes que **retornam JSX**;
- Isso pode ser utilizada para uma **redenrização condicional**, por exemplo;
- Fazendo que o JSX varie dependnedo do resultado da operação;