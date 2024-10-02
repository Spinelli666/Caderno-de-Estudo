# Módulo E

### Estrutura de Repetições (ou Laços)

**Estrutura de Repetição com Teste Lógico no Início**

```js
    while (condicao) {

    }
```

```js
// Exemplo
    var c = 1   
    while (c <= 6) {
        console.log(`Passo ${c}`)
        c++
    }
```

**Estrutura de Repetição com Teste Lógico no Final**

```js
    do {

    } while (condicao) 
```

```js
// Exemplo

    var c = 1
    do {
        console.log(`Passo ${c}`)
        c++
    } while (c <= 6)
```

**Estrutura de Repetição com Variável de Controle**

```js
    for(inicio; teste; incr) {

    }
```

- Se o teste for **true** ele mantém, sefor **false** ele vai sair

```js
// Exemplo
    for(var c=1; c<=10; c++) {

    }
```