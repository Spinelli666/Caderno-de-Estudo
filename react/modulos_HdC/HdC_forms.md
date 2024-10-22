# Formulários com React

## Sumários

1. [Criando formulário](#criando-formulário)
2. [Label envolvendo um input](#label-envolvendo-um-input)
3. [Manipulando valores](#manipulando-valores)
4. [Simplificando a manipulação](#simplificando-a-manipulação)
5. [Introdução aos controlled inputs](#introdução-aos-controlled-inputs)
6. [Limpando formulários](#limpando-formulários)

## Criando formulário

- Para envio de dados é necessário um formulário, em React também utilizamos a **tag form**;
- As labels tem o atributo for alterado para **htmlFor**, que conta com o name do input;
- **Não utilizamos action**, o envio deve ser feito pelo JavaScript, de forma assíncrona;

## Label envolvendo um input

- Em React um padrão muito utilizado é a label ser o elemento **pai do input**;
- O atributo for é opcional nesta abordagem;
- Simplifica o HTML e permanece a **semântica**;

## Manipulando valores

- Para manipular os valores de uma formulários vamos utilizar o hook **useState**;
- Ou seja, armazenamos o valor com o **set**;
- O evento que vai nos inputs é o **onChange**, e nele teremos a função de alteração

## Simplificando a manipulação

- Quando temos diversos inputs no form, podemos simplificar a manipulação
- Criamos uma **função inline dentro do onChange** e trocamos o valor do dado;

## Envio de forms com React JS

- Para enviar formulários utilizamos o evento **onSubmit**;
- Podemos executar uma função, assim como nos inputs;
- Temos que parar o envio do formulário com o **preventDefault**;
- E nesta função é que fazemos **validações** de dados;

## Introdução aos controlled inputs

- Com o **Controlled input** podemos atribuir valores pré-existentes aos inputs dos forms;
- Precisamos igualar o atributo **value** ao state;
- E também fazer uma lógica que entrega uma **string vazia**, se não houver valor;

## Limpando formulários

- Com o controleed inputs limpar o form fica simples;
- Basta atribuir **valores vazios aos states**;
- Feralmente isso é feito após o envio, para restar o formulário;

## Input de Textarea

- O **textarea** pode ser aplicado como um **input normal** de texto;
- O atirbuto **value** pode ser utilizado para mudar o texto inicial;
- E com **onChange** mudamos o seu state;

## Campos de seleção (select)

- O **select** é muito semelhante aos outros inputs;
- O evento **onChange** pode mudar o valor do seu state;
- E o **value** deve ser atribuído a uma das options;