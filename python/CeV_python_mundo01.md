# Mundo 01: Fundamentos

**Python é:**

- Linguagem de propósito geral
- Fácil e Intuitiva
- Multiplataformaa
- Batteries included
- Livre (Código Aberto)
- Organizada
- Orientada a Objetos
- Muitas Bibliotecas

## Aula 04 - Primeiros comandos em Python

Comando para printar na tela:
```py
    print('Olá, Mundo!')
```
**Vai devolver:** Olá, Mundo!

```py
    print(6 + 6)
```
**Vai devolver:** 12

```py
    print('7'+'4')
```
**Vai devolver:** 74

```py
    print('Olá', 5)
```
**Vai devolver:** Olá 5

### Variáveis

```py
    nome = 'Camaleão'
    idade = 25
    peso = 75.8

    print(nome, idade, peso)
```
Toda variável é um objeto pro python.

```py
    nome = input('Qual é seu nome?')
    idade = input('Quantos anos você tem?')
    peso = input('Qual é o seu peso?')

    print(nome, idade, peso)
```

##### Desafio 01

**Crie um script Python que leia o nome de uma pessoa e mostre uma mensagem de boas-vindas de acordo com o valor digitadao.**

```py
    nome = input('Qual é o seu nome:')
    print('Olá ', nome, 'Prazer em te conhecer!')
```

##### Desafio 02

**Crie um script Puthon que leia o dia, o mẽs e o ano de nascimento de uma pessoa e mostra uma mensagem com a data formatada.**

```py
    dia = input('Em que dia nasceu?')
    mes = input('Em que mês nasceu?')
    ano = input('Em que ano nasceu?')

    print('Você nasceu no dia ', dia, ' de ', mes, ' de ', ano, '. Correto?')
```

