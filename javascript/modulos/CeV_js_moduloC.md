# Módulo C

#### O que é DOM?

**DOM** = **Document Object Model**

Conjunto de objetos dentro do meu navegador que vai dá acesso aos meus componentes internos dentro do website.

```js
    // Exemplo 1
    window.document.write('Olá, Mundo!')

    // Exemplo 2
    window.document.write('window.document.charset')

    // Exemplo 3
    window.document.write('window.navigator.appName')

    // Exemplo 4
    window.document.write('window.document.url')
```

- Adicionar diversos componentes

#### Métodos de acesso para Ávore DOM

**Por Marcar**

```js
    getElementsByTagName()
```
---

```html
    <!-- Exemplo -->

    <p>Aqui vai o resultado</p>
    <p>Aprendendo a usar <strong>DOM</strong> em JS.</p>
```
```js
    var corpo = window.document.body
    var p1 = window.document.getElementsByTagName('p')[0]

    // Tipos de exemplo
    // Exemplo 1
    window.document.write('Está escrito assim: ' + p1.innerText)

    // Exemplo 2
    corpo.style.background = 'black'
    p1.style.color = 'blue'

    // Exemplo 3
    document.write(p1.innerText) // Pega só o texto
    document.write(p1.innerHTML) // Pega as modificações do HTML
```

- O `[]` é para escolher qual `p`irá muder, se fir 0 por exemplo, será o primeiro parágrafo

**Por ID**

```js
    getElementById()
```
---

```html
    <!-- Exemplo -->

    <p>Aqui vai o resultado</p>
    <p>Aprendendo a usar <strong>DOM</strong> em JS.</p>
    <div id="msg">Clique em mim</div>
```
```js
    var d = document.getElementById('msg')
    d.style.backgroung = 'green'
    d.innerText = 'Estou aguardando...'
    //window.document.getElementById('msg').innerText = 'Olá!' => Modo mais complexo
```

**Por Nome**

```js
    getElementsByName()
```
---

```html
    <!-- Exemplo -->

    <p>Aqui vai o resultado</p>
    <p>Aprendendo a usar <strong>DOM</strong> em JS.</p>
    <div name="msg">Clique em mim</div>
```
```js
    var d = document.getElementsByName('msg')[0]
    d.innerText = 'Olá'
```

**Por Class**

```js
    getElementsByClassName()
```
---

```html
    <!-- Exemplo -->

    <p>Aqui vai o resultado</p>
    <p>Aprendendo a usar <strong>DOM</strong> em JS.</p>
    <div class="msg">Clique em mim</div>
```
```js
    var d = document.getElementsByClassName('msg')[0]
    d.innerText = 'Olá'
```

**Por Seletor**

```js
    querySelector()
    querySelectorAll()
```
---
```html
    <!-- Exemplo -->

    <p>Aqui vai o resultado</p>
    <p>Aprendendo a usar <strong>DOM</strong> em JS.</p>
    <div id="msg">Clique em mim</div>
```
```js
    var d = window.document.querySelector('div#msg')
    d.style.background = 'blue'
```

#### Funções

```js
    function acao(param){

    }
```

- `acao()` é o nome da ação da função e dentro se pode colcoar alguns parametros

```html
    <body>
        <div id="area">
            Interaja
        </div>        
    </body>
```
```js

    var a = window.document.getElementById('area')
    a.addEventListener('click', clicar)
    a.addEventListener('mouseenter', entrar)
    a.addEventListener('mouseout', clicar)

    function clicar() {
        a.innerText = 'Clicou'
        a.style.background = 'red'
    }
    function entrar(){
        a.innerText = 'Entrou'
    }
    function sair(){
        a.innerText = 'Sair'
    }
```

- `addEventListener` - disparar eventos dentro do próprio JS

```html
    <body>
        <h1>Somando Valores</h1>
        <input type="number" name="txtn1" id="txtn1"> +
        <input type="number" name="txtn2" id="txtn2">
        <input type="buttom" value="Somar" onClick="somar()">
        <div id="res"></div>
    </body>
```
```js
    function somar() {
        var tn1 = window.document.getElementById('txtn1')
        var tn2 = window.document.querySelector('input#txtn2')
        var res = window.document.getElementById('red')
        var n1 = Number(tn1.value)
        var n2 = Number(tn2.value)
        var s = n1 + n2
        res.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${s}`
    }
```

[Voltar para Sumário](/javascript/CeV_javascript.md)