# Introdução

## Sumário

1. [O que é uma função](#o-que-é-uma-função)
    1.1. [Criando funções em JavaScript](#criando-funções-em-javascript)
    1.2. [Retorno das funções](#retorno-das-funções)
    1.3. [Escopo de funções](#escopo-de-funções)

## O que é uma função?

- **Estruturas de códigos menores**, podemos dividir nosso código em várias funções;
- O ideal é que cada uma tenha **apenas um único objetivo**;
- Isso nos faz **poupar código**, pois podemos reaproveitá-las;
- **A linguagem tem várias funções já criadas**, e nós podemos criar as nossas;

### Criando funções em JavaScript

- A estrutura da função é um pouco mais complexa;
- Primeiramente utilizamos a **palavra function**, isso inicia uma função;
- Precisamos depois **nomeá-la**;
- Os **parâmetros**, que são uma espécie de configurações, ficam entre **()** depois do nome;
- O **corpo da função** fica entre **{}**;
- Geralmente uma função retorna um valor;

```js
// 1 - Criando uma função

function minhaFuncao() {
    console.log("Testando")
}

minhaFuncao()

const minhaFuncaoEmVariavel = function () {
    console.log("Função em variável")
}

minhaFuncaoEmVariavel()

function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`)
}

funcaoComParametro("Imprimindo alguma coisa")
funcaoComParametro("Outra função")
```

### Retorno das funções

- O retorno serve para **processarmos um valor dentro da função** e retornar para o programa;
- A palavra reservada para este recurso é **return**;
- Se não retornamos nada a função tem utilidade, mas não externaliza o que acontece nela;

```js
// 2 - return

const a = 10
const b = 20
const c = 30
const d = 40

function soma(n1, n2) {
    return n1 + n2
}

const resultado = soma(a, b)

console.log(resultado)

console.lod(c, d)
```

### Escopo de funções

- **As funções tem um escopo separado do escopo do programa**, que é o global;
- Este escopo faz com que variáveis de fora não funcionem dentro;
- Podemos então **declarar novas variáveis**, sem interferir nas já declaradas;

```js
// 3 - escopo

let y = 10

function testandoEscopo() {
    let y = 20
    console.log(`Y dentro da função é: ${y}`)
}

testandoEscopo()

y = 15

console.log(`Y fora da função é: ${y}`)

testandoEscopo()
```