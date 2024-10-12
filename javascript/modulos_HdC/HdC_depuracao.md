# Introdução

## Sumário

1. [O que é bug e debug?](#o-que-é-bug-e-debug)
2. [Conhecendo o use strict](#conhecendo-o-use-strict)
3. [Utilizando o debugger](#utilizando-o-debugger)
4. [Tratamento de dado por função](#tratamento-de-dado-por-função)
5. [Exception](#exception)
6. [Utilizando o try catch](#utilizando-o-try-catch)
7. [Utilizando o finally](#utilizando-o-finally)
8. [Assertions](#assertions)

## O que é bug e debug?

- **Bug**: um problema que ocorreu no código, muitas vezes por erro do programador, impede o funcionamento do software;
- **Debug**: Método de encontrar e resolver o bug, em JavaScript temos diversas estratégias para isso;
- **Validação**: Técnicas utilizadas para ter o mínimo possível de bugs no software;

## Conhecendo o use strict

- O **strict** é um modo de desenvolvimento que deixar o JS mais rigoroso na hora de programar;
- Deve ser declarado no **topo do arquivo ou de funções**;
- O strict não limita os recursos de JS, ele baliza a forma que você programa;
- **Bibliotecas famosas** são todas feitas em strict;

```js
// 1 - strict

"use strict"

// opa = "teste"

const opa = "teste"

// const undefined = 10

// delete [].length
```
## Depurando com console.log

- O método **log** de console é muito utilizado para debug;
- Utilizamos diversas vezes nos nossos exemplos;

```js
// 2 - console.log

let a = 1
let b = 2

if(a == 1){
    a = b + 2
}

console.log(a)

for(let i = 0; i < b; i++){
    a = a + 2
    console.log(a)
}

if(a > 5) {
    a = 25
}

console.log(a)
```

## Utilizando o debugger

- O **debugger** é uma instrução que nos permite o debug no console do navegador;
- Podemos evidenciar os valores das variáveis em tempo real e com o programa executando, o que acaba ajudando bastante;

```js
// 3 - debugger

let c = 1
let d = 2

if(c == 1){
    c = d + 2
}

debugger

for(let i = 0; i < d; i++){
    c = c + 2
}

console.log("executou o loop")

debugger

if(c > 5) {
    c = 25
}
```

## Tratamento de dado por função

- **Nunca** podemos confiar no dado que é passado pelo usuário;
- **Sempre** devemos criar validações e tratamento para os mesmos;

```js
// 4 - tratamento de dados

function checkNumber(n){

    const result = Number(n)

    if(Number.isNaN(result)) {
        console.log("Valor incorreto!")
        return;
    }

    console.log("Valor correto!")
    return result;
}

checkNumber(5)
checkNumber("10")
checkNumber({})
checkNumber("teste")
```

## Exception

- As **exception** são erros que nós geramos no programa;
- Este recurso faz o programa ser abortado, ou seja, **ele não continua sua execução**;
- Utilizamos a expressão **throw new Error**, com a mensagem de erro como argumento;

```js
// 5 - exceptions

let x = 10

if(x != 11){
    throw new Error('x não é igual a 11')
}
```

## Utilizando o try catch

- **Try catch** é um recurso famoso nas linguagens de programação;
- Onde **tentamos executar algo em try**, e se um erro ocorrer ele **cai no bloco do catch**;
- Útil tanto para debug, como também no desenvolvimento de uma aplicação sólida;

```js
// 6 - try catch

try {

    const soma = x + y

} catch(error) {
    console.log(`Erro no programa: ${error}`)
}
```

## Utilizando o finally

- O **finally** é uma instrução que vai depois do bloco try catch;
- Ela é executada independente de haver algum erro ou não em try;

```js
// 7 - finally

try {
    const value = checkNumber("1")

    if(!value) {
        throw new Error("O valor é inválido")
    }
} catch(error) {
    console.log(`Opa, algo deu errado: ${error}`)
} finally {
    console.log("O código foi executado")
}
```

## Assertions

- **Assertions** são quando os tratamentos de valores passados pelo usuário, geram um erro;
- Porém este recurso tem como objetivo **nos ajudar no desenvolvimento do programa**, ou seja, seria algo para os devs e não para os usuários;

```js
// 8 - assertion

function checkArray(arr) {

    if(arr.length === 0) {
        throw new Error("O array não pode ser vazio")
    } else {
        console.log(`O array tem ${arr.length} elementos`)
    }
}

// checkArray([])

checkArray([1, 2, 3])
```