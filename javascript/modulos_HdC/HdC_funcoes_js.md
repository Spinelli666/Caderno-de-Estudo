# Introdução

## Sumário

1. [O que é uma função](#o-que-é-uma-função)
    1.1. [Criando funções em JavaScript](#criando-funções-em-javascript)
    1.2. [Retorno das funções](#retorno-das-funções)
    1.3. [Escopo de funções](#escopo-de-funções)
    1.4. [Escopo aninhado](#escopo-aninhado)
    1.5. [Arrow functions (funções de flecha)](#arrow-functions-funções-de-flecha)
    1.6. [Mais sobre as arrow functions em JavaScript](#mais-sobre-as-arrow-functions-em-javascript)
    1.7. [Parâmetros opcionais em funções](#parâmetros-opcionais-em-funções)
    1.8. [Argumento default (argumento com valor padrão)](#argumento-default-argumento-com-valor-padrão)
2. [Introdução as closures](#introdução-as-closures)
    2.1. [Mais sobre closures em JS](#mais-sobre-closures-em-js)
3. [Introdução a recursão](#introdução-a-recursão)

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

// Outra forma

console.lod(soma(c, d))
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

### Escopo aninhado

- As formas de criar variáveis, **let** e **const**, nos dão a possibilidade do escopo aninhado;
- Que consiste em ter **em qualquer bloco a declaração de variáveis separadas dos futuros escopos;**
- Um bloco é caracterizado po um código entre **{}**;

```js

// 4 - escopo aninhado

let m = 10

function escopoAninhado() {
    let m = 20

    if(true) {
        let m = 30

        if(true) {
            let m = 40

            console.log(m)
        }

        console.log(m)
    }

    console.log(m)
}

escopoAninhado()

console.log(m)

```

### Arrow functions (funções de flecha)

- **Arrow function** é uma outra forma que tmeos de criar funções;
- É uma sintaxe resumida, que **tem algumas diferenças das funções normais**;

```js
// 5 - arrow function

const testeArrow = () => {
    console.log("Está é uma arrow function")
}

teste()

// Exemplo 2

const parOuIpmar = (n) => {
    if(n % 2 === 0) {
        console.log("Par")
        return
    }

    console.log("Impar")
}

parOuImpar(5)

parOuImpar(5)
```

### Mais sobre as arrow functions em JavaScript

- A arrow function pode ter uma **sintaxe mais resumida**;
- Muito útil para **funções pequenas**;
- Onde omitimos as {} e também a instrução de return;

```js
// 6 - mais sobre arrow function

const raizQuadrada = (x) => {
    return x * x
}

console.log(raizQudrada(4))

// Exemplo 2

const raiQuadrada2 = (x) => x * x

console.log(raizQuadrada2(5))
console.log(raizQuadrada2(12))

// Exemplo 3

const helloWorld = () => console.log("Hello World")

helloWorld()
```

### Parâmetros opcionais em funções

- Os argumentos/parâmetros nas funções **são obrigatórios**, precisamos passar todos;
- Porém **há casos de funções que podem funcionar sem algum dos argumentos**;
- Para resolver isso podemos fazer uma checagem do parâmetro com if;

```js
// 7 - parametro opcional

const multiplication = function(m, n) {
    if(m === undefined) {
        return m * 2
    } else {
      return m * n
    }
}

console.log(multiplication(5))
console.log(multiplication(2, 4))

// Exmeplo 2

const greeting = (name) => {
    if(!name) {
        console.log("Olá")
        return
    }

    console.log(`Olá ${name}`)
}

greeting()

greeting("Bernardo")
```

### Argumento default (argumento com valor padrão)

- Valor default é quando **o argumento tem um valor prévio**;
- Se for passado um novo valor, **o default é substituído**;
- Se não, o default é utilizado na função;

```js
// 8 - valor dafault

const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}`
}

console.log(customGreeting("Bernardo"))

console.log(customGreeting("Bernardo", "Oi"))

// Exemplo 2

const repeatText = (text, repeat = 2) => {
    for(let i = 0; i < repeat; i++) {
        console.log(text)
    }
}

repeatText("Olá")

repeatText("Repete 3", 3)
```

## Introdução as closures

- **Closure** é um conjunto de funções, onde temos um reaproveitamento do escopo interno de uma função;
- Pois este escopo não pode ser acessado fora da função, já que é um bloco;
- Então há funções internas que aproveitam o escopo, e são chamadas de closure;

```js
// 9 - closure

function someFunction() {
    let txt = "Alguma coisa"

    function display() {
        console.log(txt)
    }

    display()
}

someFunction()
```

### Mais sobre closures em JS

- As closures também podem servir para **salvar os resultados já executados**;
- Criando uma espécie de incrementação;
- Assim temos **uma variável que executa uma função** e modifica seu valor;

```js
// 10 - masi sorbe closure

const multiplicationClosure = (n) => {
    return (m) => {
        return n * m;
    }
}

const c1 = multiplicationClosure(5)

const c2 = multiplicationClosure(10)

console.log(c1)
console.log(c2)

console.log(c1(5))
console.log(c2(10))
```

### Introdução a recursão

- Um recurso que permite a função **se autoinvocar continuamente**;
- Criamos uma **espécie de loop**;
- É interessante definir uma condição final, para parar a execução;

```js
// 11 - recursion

const untilTen = (n, m) => {
    if(n < 10) {
        console.log("A função parou de executar!")
    } else {
        const x = n - m

        console.log(x)

        untilTen(x, m)
    }
}

untilTen(100, 7)

// infite recursion

/*function run() {
    console.log("Executando...")
    run()
}

run()*/

function factorial(x){
    if(x === 0){
        return 1
    } else {
        return x * factorial(x - 1)
    }

}

const num = 6

const result =  factorial(num)

console.log(`O fatorial de ${num} é ${result}`)
```