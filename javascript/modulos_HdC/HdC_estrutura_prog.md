# Introdução

## Sumário

1. [Salvando valores na memória (variáveis)](#o-que-é-javascript)
    1.1. [Aprofundando em variáveis](#aprofundando-em-variáveis)
    1.2. [Nomes reservados para variáveis](#nomes-reservados-para-variáveis)
2. [O ambiente JavaScript](#o-ambiente-javascript)
    2.1. [Estruturas das funções](#estruturas-das-funções)
    2.2. [Conhecendo função prompt](#conhecendo-função-prompt)
    2.3. [Função alert](#função-alert)
    2.4. [Introdução ao objeto Math](#introdução-ao-objeto-math)
    2.5. [Conhecendo o objeto console](#conhecendo-o-objeto-console)
3. [O que são estruturas de controle? (if, else)](#o-que-são-estruturas-de-controle-if-else)
    3.1. [Explorando o if](#explorando-o-if)
    3.2. [Segunda possibilidade com else](#segunda-possibilidade-com-else)
    3.3. [Outra condição com else if](#outra-condição-com-else-if)
4. [O que são estruturas de repetição? (for, while)](#o-que-são-estruturas-de-repetição-for-while)
    4.1. [Estrutura while](#estrutura-while)
    4.2. [Explorando o do while](#explorando-o-do-while)
    4.3. [Conhecendo o for](#conhecendo-o-for)
5. [A importância da identação do código](#a-importância-da-identação-do-código)
6. [Forçando a saída de um loop](#forçando-a-saída-de-um-loop)
7. [Pulando uma execução do loop](#pulando-uma-execução-do-loop)
8. [Estrutura switch](#estrutura-switch)
9. [Convenção de nomes](#convenção-de-nomes)

## Salvando valores na memória (variáveis)

- Até então estávamos **colocando os valores nas expressões de console**;
- Porém isso não é tão comum no mundo real, nós precisamos utilizar **variáveis**;
- **Que são como containers**, que salvam informações para quando precisamos utilizar;
- Temos como declarar variáveis como let e const;

```js
// 1 - Variáveis
let nome  = "Bernardo"

console.log(nome)

nome = "Bernardo Martins"

console.log(nome)

const idade = 31

console.log(idade)

// idade = 32 // Não tem como atribuir uum novo valor numa const

console.log(typeof nome)

console.log(typeof idade)
```

### Aprofundando em variáveis

- Podemos **criar várias variáveis** em sequência, desta maneira:
    - `let a = 5, b = 4, c = 10`
- **Não podemos** começar variáveis com números;
- Também não podemos utilizar alguns caracteres especiais, como: @;
- As variáveis são **case sensitive**;

```js
// 2 - Mais sobre variáveis

// let 2teste = "inválido"
// let @teste = "inválido"

let a = 10, 
    b = 20, 
    c = 30

console.log(a, b, c)

const nomecompleto = "Teste01"

const nomeCompleto = "Teste02"

console.log(nomecompleto)
console.log(nomeCompleto)

// Símbolos permitidos para criar variáveis, são "_" e "$"
```

### Nomes reservados para variáveis

- Algumas palavras tem o nome reservado, não podemos criar variáveis com elas, elas são:
![alt text](/javascript/img/nomes_reserv.png)
- É possível unir elas mais outra palavra, para criar uma variável, ex: `let breakTeste = 1`

## O ambiente JavaScript

- Quando um programa é iniciado, um ambiente é criado;
- Neste ambiente **temos diversas funções e objetos** da linguagem JavScript;
- Exemplo: console e alert;
- Todo programa terá acesso a elas;
- O ambiente no caso é o **navegador**;

### Estruturas das funções

- Uma função é um bloco de código que **pode ser reaproveitado ao longo do nosso programa;**
- Invocamos/chamamos ela pelo seu nome, e também o uso de parênteses: **funcao()**
- Também podemos inserir parâmetros, que deixam a execução da função única, ex: **soma(a, b)**
- Utlizamos algumas funções até então, como **log** de console;

### Conhecendo função prompt

- A função **prompt** recebe um dado do usuário;
- Podemos **salvar este valor em uma variável**;
- Exemplo:
    - `const x = prompt("Digite um número: ")`
- Uma função pouco utilizada, mas nos permite fazer ações interessantes;

```js
// 3 - Prompt

const age = prompt("Digite sua idade:")

console.log(`Você tem ${age} anos.`)
```

### Função alert

- A função **alert** emite uma mensagem na tela por um pop up;
- Também não é muito utilizada, mas é um **clássico** de JavaScript;

```js
// 4 - Alert

alert("Testando")

const z = 10

alert(`O número é ${z}`)
```

### Introdução ao objeto Math

- **Math** é um objeto, que possui diversas funções para fins matemáticos;
- Por exemplo:
    - **max**: encontra o maior número;
    - **floor**: arredonda para baixo o número;
    - **ceil**: arredonda para cima o número;

```js
// 5 - Math

console.log(Math.max(5, 2, 1, 10))

console.log(Math.floor(5.14))

console.log(Math.ceil(5.14))
```

### Conhecendo o objeto console

- O **console** também é um objeto, assim como Math, tem várias funções;
- A sua função principal é **exibir uma mensagem de alguma categoria** na aba de Console;

```js
// 6 - Console

console.log("teste!")

console.erro("erro!")

console.warn("aviso!")
```

## O que são estruturas de controle? (if, else)

- Os programas são executados de **cima para baixo**;
- Com estas estruturas podemos **alterar o fluxo de execução**;
- O caminho dependerá das condições e comparações;
- As principais são **if** e **else**;
- Um exemplo de fluxo com estruturas de controle:
![alt text](/javascript/img/estrut_control.png)

### Explorando o if

- O **if** é muito utilizado na programação em geral;
- Temos um bloco de código sendo executado, **se uma condição for verdadeira**;
- A condição é valida por um **boolean** gerado após a execução do techo de código no if;

```js
// 7 - If

const m = 10;

if(m > 5) {
    console.log("M é maior que 5!")
}

const user = "João"

if(user === "João") {
    console.log("Olá João")
}

if(user === "Maria"){
    console.log("Olá Maria!")
}

console.log(user === "João", user === "Maria") // Retorna true false
```

### Segunda possibilidade com else

- O **else** executa quando o if não atende sua condição;
- Ou sej,; **não temos um bloco de validação**, apenas do que será executado;
- A ideia é: Execute SE x > 5, SE NÃO execute isto;

```js
// 8 - Else

const loggedIn = false

if(loggedIn) {
    console.log("Está autenticado!")
} else {
    console.log("Não está autenticado!")
}

const q = 10
const w = 15

if( q > 5 && w > 20) {
    console.log("Números mais altos")
} else {
    console.log("Os números não são mais altos!")
}
```

### Outra condição com else if

- O **else if** é uma estrutura intermediária de if e do else;
- **É possível adicionar novas condições**, como no if;
- Assim temos a possibilidade de criar várias validações, para resolver nosso problema;

```js
// 9 - Else if

if(1 > 2) {
    console.log("Teste")
} else if (2 > 3) {
    console.log("Teste 2")
} else if (5 > 1) {
    console.log("Agora sim!")
}

const userName = "Matheus"
const userAge = 31

if( userName === "José") {
    console.log("Bem vindo José!")
} else if(userName === "Matheus" && userAge === 31) {
    console.log("Olá Matheus, você tem 31 anos!")
} else {
    console.log("Nenhuma condição aceita!")
}
```

## O que são estruturas de repetição? (for, while)

- Um bloco de código que **se repete até uma condição ser satisfeita**;
- Isso evita a **repetição desnecessária** do nosso código;
- Alguns das estruturas são: **for** e **while**;
- As suas sintaxes são diferentes, mas as duas chegam no mesmo resultado;
- Temos que nos atentar ao loop infinito;
![alt text](/javascript/img/estrut_rep.png)

### Estrutura while

- O **while** faz uma ação até que uma condição seja atingida;
- No bloco definimos o fim do loop, que é a condição;
- Temos que definir também um **incrementador**, que é quem faz a condição ser atingida;

```js
// 10 - While

let p = 0

while(p < 5) {
    console.log(`Repetindo ${p}`)
    p = p + 1;
}

// loop infinito

let x = 10

while(x > 5) {
    console.log(`Imprimindo ${x}`)
}
```

### Explorando o do while

- O **do while** também é uma estrutura que permite repetição;
- A sintaxe é **semelhante ao while**;
- Este recurso não é tão utilizado;

```js
// 11 - do while

let o = 10

do {
    console.log(`Valor de ${o}`)
    o--
} while (o > 1)
```

### Conhecendo o for

- O **for** é a estrutura de repetição mais utilizada;
- Ela **condensa tpda lógica em uma linha**, ao primeiro olhar parece mais complexa, mas simplifica as coisas;
- Na própria declaração, colocamos: incrementador, condição final e progressão;

```js
// 12 - for
for(let t = 0; t < 10; t++){
    console.log("Repetindo algo...")
}

let r = 10

for(r; r > 0; r = r - 1){
    console.log(`O r está diminuindo: ${r}`)
}
```

## A importância da identação do código

- A **identação** é um recurso utilizado para organizar múltiplos blocos de código;
- **Utilizamos o tab** para criar um nível de identação;
- O código finciona sem, porém é interessante a adição deste recurso;

## Forçando a saída de um loop

- Com a instrução de **break** podemos ejetar um loop, fazendo que com as repetições cessem;
- **Isso pode poupar memória**, pois o código será executado menos vezes;
- Não é tão comum, mas é um recurso válido da linguagem;

```js
// 14 - break

for(let g = 20; g > 10; g--) {
    console.log(`O valor de g é : ${g}`)

    if(g === 15){
        console.log("O g é 15!")
        break;
    }
}
```

## Pulando uma execução do loop

- A palavra reservada **continue**, pode pular uma ou mais execuções do loop;
- É um recurso utilizado de forma semelhante ao break;

```js
// 15 - continue

for(let s = 0; s < 10; s++) {
    // operador de resto = %
    if(s % 2 === 0) {
        console.log("Número par!")
        continue;
    }

    console.log(s)
}
```

## Estrutura switch

- O **switch** pode ser utilizado para organização de um excesso de if/case;
- Cada if seria um **case**;
- Para cada case, temos que adicionar um break;
- E temos o **default**, que é como o else;

```js
// 16 - switch

const job = "Advogado"

switch(job){
    case "Programador":
        console.log("Você é um programador!")
        break
    case "Advogado":
        console.log("Você é um advogado!")
        break
    case "Engenheiro":
        console.log("Você é um engenheiro!")
        break
    default:
        console.log("Profissão não encontrada")
}

// switch "errado"

const l = 100

switch(l) {
    case 200:
        console.log("L é 200!")
    case 100:
        console.log("L é 100!")
    case 10:
        console.log("L é 10!")
    default:
        console.log("L não foi encontrado!")
}
```

## Convenção de nomes

- Nos casos abaixo temos a pior forma até a melhor, para declarar nome de variáveis:
    - `let programadorcadastrado` **(ruim)**
    - `let programador_cadastrado`
    - `let ProgramadorCadastrado`
    - `let programadorCadastro` **(mais utilizado)**