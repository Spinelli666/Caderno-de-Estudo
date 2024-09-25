# Curso em Vídeo - JavaScript

## Sumário

1. [Módulo A](#módulo-a)
2. [Módulo B](#módulo-b)
3. [Módulo C](#módulo-c)

### Módulo A

```js
    window.alert('Minha primeira mensagem')
```

- Fazer uma caixa aparecer com uma mensagem
- Pode simplificar só por `alert`

```js
    window.confirm('Está gostando de JS')
```

- Fazer uma caixa de confirmação aparecer com uma mensagem
- Pode simplificar só por `confirm`

```js
    window.prompt('Qual é o seu nome:')
```

- Fazer uma caixa de prompt aparecer com uma mensagem
- Pode simplificar só por `prompt`

[Voltar Para Cima](#sumário)

### Módulo B

```js
    var nome = 'Digite algo'
    var idade = 18
    var salario = 1550.35
    var sexo = "M"
```

- Criando uma variável

```js
    var nome = window.prompt('Qual é o seu nome?')
    window.alert('É um grande prazer em te conhecer, ' + nome + '!')
```

- Pegar o valor do que o usuário escrever

```js
    var n1 = Number.parseFloat(window.prompt('Digite um número: '))
    var n2 = Number.parseFloat(window.prompt('Digite outro número: '))

    var s = n1 + n2
    window.alert('A Soma dos valores é ' + s)
```

- `Number.parseInt` está convertendo o valor para inteiro
- `Number.parseFloat` está convertendo o valor para float
- Dá para utilizar também somento o `Number` que vai disponibilizar os dois de cima

```js
    window.alert('A Soma dos valores é ' + String(s))
```

- Para converter um número para string é bem simples é só usar o `String()`
- Dá para usar também o `n.toString()`

```js
    var nome = Pedrim

    window.alert(`O aluno ${nome}`)
```

- Um outro tipo de formatação seria esse, que é até mais fácil
- Precisa usar **``**

```js
    var s = 'JavaScript'

    s.length // quantos caracteres a string tem
    s.toUpperCase() // tudo para MAISÚSCULAS
    s.toLowerCase() // tudo para minúsculas
```

```js
    var nome = window.prompt('Qual é o seu nome?')
    document.write(`Seu ${nome} tem ${nome.length}. <br>`)
    document.write(`Seu nome em maiúsculas é ${nome.toUpperCase()} <br>`)
    document.write(`Seu nome em minúsculas é ${nome.toLowerCase()}`)
```

- `document.write` escreve no documento

```js
    var n1 = 1545.5
    n1.toFixed(2).replace('.', ',')
```

- `.toFixed()` para aumentar a casa decimal dos números
- `.replace` fazer uma troca, no caso do exemplo ali eu troque o `.` por uma `,`

```js
    var n1 = 1545.5
    n1.toLocaleString('pt-br' ,{style: 'currency', currency: 'BRL'})
```

- O valor que irá retornar é `R$ 1,545.50`

```js
    5 + 2 = 7 // Soma
    5 - 2 = 3 // Subtração
    5 * 2 = 10 // Multiplicação
    5 / 2 = 2.5 // Divisão
    5 % 2 = 1 // Resto da Divisão
    5 ** 2 = 25 // Potência
```

- Valores Aritméticos

```js
    ()
    **
    * / %
    + -
```

- Ordem de cima para baixo de Precedência dos Operadores Aritméticos

```js
    var n = 3
    n = n + 4   n += 4
    n = n - 5   n -= 5
    n = n * 4   n *= 4
    n = n / 2   n /= 2
    n = n ** 2  n **= 2
    n = n % 5   n %= 5
```

- Operadores de Atribuição

```js
    var x = 5
    x = x + 1   x++
    x = x - 1   x--
```

- Operadores de Incremento

```js
    >
    <
    >=
    <=
    ==
    === // Realmente ver se é igual
    !=
```

- Operadores Relacionais

```js
    !   // Negação
    &&  // Conjunção
    ||  // Disjunção
```

- Operadores Lógicos

```js
    () ** /
    > < >=
    !
    &&
    ||
```

- Ordem de cima para baixo de Precedência dos Operadores

```js
    ? :

    teste?true:false

    // Exemplo
    var media = 5.5

    media > 7?'APROVADO':'REPROVADO'
```

- Operadores Ternários

[Voltar Para Cima](#sumário)

### Módulo C

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