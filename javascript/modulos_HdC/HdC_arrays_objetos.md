# Arrays e objetos em JavaScript

## Sumário

1. [Conhecendo os arrays](#conhecendo-os-arrays)
    - 1.1. [Propriedades dos arrays](#propriedades-dos-arrays)
    - 1.2. [Introdução aos métodos de array](#introdução-aos-métodos-de-array)
2. [Introdução a objetos](#introdução-a-objetos)
    - 2.1. [Criando e deletando propriedades](#criando-e-deletando-propriedades)
    - 2.2. [Diferença entre arrays e objetos em JavaScript](#diferença-entre-arrays-e-objetos-em-javascript)
    - 2.3. [Mais sobre objetos](#mais-sobre-objetos)
    - 2.4. [Aprofundando em objetos](#aprofundando-em-objetos)
3. [Mutação](#mutação)
4. [Loops em arrays](#loops-em-arrays)
5. [Métodos de array](#métodos-de-array)
    - 5.1. [Método push e pop](#método-push-e-pop)
    - 5.2. [Métodos shift e unshift](#métodos-shift-e-unshift)
    - 5.3. [Métodos indexOf e lastIndexOf](#métodos-indexof-e-lastindexof)
    - 5.4. [Método forEach](#método-foreach)
    - 5.5. [Método includes](#método-includes)
    - 5.6. [Método reverse](#método-reverse)
6. [Métodos de string](#métodos-de-string)
    - 6.1. [Sobre os métodos de string](#sobre-os-métodos-de-string)
    - 6.2. [Método trim](#método-trim)
    - 6.3. [Método padStart](#método-padstart)
    - 6.4. [Método split](#método-split)
    - 6.5. [Método join](#método-join)
    - 6.6. [Método repeat](#método-repeat)
7. [Rest Operator (Operador Rest)](#rest-operator-operador-rest)
8. [Utilizando o for of](#utilizando-o-for-of)
9. [Destructuring em objetos (desestruturação)](#destructuring-em-objetos-desestruturação)
10. [Destructuring em arrays (desestruturação)](#destructuring-em-arrays-desestruturação)
11. [Conhecendo o tipo de JSON](#conhecendo-o-tipo-de-json)
    - 11.1 [Conversão de JSON](#conversão-de-json)

## Conhecendo os arrays

- Array são **lista**;
- Podemos inserir valores de qualquer tipo de dado;
- Os valores são inseridos entre **[]**;
- Cada valor é separado do outro por uma **vírgula**;

```js
// 1 - arrays

const lista = [1, 2, 3, 4, 5]

console.log(lista)

const itens = ["Bernardo", true, 2, 4.12]

console.log(itens)
```

### Propriedades dos arrays

- Propriedades são como **informações de um objeto**;
- **Os arrays tem propriedades**, assim como outros tipos de dados;
- As propriedades podem ser acessadas por notação de ponto ou colchetes;
    - dado.prop ou dado['prop']

```js
// 2 - mais sobre arrays

const arr = ["a", "b", "c", "d", "e"]

console.log(arr[0])

console.log(arr[2])

console.log(arr[83])

// 3 - propriedades

const number = [5, 3, 4]

console.log(number.length)
console.log(number["length"])

const myName = "Bernardo"

console.log(myName.length)
```

### Introdução aos métodos de array

- **Métodos são como funções**, acessamos com notação de ponto e utilizamos () para invocar;
- **Um importante conceito da OOP**: Objetos são compostos por métodos e propriedades;
- Como muitos dados são objetos em JS, temos métodos e propriedades neles;

```js
// 4 - métodos

const numbers = [5, 3, 4]

const otherNumbers = [1, 2, 3]

const allNumbers = numbers.concat(otherNumbers)

console.log(allNumbers)

const text =  "Algum texto"

console.log(text.toUpperCase())

console.log(typeof text.toUpperCase)

console.log(text.indexOf('g'))
```

## Introdução aos objetos

- Em JS temos um tipo de dado que é o objeto, mas seu nome técnico é **object literals**;
- **Isso porque o objeto vem da Orientação a Objetos**, com outros recursos: instância, herança...
- Já o literals possui apenas propriedades e métodas, nós mesmos os criamos;
- O objeto fica em um **bloco de {}**;

```js
// 5 - objetos

const person = {
    name: "Bernardo",
    age: 31,
    job: "Programação",
}

console.log(person)

console.log(person.name)

console.log(person.name.length)

console.log(typeof person)
```

### Criando e deletando propriedades

- Para adicionar uma nova propriedade a um objeto, utilizamos a **notação de ponto e atribuímos um valor**;
- Já para excluir, vamos utilizar o **operador delete** na propriedade alvo;

 ```js
// 6 - criando  e deletando propriedades

const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 2000,
}

console.log(car)

car.doors = 4

console.log(car)

delete car.km

console.log(car)
 ```

 ### Diferença entre arrays e objetos em JavaScript

 - **Os arrays são utilizados como listas de itens**, geralmente todos possuem o mesmo tipo;
 - **Já os objetos são utilizados para descrever um item**, contém as informações do mesmo, e as propriedades possuem diferente tipos de dados;
 - Podemos ter também um **array de objetos**, isso é muito utilizado;
 - Estes dois dados são muitos importantes na programação;

 ### Mais sobre objetos

 - Podemos copiar todas prorpiedades de um objeto para outro com o **método assign**;
 - O object literal é uma instância de um objeto, chamado **Object**
 - Um objeto ou array criado com const **pode ter seus elementos e propriedades modificados**!

 ```js
// 7 - mais sobre obhetos

const obj = {
    a: "teste",
    b: true

}

console.log(obj instanceof Object) 

const obj2 = {
    c: []
}

Object.assign(obj2, obj)

console.log(obj2)
 ```

 ## Aprofundando em objetos

 - Podemos verificar as propriedades de um objeto pelo **método keys** de Object;
 - Com o **método entries**, recebemos arrays dos nomes das propriedades com seus valores;

 ```js
// 8 - conhecendo melhor os objetos

console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(car))

console.log(Object.entries(car))
 ```

 ## Mutação

 - Outra característica interessante é a **mutação**, isso ocorre quando criamos um objeto a partir de outro;
 - Este novo objeto, não é novo **e sim uma referência do primeiro**;
 - As mudanças dele, podem afetar a cópia e vice-versa;

 ```js
// 9 - Mutação

const a = {
    name: "Lucas"
}

const b = a

console.log(a)
console.log(b)

console.log(a === b)

a.age = 31

console.log(a)
console.log(b)

delete b.age

console.log(a)
console.log(b)
 ```

 ## Loops em arrays

 - Algo muito comum é **percorrer os arrays através de estrutura de repetição**, como for e while;
 - Isso serve para utilizar o resultado de cada um dos elementos de forma simples, **sem repetição de código**;

 ```js
// 10 - loop em array

const users = ["Matheus", "João", "Pedro", "Maria"]

for (let i = 0; i < users.length; i++) {
    console.log(`Listando o usuário: ${users[i]}`)
}
 ```

## Métodos de array

 ### Método push e pop
 
 - Os métodos de array são muito úteis para **manipular os arrays**, ou seja, alterar os seus valores de alguma forma;
 - Com o **push** adicionamos um item ao fim do array;
 - Com o **pop** temos a remoção de um elemento no fim do array;

```js
// 11 - push e pop


const array = ["a", "b", "c"]

array.push("d")

console.log(array)

console.log(array.length)

array.pop()

console.log(array)

const itemRemovido = array.pop()

console.log(itemRemovido)

console.log(array)

array.push("z", "y", "x")

console.log(array)
```

### Métodos shift e unshift

- Ao contrário de pop e push, temos shift e unshift;
- O método **shift** remove o primeiro elemento do array;
- Já o método **unshift** adiciona itens ao início do array;

```js
// 12 - shift e unshift

const letters = ['a', 'b', 'c', 'd'];

const letter = letters.shift();

console.log(letter);

console.log(letters);

letters.unshift('z');

console.log(letters);
```

### Métodos indexOf e lastIndexOf

- O método **indexOf** nos permite encontrar o índice de um elemento, que passamos com o argumento para o método;
- Já o **lastIndexOf** é utilizado quando há repetições de elementos e precisamos do índice da última ocorrência;

```js
// 13 - indexOf e lastIndexOf

const myElements = ['Morango', 'Banana', 'Pêra', 'Morango', 'Banana', 'Uva'];

console.log(myElements.indexOf('Morango'));
console.log(myElements.lastIndexOf('Pêra'));

console.log(myElements[2])
console.log(myElements[myElements.indexOf('Pêra')])

console.log(myElements.lastIndexOf('Morango'))

console.log(myElements.indexOf('Mamão'))

console.log(myElements.lastIndexOf('Mamão'))
```

### Métodos slice

- O método **slice** é utilizado para extrair um array menor de um array maior;
- **O intervalo de elementos é determinado pelos parâmetros**, que são: o índice de início e o índice de fim;
- **O último elemento é ignorado**, se quisermos ele, devemos somar 1 ao índice final;

```js
// 14 - slice

const testeSlice = ['a', 'b', 'c', 'd', 'e', 'f']

const subArray = testeSlice.slice(2, 4)

console.log(testeSlice)

console.log(subArray) 

const subArray2 = testeSlice.slice(2, 4 + 1)

console.log(subArray2)

const subArray3 = testeSlice.slice(10, 20)

console.log(subArray3)

const subArray4 = testeSlice.slice(2)

console.log(subArray4)
```

### Método forEach

- O **forEach** é como uma estrutura for ou while, porém é um método
- Ele **percorre cada um dos elementos do array**;
- Para alguns sua sinxtaxe pode ser mais simples;

```js
// 15 - foreach

const nums = [1, 2, 3, 4, 5]

nums.forEach((numero) => {
    console.log(`O número é ${numero}`)
})

const posts = [
    {title: "Primeiro post", category: "JS"},
    {title: "Segundo post", category: "C"},
    {title: "Terceiro post", category: "Python"},
]

posts.forEach((post) => {
    console.log(`O título do post é ${post.title} e a categoria é ${post.category}`)
})
```

### Método includes

- O método **includes** verifica se o array tem um elemento;
- Utilizamos no array e **como argumento colocamos o elemento que buscamos**;

```js
// 16 - includes

const brands = ["BMW", "Audi", "Mercedes", "VW"];

console.log(brands.includes("Audi")); 

console.log(brands.includes("Fiat"));

if (brands.includes("Audi")) {
    console.log("Tem Audi");
}
```

### Método reverse

- O método **reverse** inverte os elementos de um array;
- Este método **modifica o array original**, então tome cuidado;

```js
// 17 - reverse

const reverseTeste = [1, 2, 3, 4, 5]

reverseTeste.reverse()

console.log(reverseTeste) 
```

## Métodos de string

### Sobre os métodos de string

- **As strings também são objetos**, ou seja, tem métodos e propriedades;
- **Alguns são muito semelhantes aos de array**;
- Note que você pode utilizar length em uma string ou em um array;
- E também acessar cada caractere pelo seu índice;

### Método trim

- O **trim** remove tudo que não é texto em uma string;
- Como: caracteres especiais e espaços em branco;
- Um método interessante para utilizar em **sanitização de dados**;
- O método não modifica o texto original;

```js
// 18 - trim

const trimTest = "   teste \n  "

console.log(trimTest)
console.log(trimTest.trim())

console.log(trimTest.length)
console.log(trimTest.trim().length)
```

### Método padStart

- O método **padStart** insere um texto no começo da string;
- **O texto pode ser repetido**, de acordo com o segundo argumento ao método, ele determina o máximo de caracteres do teto alvo;

```js
// 19 - padStart

const testePadStart = "1"

const newNumber = testePadStart.padStart(4, "0")

console.log(testePadStart)

console.log(newNumber)

const testePadEnd = newNumber.padEnd(10, "0")

console.log(testePadEnd)
```

### Método split

- O **split** divide uma string em uma array;
- Cada elemento será determinado por um **separador em comum**;
- Os mais utilizados, são: ponto e vírgula, vídula, espaço;

```js
// 20 - split

const frase = "O rato roeu a roupa do rei"

const arrayDaFrase = frase.split("")

console.log(arrayDaFrase)
```

### Método join

- Já o **join** une um array em uma string;
- Podemos colocar um **separador** também, para formatar a string;

```js
// 21 - join

const itensParaComprar = ["arroz", "feijão", "macarrão", "carne"]

const fraseDeCompra = `Preciso comprar: ${itensParaComprar.join(", ")}.`

console.log(fraseDeCompra)
```

### Método repeat

- O método **repeat** repete um texto n vezes;
- Onde **n** é o número que colocamos como seu argumento;

```js
// 22 - repeat

const palavra = "Testanto"

console.log(palavra.repeat(3))
```

## Rest Operator (Operador Rest)

- **Rest Operator** é caracterizado pelo símbolo **...**
- podemos utilizá-lo para recever indefinidos argumentos em uma função;
- Assim não precisamos declarar exatamente o que vamos receber, deixando a função mais ampla;

```js
// 23 - rest operator

const somaInfinita = (...args) => {

    let total = 0

    for(let i = 0; i < args.length; i++){

        total += args[i]

    }

    return total

}

console.log(somaInfinita(1, 2, 3))

console.log(somaInfinita(1, 20, 56, 80, 840, 5680))
```

## Utilizando o for of

- O **for...of** é uma estrutura de repetição semelhante ao for, porém mais simples;
- O número de repetição é **baseado no array utilizado**;
- E podemos nos referir aos elementos sem precisar acessar o índice deles;

```js
// 24 - for of

const somaInfinita = (...args) => {

    let total = 0

    for(num of args) {
        total += num
    }

    return total
}

console.log(somaInfinita(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
```

## Destructuring em objetos (desestruturação)

- O **destructuring** é uma funcionalidade que nos permite desestruturar algum dado;
- No caso dos objetos, é possível **criar variáveis a partir das suas propriedades**, com uma simples sintaxe;

```js
//25 - destructuring em objetos

const userDetails = {
    firstName: 'John',
    lastName: 'Doe',
    job: 'developer'
}

const {firstName, lastName, job} = userDetails

console.log(firstName, lastName, job)

// renomear variaveis

const {firstName: name} = userDetails

console.log(firstName)
```

## Destructuring em arrays (desestruturação)

- O **destructuring** também pode ser utilizado para desestruturar um array em variáveis;
- A sintaxe é um pouco diferente, agora utilizaremos colchetes, e não temos nome das chaves;

```js
//26 - destructuring com arrays

const myList = ["Avião", "Carro", "Moto", "Bicicleta", "Caminhão"]

const [a, b, c, d, e] = myList

console.log(a, b, c, d, e)
 ```

## Conhecendo o tipo de JSON

- O **JSON**, JavaScript Object Notation, é um dado em formato de texto;
- Utilizamos para **comunicação entre API e front-end**;
- **Sua formatação é rigorosa**, se for mal feita, o dado é invalidado e não conseguimos comunicação;
- Seu formato **lembra os obeject literais**;
- Regras: apenas aspas duplas e não aceita comentários;

```js
// 27 - JSON

const myJson = '{"name: "John", "age": 31, "skills": ["HTML", "CSS", "JS"]}'; 
```

### Conversão de JSON

- Na maioria das vezes vamos precisar **converter objetos para JSON**;
- **Ou um JSON para um objeto** JavaScript válido;
- Utilizamos o objeto JSON e os métodos **stringify** e **parse**;

```js
// 28 - JSON para objeto e objeto para JSON

const myJson = 
    '{"name": "John", "age": 31, "skills": ["HTML", "CSS", "JS"]}'

const myObject =  JSON.parse(myJson)

console.log(myObject)

console.log(myObject.name)

console.log(typeof myObject)

// json invalido

const badJson = '{"name": "John", "age": 31}'

// const myBadObject = JSON.parse(badJson)

myObject.isOpenToWork = true

console.log(myObject)

const myNewJson = JSON.stringify(myObject)

console.log(myNewJson)
```