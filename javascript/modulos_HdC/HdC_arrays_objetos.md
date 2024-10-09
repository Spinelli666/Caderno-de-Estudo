# Arrays e objetos em JavaScript

## Sumário

1. [Conhecendo os arrays](#conhecendo-os-arrays)
    - 1.1. [Propriedades dos arrays](#propriedades-dos-arrays)
    - 1.2. [Introdução aos métodos de array](#introdução-aos-métodos-de-array)
2. [Introdução a objetos](#introdução-a-objetos)
    - 2.1. [Criando e deletando propriedades](#criando-e-deletando-propriedades)
    - 2.2. [Diferença entre arrays e objetos em JavaScript](#diferença-entre-arrays-e-objetos-em-javascript)

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

### Introdução aos objetos

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