# Introdução

## Sumário

1. [CSS global](#css-global)
2. [CSS de componentes](#css-de-componentes)
3. [Estilos inline](#estilos-inline)
4. [CSS inline dinâmico](#css-inline-dinâmico)
5. [Classes dinâmicas](#classes-dinâmicas)
6. [CSS Modules](#css-modules)

## CSS global

- O CSS global é utilizado para **aplicar estilos a todos elementos do projeto;**
- Utilizamos o arquivo **index.css** para isso, ele fica na pasta src;

## CSS de componentes

- O **CSS de componente** é utilizado apensas em um componente específico;
- Geralmente o arquivo é criado com o **mesmo nome do componente**;
- Lembre-se: ele **não é scoped**, ou seja, pode vazar para outros elementos do projeto;

## Estilos inline

- O **inline style** do React é igual ao do CSS;
- Por meio do **atributo style**, aplicamos regras de CSS diretamente a um elemento;
- As outras abordagens são mais interessantes que essa por questões de manutenção do código;

## CSS inline dinâmico

- O **CSS dinâmico inline** consiste em uma técnica de aplicação de estilo por condição;
- Teremos o atributo inserido em um **if ternário**;
- Dependendo da condição e do resultado dela, um estilo diferente pode ser exibido;

## Classes dinâmicas

- Podemos também aplicar uma lógica para **adicionar classes a um elemento**;
- Utilizamos o **if ternário**;
- Essa abordagem é mais interessante que o CSS inline, pois o conteúdo da classe está no arquivo de CSS;

## CSS Modules

- CSS Modules permite deixar o CSS **scoped**;
- Ou seja, ele só funciona para o componente em questão;
- O nome do arquivo fica: **Component.module.css**;
- É necessário fazer importação também;