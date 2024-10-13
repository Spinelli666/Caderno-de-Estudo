# Programação assíncrona em JavaScript

## Sumário

1. [O que é programação assíncrona?](#o-que-é-programação-assíncrona)
2. [Função setTimeout](#função-settimeout)
3. [Função setInterval](#função-setinterval)
4. [Promises](#promises)
    - 4.1. [Tratando erros na Promises](#tratando-erros-na-promises)
    - 4.2. [Rejeitando Promises](#rejeitando-promises)
    - 4.3. [Resolvendo várias Promises](#resolvendo-várias-promises)
5. [Asyns Functions](#asyns-functions)
    - 5.1. [Instrução await](#instrução-await)
6. [Generators](#generators)

## O que é programação assíncrona?

- A programação assíncrona precisa ser utilizada quando **as respostas não são obtidas de forma imediata** no programa;
- **Chamadas a uma API** são assíncronas, não sabemos quanto tempo a resposta pode demorar;
- Até agora utilizamos só **instruções síncronas**;
- Na programação assíncrona as **execuções não ocorrem em formato de fila**, e sim no seu tempo;

## Função setTimeout

- A função **setTimeout** faz parte da programação assíncrona;
- Pois estabelecemos uma ação para **ser executada após um certo tempo**;
- Ou seja, o código continua rodando e depois tmeos a execução da função;

```js
// 1 - setTimeout

console.log("Ainda não executou")

setTimeout(function(){

    console.log("Requisição assíncrona")

}, 2000)

console.log("Ainda não executou 2")
```

## Função setInterval

- A função **setInterval** é semelhante a setTimeout, ela é executada após um tempo;
- **Porém ela não para de ser executada**, temos a sua chamada definida pelo tempo de espera na execução;
- È como um loop infinito com execução de tempo controlada;

```js
// 2 - setInterval

console.log("Ainda não começou")

setInterval(function(){
    console.log("Intervalo")
}, 3000)

console.log("Ainda não começou 2")
```

## Promises

- As promises (promessas) são execuções assíncronas;
- É **literalmente uma promessa** de um valor que pode chegar em um ponto futuro;
- Utilizamos o objeto **Promise** e alguns métodos para nos auxiliar;

```js
// 3 - Promise
const promessa = Promise.resolve(5 + 5)

console.log("Algum código")

promessa.then(value => {
    console.log(`A soma é ${value}`)
    return value
})
.then((value) => value - 1)
.then((value) => console.log(`O valor é ${value}`))

console.log("Outro código")
```

### Tratando erros na Promises

- **Uma promise pode conter um erro**, ou dependendo de como o código é executado podemos receber um erro;
- Utilizamos a função **catch** para isso, podemos pegar o erro e exibir;

```js
// 4 - falha na promise

Promise.resolve(4 * "asg")
.then((n) => {
    if(Number.isNan(n)) {
        throw new Error("Não é um número");
    }
})
.catch((err) => console.log(`Um erro ocorrer ${err}`))
```

### Rejeitando Promises

- A rejeição, **diferente do erro**, ocorre quando nós decidimos ejetar uma promise;
- Podemos fazer isso como o método **reject**;

```js
// 5 - rejeiçãoa

function checkNumber(n) {
    return new Promise((resolve,reject) => {

        if(n > 10) {
            resolve(`O número é maior que 10`)
        } else {
            reject(new Error("Número muito baixo"))
        }

    })
}

const a = checkNumber(20)

const b = checkNumber(10)

a.then((v) => console.log(`O resultado é ${v}`)).catch((err) => console.log(`Um erro ocorreu ${err}`))

b.then((v) => console.log(`O resultado é ${v}`)).catch((err) => console.log(`Um erro ocorreu ${err}`))
```

### Resolvendo várias Promises

- Com o método **all** podemos executar várias promises;
- JavaScript se encarrega de verificar e retornar os seus valores finais;

```js
// 6 - resolvendo varias promises

const p1 = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve(10)
    }, 3000)
})

const p2 = Promise.resolve(10 + 10)

const p3 = new Promise((resolve, reject) => {
    if(30 > 10){
        resolve(30)
    } else {
        reject("Erro!")
    }
})

Promise.all([p1, p2, p3]).then((values) => console.log(values))
```

## Asyns Functions

- As **asyncs functions** são funções que retornam Promises;
- Consequentemente há a possibilidade de receber o resultado delas depois, além da **utilização dos métodos de Promise**;

```js
// 7 - async functions

async function somarComDelay(a, b) {
    return a + b
}

somarComDelay(2, 4).then((value) => {
    console.log(`O valor da soma é: ${value}`)
})

console.log("Teste async")
```

### Instrução await

- A instrução **await** serve para aguardar o resultado de uma async function;
- Tornando mais ismples lidar com este tipo de função, desta maneira não precisamos trabalhar diretamente com Promises;

```js
// 8 - async await

function resolveComDelay() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Promise resolvida')
        }, 2000)
    })
}

async function chamadaAsync() {
    console.log("Chamando a Promise, e esperando o resultado")
    const result = await resolveComDelay()
    console.log(`Promise resolvida com o valor: ${result}`)
}

chamadaAsync()
```

## Generators

- **Generators** funcionam de forma semelhante as promises;
- Ações podem ser pausadas e continuadas depois;
- Temos novos operadores, como: **function*** e **yield**;

```js
// 9 - generators

function* generator() {
    yield 1
    yield 2
    yield 3
}

const gen = generator()

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
```