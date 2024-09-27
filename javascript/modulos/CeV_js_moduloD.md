# Módulo D

#### Condições

```js
    if(condicao) {
        // true
    } else {
        // false
    }
```

**Tipos de Condição**

```js
// Condição Simples
    if (condicao) {

    }
```
```js
// Condição Composta
    if(condicao) {
        // true
    } else {
        // false
    }
```
---

- Para escrever no console é preciso usar o:
```js
// Exemplo 1
    console.log('O console funcionou corretamente!')
```

```js
// Exemplo 2
    var vel = 70
    console.log(`A velocidade do seu carro é ${vel}Km/h`)
    if(vel > 60) { // Condição Simples
        console.log(`Você ultrapassou a velocidade permitida. MULTADO!`)
    }
    console.log(`Dirija sempre usando cinto de segurança!`)
```
```js
// Exemplo 3
    var país = 'EUA'
    console.log(`Vivendo em ${país}`)
    if (país == 'Brasil') {
        console.log('Você é Brasileiro!')
    } else {
        console.log('Você é Estrangeiro!')
    }
```
```html
<!-- Exemplo 4 -->
    <h1>Sistema de Multas</h1>
    Velocidade do carro: <input type="number" name="txtvel" id="txtvel"> Km/h
    <input type="button" value="Verificar" onclick="calcular()">
    <div id="res"></div>
```
```js
    function calcular() {
        var txtv = window.document.querySelector('input#txtvel')
        var res = window.document.querySelector('div#res')
        var vel = Number(txtv.value)
        res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}Km/h</strong></p>`
        if (vel > 60) {
            res.innerHTML += `<p>Você está <strong>MULTADO</strong> por excesso de velocidade! </p>`
        }
            res.innerHTML += `<p>Dirija sempre com o cinto de segurança!</p>`
    }
```
---

**Condições Aninhadas**

```js
    if (cond1) {
        //bloco1
    } else {
        if (cond2) {
            //bloco2
        } else {
            //bloco3
        }
    }
```
```js
    if (cond1) {
        //bloco1
    } else if (cond3) {
        //bloco2
    } else {
        //bloco3
    }
```
```js
// Exemplo
    var agora = new Date()
    var hora = agora.getHours() // Pegar a hora atual
    console.log(`Agora são exatamente ${hora} horas.`)
    if(hora < 12) {
        console.log('Bom dia!')
    } else if (hora <=18 ) {
        console.log('Boa tarde!')
    } else {
        console.logo('Boa noite')
    }
```

**Condição Múltipla**

```js
    switch (expressao) {
        case valor 1:
            break
        case valor 2:
            break
        case valor 3:
            break
        default:
            break // Última é opcional
    }
```

```js
var agora = new Date()
var diaSem = agora.getDay()
/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terça')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia Inválido!')
}
```

[Voltar para Sumário](/javascript/CeV_javascript.md)