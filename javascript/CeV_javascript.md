# Curso em Vídeo - JavaScript

## Sumário

1. [Módulo A](#módulo-a)
2. [Módulo B](#módulo-b)

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
```

- Operadores Ternários