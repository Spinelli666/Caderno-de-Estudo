# Módulo F

### Variáveis

- **Variáveis simples** só conseguem armazenar **um valor** por vez.

- **Variáveis compostas** devem ser capazes de armazenar vários valores em uma mesma estrutura.

```js
// Exemplo 1
    let num = [5, 8, 4]
```

- A variável `num` é do tipo composta ou um **array** (em pt é **vetor**)


```js
// Exemplo 2
    let num = [5, 8, 2, 9, 3]

    console.log(`Nosso vetor é o ${num}`)
```

```js
// Exemplo 3
    let num = [5, 8, 4]
    num[3] = 6

    console.log(`Nosso vetor é o ${num}`)
```

```js
// Exemplo 4
    let num = [5, 8, 4]
    num[3] = 6
    num.push(7)

    console.log(`Nosso vetor é o ${num}`)
```
```js
// Exemplo 5
    let num = [5, 8, 2, 9, 3]

    console.log(`O vetor tem ${num.length} posições`)
    console.log(`O primeiro valor do vetor é ${num[0]}`)
```

- `length` não é um método, é um atributo

```js
// Exemplo 6
    let num = [5, 8, 2, 9, 3]

    num.sort()
    console.log(num)
    console.log(`O vetor tem ${num.length} posições`)
    console.log(`O primeiro valor do vetor é ${num[0]}`)
```

- O `sort()` vai pegar todos os elementos e ordernar de forma certa eles.

```js
    for(let pos=0; pos < num.lenght;pos++){
        console.log(num[pos])
    }
```

```js
// Exemplo 7
    let valores = [8, 1, 7, 4, 2, 9]

    for(let pos=0; pos < valores.length; pos++){
        console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
    }
```

```js
// Exemplo 8
    let valores = [8, 1, 7, 4, 2, 9]

    for(let pos=0; pos < valores.length; pos++){
        console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
    }
```

```js
// Exemplo 9
    let valores = [8, 1, 7, 4, 2, 9]

    for(let pos in valores){
        console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
    }
```

```js
//Exemplo 10
    let num = [5, 8, 2, 9, 3]

    num.push(1)
    num.sort()
    console.log(num)
    console.log(`O vetor tem ${num.length} posições`)
    console.log(`O primeiro valor do vetor é ${num[0]}`)
    let pos = num.indexOf(4)
    if (pos == -1) {
        console.log('O valor não foi encontrado')
    } else {
        console.log(`O valor 8 está na posição ${pos}`)
    }

```

- `num.idexOf()`: vai procurar o valor da array que está dntro do `()`, se não tiver o valor, o memso retorna `-1`