# Eventos no JavaScript

## Sumário

1. [O que são eventos](#o-que-são-eventos)
    - 1.1. [Acionando eventos](#acionando-eventos)
    - 1.2. [Removendo eventos](#acionando-eventos)
    - 1.3. [Objeto do evento](#removendo-eventos)
    - 1.4. [Propagando eventos](#objeto-do-evento)
    - 1.5. [Evento padrão](#evento-padrão)
    - 1.5. [Evento de tecla](#evento-de-tecla)
    - 1.6. [Outros eventos de mouse](#outros-eventos-de-mouse)
    - 1.7. [Movimento do mouse](#movimento-do-mouse)
    - 1.8. [Evento por scroll](#evento-por-scroll)
    - 1.9. [Evento do foco](#evento-do-foco)
    - 1.10. [Evento de carregamento de página](#evento-de-carregamento-de-página)
    - 1.11. [Debounce](#debounce)

## O que são eventos?

- Ações atreladas a algum **comportamento do usuário**;
- Por exemplo: click, alguma tecla, movimento da tela e do mouse;
- Podemos inserir lógica quando estes eventos ocorre;
- E podemos disparar eventos em certos elementos;
- Esta técnica é conhecida como **event handler**;

### Acionando eventos

- Primeiramente precisamos **selecionar o elemento** que vai disparar o evento;
- Depois vamos ativar um método chamado **addEventListener**;
- Nele declaramos qual o **tipo do evento**, e por meio de callback definimos o que acontece;

#### Arquivo HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eventos</title>
    <link rel="stylesheet" href="style.css">
    <script src="teste.js" defer></script>
</head>
<body>
    <h1 id="my-title">Eventos</h1>
    <button id="my-buttom">Clica em mim!</button>

    <h2>Removento eventos</h2>
    <button id="btn">Tem eventos</button>
    <button id="other-btn">Removendo o evento</button>

    <div id="btn-container">
        <button id="div-btn">Propagação</button>
    </div>

    <a href="https://www.google.com">Ir para o Google</a>

    <h4 id="mouse">Outros eventos de mouse</h4>

    <h4>Evento de focus</h4>
    <input type="text" id="my-input" placeholder="Teastando...">
</body>
</html>
```

#### Arquivo CSS

```css
body {
    margin-bottom: 1000px;
}

#btn-container {
    padding: 30px;
    background-color: green;
}
```

#### Arquivo JS

```js
// 1 - adicionando eventos

const btn = document.querySelector('button');

btn.addEventListener("click", function() {

    console.log("Clicou aqui!")

})
```

### Removendo eventos

- Há situações que vamos querer remover os eventos dos elementos;
- O método para isso é **removeEventListener**;
- Passamos o evento que queremos remover como argumento;

```js
// 2  - removendo evento

const secondBtn = document.querySelector('#btn')

function imprimirMensagem() {
    console.log("Clicou aqui!")
}

secondBtn.addEventListener("click", imprimirMensagem)

const thirdBtn =  document.querySelector('#other-btn')

thirdBtn.addEventListener("click", function() {

    console.log("Evento removido")
    secondBtn.removeEventListener("click", imprimirMensagem)
})
```

### Objeto do evento

- Todo evento possui um **argumento especial**, que contém informações do mesmo;
- Geralmente chamado de **event** ou **e**;

```js
// 3 - argumento do evento

const myTitle = document.querySelector('#my-title')

myTitle.addEventListener("click", (event) => {

    console.log(event)
    console.log(event.offsetX)
    console.log(event.pointerType)
    console.log(event.target)
})
```

### Propagando eventos

- Quando um elemento de m evento não é claramente definido pode haver **propagação**;
- Ou seja, um outro elemento ativar o evento;
- Para resolver este problema temos o método **stopPropagation**

```js
// 4 - propagação

const containerBtn = document.querySelector('#btn-container')
const btnInsideContainer = document.querySelector('#div-btn')

containerBtn.addEventListener("click", () => {

    console.log("Evento 1")
})

btnInsideContainer.addEventListener("click", (e) => {
    e.stopPropagation()
    console.log("Evento 2")
})
```

### Evento padrão

- Muitos elementos tem **ações padrão** no HTML;
- Como os links que nos levam a outras páginas;
- Podemos remover isso com o método **preventDefault**;

```js
// 5 - removendo evento padrão
const a = document.querySelector('a')

a.addEventListener("click", (e) => {
    e.preventDefault()
    console.log("Link desativado")
})
```

### Evento de tecla

- Os eventos de tecla mapeiam as **ações no teclado**;
- Temos a disposição **keyup** e **keydown**;
- keyup ativa quando a tecla é solta;
- E keydown quando é pressionada;

```js
// 6 - eventos de tecla

document.addEventListener("keyup", (e) => {

    console.log(`Soltou a tecla ${e.key}`)
})

document.addEventListener("keydown", (e) => {

    console.log(`Soltou a tecla ${e.key}`)
})
```

### Outros eventos de mouse

- O mouse pode ativar outros eventos;
- **mousedown**: pressionou botão do mouse;
- **mouseup**: soltou botão do mouse;
- **dblclick**: clique duplo;

```js
// 7 - eventos de mouse

const mouseEvents = document.querySelector('#mouse') 

mouseEvents.addEventListener("mousedown", () => {
    console.log("Pressionou o botao")
})

mouseEvents.addEventListener("mouseup", () => {
    console.log("Soltous o botão")
})

mouseEvents.addEventListener("dblclick", () => {
    console.log("Clique duplo")
})
```

### Movimento do mouse

- É possível ativar um evento a partir da **movimentação do mouse**;
- O evento é o **mousemove**;
- Com o objeto de evento podemos detectar a posição do ponteiro do mouse;

```js
document.addEventListener("mousemove", (e) => {
    console.log(`No eixo X: ${e.clientX}`)
    console.log(`No eixo Y: ${e.clientY}`)
})
```

### Evento por scroll

- Podemos também adicionar um evento ao **scroll do mouse/página**;
- Isso é feito pelo evento **scroll**;
- Podemos determinar que algo aconteça apís chegar numa posição escolhida da tela;

```js
window.addEventListener("scroll", (e) => {
    if(window.scrollY > 200) {
        console.log("Passou de 200px")
    }
})
```

### Evento do foco

- O evento **focus** é disparado quando focamos em um elemento;
- Já o **blur** é quando perde o foco do elemento;
- Estes são comuns em inputs;

```js
// 10 evento de focus/blue

const input = document.querySelector('#my-input')

input.addEventListener("focus", (e) => {
    console.log("Entrou no input")
})

input.addEventListener("blur", (e) => {
    console.log("Saiu no input")
})
```

### Evento de carregamento de página

- Podemos adicionar um evento ao carregar a página que é o **load**;
- E quando o usuário sai da página, que é o **beforeunload**;

```js
// 11 - evento de carregamento

window.addEventListener("load", () => {
    console.log("Página carregada")
})

window.addEventListener("beforeunload", (e) => {
    e.preventDefault()
})
```

### Debounce

- O **debounce** é uma técnica utilizada para fazer um evento disparar menos vezes;
- Isso poupa memória do usuário, pois talvez nem sempre o evento seja necessário;

```js
// 12 - debounce

const debounce = (f, delay) => {
    let timeout

    return(...arguments) => {
        if(timeout) {
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
            f.apply(arguments)
        }, delay)

    }
}

window.addEventListener("mousemove", debounce(() => {
    console.log("Executando a cada 400ms")
}, 400)
)
```