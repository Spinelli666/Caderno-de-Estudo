# JavaScript e o navegador

## Sumário

1. [Os protocolos e a web](#os-protocolos-e-a-web)
2. [Conhecendo as URLs](#conhecendo-as-urls)
3. [Conceitos importantes de HTML](#conceitos-importantes-de-html),
4. [Estrutura do HTML](#estrutura-do-html)
5. [HTML e JavaScript](#html-e-javascript)
6. [HTML e o DOM](#html-e-o-dom)
    - 6.1. [Visualizando o DOM](#visualizando-o-dom)
    - 6.2. [Movendo-se pelo DOM](#movendo-se-pelo-dom)
7. [Selecionando elementos](#selecionando-elementos)
    - 7.1. [Selecionando elementos por tag](#selecionando-elementos-por-tag)
    - 7.2. [Selecionando por id](#selecionando-por-id)
    - 7.3. [Selecionando elementos por classe](#selecionando-elementos-por-classe)
    - 7.4. [Selecionando elementos por regras de CSS](#selecionando-elementos-por-regras-de-css)
8. [Alterando o HTML](#alterando-o-html)
    - 8.1. [Método insertBefore](#método-insertbefore)
    - 8.2. [Método appendChild](#método-appendchild)
    - 8.3. [Método replaceChild](#método-replacechild)
    - 8.4. [Criando nós de texto](#criando-nós-de-texto)
    - 8.5. [Alterando atributos](#alterando-atributos)
    - 8.6. [Altura e largura dos elementos](#altura-e-largura-dos-elementos)
    - 8.7. [Posição do elemento da tela](#posição-do-elemento-da-tela)
    - 8.8. [Alterando estilos do elemento](#alterando-estilos-do-elemento)
    - 8.9. [Estilizando vários itens](#estilizando-vários-itens)

## Os protocolos e a web

- Um protocolo é uma **forma de comunicação entre computadores** através da rede;
- O **HTTP** serve para solicitar arquivos e imagens do servidor (Hyper Text Transfer Protocol);
- É possível navegar em sites através do HTTP;
- **SMTP**: protocolo para envio de email;
- **TCP**: protocolo para transferência de dados;

## Conhecendo as URLs

- Cada arquivo que é carregado no navegador **tem uma URL**;
- A **URL** (Uniform Resouce Locator) pode ser dividida em trê partes;
- Por exemplo: https://horadecodar.com.br/index.html;
- https é o **protocolo**, horadecodar.com.br é o **domínio**, que refência um servidor (DNV > IP);
- E index.html o **arquivo/página que estamos acessando**;

## Conceitos importantes de HTML

- **HTML** (HyperText Markup Language) é uma linguagem de marcação;
- Onde **estruturamos as páginas web**, criando elementos;
- Os elementos são chamados de tags, que podem ser: títulos, imagens, fformulários, listas...
- As tags são caracterizadas por: `<p>`Texto`</p>`
- Podemos adicionar estilos ao HTML com **CSS**;

## Estrutura do HTML

- Toda página HTML tem duas partes importantes, head e body;
- No **head** inserimos as configurações da página, e importaação de outros arquivos (CSS, JS);
- Já no **body** temos os elementos que ficam visíveis para o usuário;
- AS tags possuem **atributos** que configuram os elementos;

## HTML e JavaScript

- Podemos adicionar JavaScript ao HTML por meio da **tag script**, em arquivo externo ou script na página;
- Algumas tags tem **atributos que podem executar JS**, mas isso não é muito utilizado;
- Sempre que houver um link entre um arquivo e outro, uma **chamada HTTP** é executada;
- JavaScript pode ser utilizada para **manipular elementos** do HTML e alterar estilos;

## HTML e o DOM

- O **DOM** é uma representação fiel do HTML da página;
- Ele é utilizado para **acessar o HTML através de JS**;
- Assim podemos modificá-lo através dos métodos e propriedades dos objetos que alteram o DOM;
- DOM vem de **Document Object Model**;
- Através dele também podemos **atrelar eventos ao HTML**, como click ou pressionar teclas do mouse;

### Visualizando o DOM

- O DOM pode modificar completamente uma página;
- È possível alterar: elementos, atributos, estilização;
- **Adicionamos** e **removemos** elementos;
- **O DOM cria uma árvore do HTML**, os elementos são chamados de **nós**;

![DOM](/javascript/img/dom.png.png)

### Movendo-se pelo DOM

- Todos os elementos podem ser acessados através de **document.body**;
- A partir deste elemento pai, vamos encontrando os **childNodes** (nós);
- E podemos acessar suas propriedades, e consequentemente modificá-los;

#### Arquivo HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM</title>
    <link rel="stylesheet" href="style.css">
    <script src="teste.js" defer></script>
</head>
<body>
    <header>
        <h1 id="title">Título</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Produtos</a></li>
                <li><a href="#">Contato</a></li>
            </ul>
        </nav>
    </header>
    <main id="main-container">
        <div class="product">
            <h2>Produto 1</h2>
            <p>Descrição do produto 1</p> 
        </div>
        <div class="product">
            <h2>Produto 2</h2>
            <p>Descrição do produto 2</p> 
        </div>
    </main>
    <footer>
        <p>Rodapé</p>
    </footer>
</body>
</html>
```

#### Arquivo CSS

```css
footer {
    border: 4px solid red;
}
```

**Obs:** Vamos usar esses dois aruqivos de cima como esqueleto nas próximas sessões.

#### Arquivo JS

```js
// 1 - movendo-se pelo DOM

console.log(document.body)

console.log(document.body.childNodes[1])

console.log(document.body.childNodes[1].childNodes)

console.log(document.body.childNodes[1].childNodes.textContent)
```

## Selecionando elementos

- Temos várias formas de selecionar especificamente um elemento, ou um conjunto deles;
- A diferença entre eles é a **forma de seleção**, que pode ser por: classe, id, seletor de CSS;
- Alguns exemplos são: **getElementsByTagName**, **getElementsById**, **querySelector**;

### Selecionando elementos por tag

- Com o método **getElementsByTagName** selecionamos um conjunto de elementos por uma tag em comum;
- O argumento é uma string que leva a tag a ser selecionada;

```js
// 2 - selecionando por tag

const listItens = document.getElementsByTagName('li')

console.log(listItens)
```

### Selecionando por id

- Com o método **getElementsById** selecionamos um único elemento, já que o id é único na página;
- O argumento é uma string que leva o id a ser selecionado;

```js
// 3 - selecionando por id

const title = document.getElementById('title')

console.log(title)
```

### Selecionando elementos por classe

- Com o método **getElementsByClassName** selecionamos um conjunto de elementos por uma classe em comum;
- O argumento é uma string que leva a cçasse a ser selecionada;
- Veja como os atributos do HTML começam a fazer mais sentido em conjunto com JS;

```js
// 4 - selecionando elementos por classe

const products = document.getElementsByClassName('product')

console.log(products)
```

### Selecionando elementos por regras de CSS

- Com o método **querySelectorAll** selecionamos um conjunto de elementos por meio de um seletor de CSS;
- E com o **querySelector** apenas um elemento, com base também um seletor de CSS;

```js
// 5 - selecionando os elementos por CSS

const productsQuery = document.querySelectorAll('.product')

console.log(productsQuery)

const mainContainer = document.querySelector('#main-container')

console.log(mainContainer)
```

## Alterando o HTML

- Podemos mudar praticamente toda a página com o DOM;
- Adicionar, remover e até clonar elementos;
- Alguns métodos muito utilizados são: **insertBefore**, **apeendChild**, **replaceChild**;

### Método insertBefore

- O **insertBefore** cria um elemento antes de um outro elemento;
- É necessário criar um elemento com JS, isso pode ser feito com **createElement**;
- O elemento de referência pode ser selecionado com alguns dos métodos que vimos antes;

```js
// 6 - insertBefore

const p = document.createElement('p')

const header = title.parentElement

header.insertBefore(p, title)
```

### Método appendChild

- Com o **appendChild** é possível adicionar um elemento dentro de outro;
- Este elemento adicionado será o último elemento do elemento pai;

```js
// 7 - appendChild

const navLinks = document.querySelector('nav ul')

const li = document.createElement('li')

navLinks.appendChild(li)
```

### Método replaceChild

- Já o método **replaceChild** é utilizado para trocar um elemento;
- Novamente precisamos do elemento pai;
- E também o elemento para ser substituído e o que vai substituir;

```js
// 8 - replaceChild

const h2 = document.createElement('h2')

h2.textContent = 'Novo título'

header.replaceChild(h2, title)
```

### Criando nós de texto

- Os textos podem ser panipulados com métodos também;
- Temos o **createTExtNode**, que cria um nó de texto;
- E este nó pode ser inserido em um elemento;

```js
// 9 - createTextNode

const myText = document.createTextNode('Meu texto')

console.log(myText)

const h3 = document.createElement('h3')

h3.appendChild(myText)

console.log(h3)

mainContainer.appendChild(h3)
```

### Alterando atributos

- Podemos ler e alterar os valores dos atirbutos;
- Para ler vamos utilizar o método **getAttribute**;
- E para alterar utilizamos **setAttribute**, este leva o nome do atirbuto e o valor para alterar;

```js
// 10 - trabalhando com atributos

const firstLink = navLinks.querySelector('a')

console.log(firstLink)

firstLink.setAttribute('href', 'https://www.google.com')

console.log(firstLink.getAttribute('href'))

firstLink.setAttribute('target', '_blank')
```

### Altura e largura dos elementos

- É possível também pegar valores com altura e largura de elementos;
- Vamos utilizar as propriedades: **offsetWidth** e **offsetHeight**;
- Se queremos desconsiderar as bordas, temos: **clientWidth** e **clientHeight**;

```js
// 11 - altura e largura

const footer = document.querySelector('footer')

console.log(footer.offsetHeight)
console.log(footer.offsetWidth)

console.log(footer.clientHeight)
console.log(footer.clientWidth)
```

### Posição do elemento da tela

- Com o método **getClientBoundingRect** podemos pegar várias informações do elemento;
- Como: posição no eixo X, Y, altura, largura e outros;

```js
// 12 - posicao do elemento

const prouct1 = products[0]

console.log(prouct1.getBoundingClientRect())
```

### Alterando estilos do elemento

- Todo elemento possui uma propriedade chamada **style**;
- A partir dela conseguimos alterar as regras de CSS;
- Note que as regras separadas por traço viram camelCase, exemplo: `background-color => backgroundColor`;

```js
mainContainer.style.color = 'red'
mainContainer.style.backgroundColor = '#333'
mainContainer.style.paddingBottom = '15px'
```

### Estilizando vários itens

- **HTMLCollection** aparece quando selecionamos vários elementos de uma vez;
- Podemos passar por cada um dos elementos com um for of, e estilizar individualmente cada item;

```js
// 14 - alterando estilos de varios elementos

for(const li of listItens) {
  li.style.backgroundColor = 'red'
}
```