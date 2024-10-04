# Introdução de dados e operadores

## Sumário

1. [O que são tipos de dados em JavaScript?](#o-que-são-tipos-de-dados-em-javascript)
2. [Number](#number)
3. [Operações aritméticas](#operações-aritméticas)
4. [Special Numbers](#special-numbers-no-js)
5. [Tipo String (para textos)](#tipo-string-para-textos)
6. [Caracteres especiaias nas strings do JS](#caracteres-especiaias-nas-strings-do-js)
7. [Concatenando strings (unição de textos)](#concatenando-strings-unição-de-textos)
8. [Interpolação de textos](#interpolação-de-textos)
9. [Boolean (verdadeiro ou falso)](#booleans-verdadeiro-ou-falso)
10. [Comparando valores em JS](#comparando-valores-em-js)
11. [Comparação de valor idêntico (verificação de tipo e valor)](#comparação-de-valor-idêntico-verificação-de-tipo-e-valor)
12. [Operadores lógicos](#operadores-lógicos)
13. [Conhecendo a Tabela verdade](#conhecendo-a-tabela-verdade)
14. [Operadores lógicos na prática](#operadores-lógicos-na-prática)
15. [Empty Values](#empty-values)

## O que são tipos de dados em JavaScript?

- É a forma de **classificar um dado**;
- Temos como dado: "Matheus", 15, true, [];
- **Os tipos de dados mais comuns são:**
    - Number;
    - String;
    - Boolean;
    - Empty values (null, undefined);
    - Object;

### Number

- **Number** é o tipo de dado para valores numéricos;
- Em JS **todos os números são considerados Number**;
- Sejam eles: inteiros, ponto flutuantes ou negativos;
- Alguns exemplos: 10, 52.5, -12;
- Note que nas linguagens de programação as **casas decimais** são após o caractere ponto (15.8);
- Em JavaScript o operador **typeof** exibe o tipo do dado;

```js
// 1 - Number

console.log(typeof 2) // number
console.log(typeof 5.14) // number
console.log(typeof -127) // number
```

### Operações aritméticas

- Podemos realizar **operações aritméticas na programação*;*
- Operadores como: `+`, `-`, `*`, `/`, podem ser utilizados;
- Veja um exemplo: `console.log(2+5)`;
- A **ordem matemática** também é respeitada na programação, exemplo: `console.log(5+(4*12))`;

```js
// 2 - Ops. aritméticas

console.log(2 + 4) // 6
console.log(10 - 5) // 5
console.log(5 * 4) // 20
console.log(10 / 2) // 5

console.log(5 + (4 * 2))
```

### Special numbers no JS

- **Special Numbers** são dados considerados como números, mas não funcionam como eles;
- Eles são:
    - Infinity;
    - -Infinity
    - NaN (Not a Number);
- Algumas operações podem resultar nestes valores;

```js
// 3 - Special numbers

console.log(typeof Infinity) // number

console.log(typeof -Infinity) // number

console.log(12 * "abc") // NaN

console.log(typeof NaN) // number
```

### Tipo String (para textos)

- Strings são **textos**;
- Em JavaScript temos **três formas** de criar dados de texto;
- Aspas simples, duplas e crases;
- Desta maneira: `console.log("teste")`;
- **O "efeito final" é o mesmo**, mas cada um destes recursos tem particularidades;

```js
// 4 - Strings

console.log("Um texto")
console.log(`Mais um texto`)
console.log(`13`)

console.log(typeof "Um texto") // string
console.log(typeof `Mais um texto`) // string
```

### Caracteres especiaias nas strings do JS

- Uma string deve sempre **começar e terminar com o mesmo caractere** (", ', `);
- Há algumas **combinações de caracteres** que tem efeitos interessantes na strings;
- Por exemplo o **\n**, ele pula uma linha no texto;
- Veja um exemplo: console.log("Text em \n Duas linhas");

```js
// 5 - Símboloes especiais em string
console.log("Testando a \n quebra de linha")

console.log("Espaçamento \t de tab")
```

### Concatenando strings (unição de textos)

- **Concatenação** é o recurso que une dois ou mais textos;
- O operador da concatenação é o **+**;
- Exemplo: `"Meu" + "texto" + "combinado"`;
- Agora o recurso pode não fazer tant osentido, mas com variáveis teremos um melhor uso para ele;

```js
// 6 - Concatenação
console.log("Oi," + " tudo " + " bem?")

console.log(`Testando ` + `com ` + `crase!`)
```

### Interpolação de textos

- Pode ser chamad ode **Template Strings**;
- A **interpolação** é um recurso semelhante a concatenação;
- Mas nos possibilita a escrever tudo na mesma string;
- Esta deve ser escrita entre *``*;
- Podemos executar código JavaScript com **${algum código}**;

```js
// 7 - Template Strings
console.log(`A soma de 2 + 2 é: ${2 + 2}`) // resultado 4 como texto

console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`) // Não funciona
```

### Booleans (verdadeiro ou falso)

- Os booleans possuem apenas dois valores: true ou false;
- Qualquer compração, utilizando o s sinais >, <, ==, resulta em um booleano;
- Mais para frente veremos que este tipo é importante para **estrutura de condição e repetição**;

```js
// 8 - Boolean
console.log(true): // true

console.log(5 > 20) // false

console.log(30 > 10) // true

console.log(typeof false) // boolean
```

### Comparando valores em JS

- As comparaçoes que podemos utilizar são:
- **Maior e menor:** > e <;
- Maior ou igual e menor ou igual: >= e <=;
- **Igual:** ==;
- Diferente: !=;
- **Idêntico:** ===;

```js
// 9 - Comparações
console.log(5 <= 5) // true

console.log(5 < 5) //false

console.log (10 == 10) // true

console.log(10 == 9) // false

console.log(10 != 9) // true
```

### Comparação de valor idêntico (verificação de tipo e valor)

- Os operadores **===** e **!==** funcionam como == e !=;
- Porém também levam em consideração **o tipo do dado**;
- Estes operadores necessitam que o tipo e o dado sejam iguais/ diferentes;
- Devemos tentar ao máximo utilizar estes operadores;

```js
// 10 - Idêntico

console.log(9 == "9") // true

console.log(9 + "9") // 99

console.log(9 === "9") // false

console.log(9 != "9") // false

console.log(9 !== "9") // true
```

### Operadores lógicos

- Os **operadores lógicos** servem para unir duas ou mais comparações;
- O resultado final também é um boolean;
- **&&** - AND - true apenas se os dois lados forem verdadeiros;
- **||** - OR - para ser true, um lado como true é suficiente;
- **!** - NOT - este operador inverte a comparção;

### Conhecendo a Tabela verdade

- A **tabela verdade** vale para qualquer linguagem, e contém todos os resultados dos operadores lógicos;

![Tabela Verdade](/javascript/img/tabela_verdade.png)

### Operadores lógicos na prática

```js
// 11 - Operadores lógicos
console.log(true && true) // true

console.log(true && false) // false

console.log(5 > 2 && 2 < 10) // true

console.log(5 > 2 && "Be" === 1) // false

console.log(5 > 2 || "Be" === 1) // true

console.log(5 < 2 || 5 > 100) // false

console.log(!true) // false

console.log(!5 > 2) // false
```

### Empty Values

- Temos duas palavras reservadas que pertencem a este grupo de dados: **undefined** e **null**;
- Undefined geralmente é visto quando utilizamos um código que ainda não foi definido;
- Já null, costuma ser imposto pelos programadores, para determinar que não há ainda um valor;

```js
// 12 - Empty Values

console.log(typeof null, typeof undefined) // object undefined

console.log(null === undefined) // false

console.log(null == undefined) // true

console.log(null == false) // false

console.log(undefined == false) // false
```

### Mudança de tipos

- Em JavaScript algumas operações mudam o tipo de dado, e isso acontece 'silenciosamente';
- Exemplos:
    - 5 * null => 0
    - "5" - 3 => 2
    - "5" + 1 => 51
    - "a" * "b" => NaN

```js
// 13 - Mudanças de tipos
console.log(5 * null) // 0

console.log("teste" * "opa") // NaN

console.log("10" + 1) // 101

console.log("10" - 9) // 9
```