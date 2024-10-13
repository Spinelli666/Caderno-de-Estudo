# Orientação a objetos com JavaScript

## Sumário

1. [O que é programação orientada a objetos?](#o-que-é-programação-orientada-a-objetos)
2. [Métodos](#métodos)
    - 2.1. [Aprofundando em métodos](#aprofundando-em-métodos)
3. [Sobre os phototypes](#sobre-os-phototypes)
    - 3.1. [Prototypes na prática](#prototypes-na-prática)
    - 3.2. [Mais sobre Prototype](#mais-sobre-prototype)
4. [Classes básicas](#classes-básicas)
    - 4.1. [Funções como classe](#funções-como-classe)
    - 4.2. [Funções construtoras](#funções-construtoras)
        - 4.2.1. [Métodos em função construtoras](#métodos-em-função-construtoras)
5. [Classes em JavaScript](#classes-em-javascript)
    - 5.1. [Mais sobre classes](#mais-sobre-classes)
6. [Symbol com classes](#symbol-com-classes)
7. [Getter e setter](#getter-e-setter)
8. [Herança](#herança)
9. [Operador instanceof](#operador-instanceof)

## O que é programação orientada a objetos?

- Um **paradigma de programação**, uma outra forma de programar;
- Utilizando **objetos** como seu principal princípio;
- A maioria dos softwares é desenvolvido neste paradigma;
- **Frameworks e bibliotecas de front-end** também são desenvolvidos com POO
- Estávamos desenvolvendo no modo **procedural**

## Métodos

- **Métodos** podem ser adicionados aos objetos;
- **Eles são como propriedades**, mas contém uma função;
- Invocamos os métodos do mesmo modo que funções;

```js
// 1 - métodos

const animal = {
    nome: 'Leão',
    latir: function() {
        console.log('Au Au')
    },
}

console.log(animal.nome)

animal.latir()
```

### Aprofundando em métodos

- Os métodos são utilizados para **interagir também com as propriedades do seu objeto**;
- Podemos exibir elas ou modificá-las;
- Podemos nos referencair com o próprio objeto com a palavra reservada **this**;

```js
// 2 - aprofundando em métodos

const pessoa = {
    nome: 'Lucas',

    getNome: function() {
        return this.nome;
    },

    setNome: function(novoNome) {
        this.nome = novoNome;
    }
}

console.log(pessoa.nome)

console.log(pessoa.getNome())

pessoa.setNome('Lucas Henrique')

console.log(pessoa.getNome())
```

## Sobre os prototypes

- **Prototype** é um recurso que faz parte da arquitetura de JavaScript;
- **É uma espécie de herança**, onde objetos pais herdam propriedades e métodos aos filhos;
- **Por isso muitos dados são considerados objetos** e temos objetos, como: String, Number, entre outros;
- Ou seja, cada dado tem um objeto pai que herdou características pelo protoypes

### Prototypes na prática

- O recurso fundamental do protype que temos que entender é o **fallback**;
- Quando uma propriedade não existe em um dado/objeto, **ela é procurada no seu ancestral**;
- Ou seja, é por isso que temos acesso a length em strings, por exemplo;

```js
// 3 - prototype

const texto = 'teste'

console.log(Object.getPrototypeOf(texto))

const boll = true

console.log(Object.getPrototypeOf(boll))

const arr = []

console.log(arr.length)

console.log(Object.getPrototypeOf(arr))
```

### Mais sobre Prototype

- Quando criamos um objeto a partir de outro, este outro será o prototype do objeto criado;
- **Porém também herderá as características do objeto pai**, se for um objeto, herda de Object;
- Esta é a cadeira do prototype;

```js
// 4 - mais sobre prototype

const myObject = {
    a: "b",
}

console.log(Object.getPrototypeOf(myObject))

console.log(Object.getPrototypeOf(myObject) === Object.prototype)

const mySecondObject = Object.create(myObject)

console.log(mySecondObject)

console.log(mySecondObject.a)

console.log(Object.getPrototypeOf(mySecondObject) === myObject)
```

## Classes básicas

- Os prototypes são originados de uma **Classe**;
- Que **é o molde dos objetos**, nela definimos os métodos e propriedades;
- **JavaScript já possuo suas classes**, porém podemos criar as nossas;
- Isso é essencial para Orientação a Objetos;

```js
// 5 - classes básicas

const cachorro = {
    raca: null,
    patas: 4,
}

const pastorAlemao = Object.create(cachorro)

pastorAlemao.raca = 'Pastor Alemão'

console.log(pastorAlemao)

console.log(pastorAlemao.patas)

const bulldog = Object.create(cachorro)

bulldog.raca = "Bulldog"

console.log(bulldog)
```

### Funções como classe

- Utilizando **funções como classes**, conseguimos iniciar as propriedades com a criação do objeto;
- Chamamos de **função construtora**, este recurso;
- O construtor tem como objetivo **instanciar** um objeto, ou seja, criar um novo objeto;

```js
// 6 - função como classe -função construtora

function criarCachorro(nome, raca) {

    const cachorro = Object.create({})

    cachorro.nome = nome
    cachorro.raca = raca

    return cachorro
}

const bob = criarCachorro("Bob", "Vira lata")

console.log(bob)

const jack = criarCachorro("Jack", "Pastor alemão")

console.log(jack)

console.log(Object.getPrototypeOf(jack))
```

### Funções construtoras

- Este recurso é semelhante ao anterior, mas com uma nova palavra chave: a **new**;
- Em várias linguagens o new é utilizado para instanciar novos objetos, em JS isso também acontece;
- E eles podem partir de funções;

```js
// 7 - funcoes como classe

function Cachorro(nome, raca, idade){
    this.nome = nome;
    this.raca = raca;
    this.idade = idade;
}

const husky = new Cachorro('Tobias', 'Husky', 3);

console.log(husky);
```

#### Métodos em função construtoras

- Para adicionar métodos antes da criação do objeto, **podemos acessar o prototype e colocá-los lá**;
- Esta é basicamente a essência de JavaScript;
- Porém com a evolução da linguagem, outros recursos foram criados, é o que veremos nas próximas aulas;

```js
// 8 - métodos na função construtora

Cachorro.prototype.uivar = function(){
    console.log('Auuuuuu')
}

console.log(Cachorro.prototype);

husky.uivar();
```

## Classes em JavaScript

- Nas versões mais atuais de JS abandonamos as functions e utilizamos as **classes**;
- Aqui temos recursos comuns em outras linguagens, como o **constructor**;
- Além da instância por **new**;

```js
// 9 - classes es6

class CachorroClasse {
    constructor(raca, cor){
        this.raca = raca;
        this.cor = cor;
    }
}

const jeff = new CachorroClasse("Jeff", "Labrador")

console.log(jeff)

console.log(Object.getPrototypeOf(jeff))
```

### Mais sobre classes

- Não podemos adicionar propriedade diretamente as classes;
- Isso precisa ser feito ao iniciá-la ou **via prototype**;
- **Métodos da classe também podem utilizar this** para se referir ao objeto instanciado;
- Os métodos não precisam da palavra function;

```js
// 10 - mais sobre classes

class Caminhao {
    construcao(eixos, cor) {
        this.eixos = eixos
        this.cor = cor
    }

    descreverCaminhao() {
        console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`)
    }
}

const scania = new Caminhao(6, 'vermelho')

console.log(scania)

scania.descreverCaminhao()

Caminhao.motor = 4 // Não funciona

const c2 = new Caminhao(4, 'preto')

console.log(c2)

console.log(c2.motor)

Caminhao.prototype.motor = 4.0 // Funciona via prototype

const c3 = new Caminhao(6, 'azul')

console.log(c3.motor)
```

## Override nas propriedades via Prototype

- As instÇancias dos objetos são criadas baseadas nas classes;
- Ou seja, as **propriedades têm os valores definidos no constructor** ou por métodos;
- Para alterá-los podemos **utilizar o prototype**;

```js
// 11 - override

class Humano {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

const bernardo = new Humano('Bernardo', 22);

console.log(bernardo);

console.log(Humano.prototype.idade) // O valor ainda não existe

Humano.prototype.idade = "Não definida"

console.log(bernardo.idade)

console.log(Humano.prototype.idade)
```

## Symbol com classes

- Quando utilizamos o recurso de **Symbol** com classe, é possível criar uma propriedade **única e imutável**;
- Isso é útil quando há algum dado que se repetirá em todos os objetos criados a partir da classe;

```js
// 12 - symbol

class Aviao {
    constructor(marca,turbina) {
        this.marca = marca;
        this.turbina = turbina;
    }
}

const asas = Symbol()
const pilotos = Symbol()

Aviao.prototype[asas] = 2

Aviao.prototype[pilotos] = 3

const boeing = new Aviao('Boeing', 10)

console.log(boeing)

console.log(boeing[asas])

console.log(boeing[pilotos])
```

## Getter e setter

- Os **getters e setters** são bem famosos na Orientação a Objetos;
- O **get** é um método utilizado para exibir o valor de algum propriedade;
- E o **set** é utilizado para alterar o valor;
- Através de métodos, temos um bloco de código para transformação de dados;

```js
// 13 - getter e setter

class Post {
    constructor(titulo, descricao, tags){
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirTitulo(){
        return `Você está lendo: ${this.titulo}`
    }

    set adicionarTag(tags){
        const tagsArray = tags.split(', ')
        this.tags = tagsArray
    }
}

const myPost = new Post("Algum post", "É um post sobre programação")

console.log(myPost)

console.log(myPost.exibirTitulo)

myPost.adicionarTag = "tag1, tag2, tag3"

console.log(myPost)
```

## Herança

- Uma classe pode herdar propriedades de outra por meio de **herança**;
- Utilizamos a palavra chave **extends**, para adicionar a classe que vai trazer as propriedades;
- E **super** para enviar os valores para a classe pai;

```js
// 14 - herança

class Mamifero {
    constructor(patas){
        this.patas = patas;
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome){
        super(patas, patas);
        this.nome = nome;
    }
}

const shark = new Lobo(4, 'Shark');
console.log(shark);

console.log(shark.patas)
```

## Operador instanceof

- Assim como typeof que verifica o tipo, temos o operador **instanceof**;
- Que **verifica se um objeto é pai de outro**, para ter certeza da ancestralidade;
- Isso é verificado com objeto => classe, e não através das classes;

```js

// 15 - instanceof

// continuação do 13 e 14

console.log(shark instanceof Lobo)

console.log(Lobo instanceof Mamifero)

console.log(new Lobo(4, "teste") instanceof Mamifero)

console.log(new Post("a", "b") instanceof Lobo)
```