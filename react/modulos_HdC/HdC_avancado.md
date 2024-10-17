# Introdução

## Sumário

1. [Inserindo imagens](#inserindo-imagens)
2. [Importando imagens](#importando-imagens)
3. [O que são hooks?](#o-que-são-hooks)
    - 3.1. [Conhecendo o useState](#conhecendo-o-usestate)
    - 3.3. [Renderização de lista](#renderização-de-lista)
    - 3.2. [Propriedade key na repetição de elementos](#propriedade-key-na-repetição-de-elementos)
    - 3.3. [Utilizando o previous state](#utilizando-o-previous-state)
4. [Renderização condicional](#renderização-condicional)
5. [Adicionando else nas condições](#adicionando-else-nas-condições)
6. [Utilizando props](#utilizando-props)
7. [Desestruturando props](#desestruturando-props)
    - 7.1. [Desestruturando props](#desestruturando-props)
    - 7.2. [Reaproveitamento de componentes](#reaproveitamento-de-componentes)
    - 7.3. [Reutilização com loop](#reutilização-com-loop)
8. [Introdução aos fragments](#introdução-aos-fragments)
9. [Utilizando o children](#utilizando-o-children)
10. [Funções em prop](#funções-em-prop)
11. [Recurso de state lift](#recurso-de-state-lift)

## Inserindo imagens

- As imagens do projeto podem ficar na pasta **public**;
- Estando lá, elas **podem ser utilizadas diretamente no projeto**
- A pasta public fica linkada com a src, exemplo: **"/imagem.png"**

## Importando imagens

- Outro local comum de colocar as imagens em um projeto em React é na pasta **assets**;
- Em assests **precisamos importar a imagem**, como se fosse um componente;
- Estas duas abordagens são muito utilizadas;

## O que são hooks?

- Recursos do React que tem diversas funções, podemos criar os nossos também;
- Exemplo: **guardar e alterar o estado de algum dado;**
- **Os hooks precisam ser importados**, e sempre começam com a palavra **use**;
- Alguns bem utilizados são: **useState**, **useEffect**;
- Os hooks que nós criamos são chamados de custom hooks;
- GEralmente toda a aplicação usa pelo menos um hook;

### Conhecendo o useState

- O **useState** é um dos mais utilizados;
- Podemos **gerenciar o estado de um ou mais dados**, é como se fosse um getter/setter;
- Utilizamos este hook pois as **variáveis não funcionam como esperado**, elas não re-renderizam o componente;
- Para guardar um dado vamos utilizar o **setNomeDoDado**;

### Renderização de lista

- Dados do **tipo array** são muito comuns em aplicações;
- Geralmente recebemos um **array de objetos**, e precisamos iterar nele e exibir os elementos;
- O método **map** fará iteração;
- É possível inserir **JSX na execução**;

### Propriedade key na repetição de elementos

- Iterar uma lista sem a **propriedade key**, gera um erro no console;
- O React precisa de uma **chave única** para cada elemento;
- Isso serve para ajudar a **renderização do componente**;
- O React utiliza isso para manipulação dos itens;

### Utilizando o previous state

- **Previous state** é um recurso do hook useState;
- Podemos pegar o **valor original dos dados**, e fazer alguma alteração;
- Muito utilizado em listas, pois pegamos o valor antigo e modificamos;
- **O primeiro argumento do set** sempre é o previous state;

## Renderização condicional

- **Renderização condicional** é quando parte do template é exibido por meio de uma condição;
- Que é simplesmente um **if no JSX**;
- Utilização: quando usuário está autenticado/não autenticado;

## Adicionando else nas condições

- A renderização condicional pode conter um **else** também;
- A estrutura é igual a do **if ternário**;
- Fica desta forma: `condição ? execução1: execução2`;

## Utilizando props

- **Props** é um recurso fundamental do React;
- Permite a **passagem de dados** de um componente pai para um componente filho;
- Será útil para quando houver dados vinto de um banco de dados;
- As props vem em um **objeto no argumento da função do componente**;

### Desestruturando props

- Os componentes geralmente tem mais de uma props;
- Para facilitar o uso delas, podemos **desestruturar no parâmetro da função** do componente;
- Assim o objeto props vira o nome de cada propriedade, então não precisamos acessá-lo;
- Desta maneira: **MyComponent({name,age})**;
- Utilizamos então name, em vez de props.age;

### Reaproveitamento de componentes

- Com auxílio das props, **reutilizar componentes faz mais sentido**;
- Se temos 1000 dados de carros, **podemos representá-los com apenas um componente** repetido n vezes;
- Isso torna o código padronizado, e facilita a manutenção;

### Reutilização com loop

- Os arrays podem ter muito itens, e as vezes nem sabemos ao certo sua quantidade total;
- Então o correto é utilizar uma **estrutura de loop**, para poder percorrer os itens;
- Com isso conciliamos alguns conceitos aprendis: **renderização de lista**, **reaproveitamento de componentes** e **props**;

## Introdução aos fragments

- Os **Fragments** são interessantes para quando há mais de um elemento pai no componente;
- Ou não queremos incluir HTML desnecessário no elemento pai, **não alterando sua estrutura**;
- A sintaxe é: **<>...</>**

## Utilizando o children

- **Children prop** é utilizado quando um componente precisa ter JSX dentro dele;
- Porém o JSX vem do componente pai;
- Então o componente agre como um **container**, abrigando esse JSX;
- E children entre como uma **prop do componente**;

## Funções em prop

- Podemos passar **funções através de props**;
- Basta criar a função no componente pai, e enviar como prop;
- No componente filho, podemos utilizar para algum **evento**;

## Recurso de state lift

- Elevação de state ou **state lift**, é quando u mvalor é levado do componente filho para o pai;
- Geralmente temos um componente que usa o state e outro que o altera;
- Então **o componente pai vai gerenciar os valores** e passar para os filhos as alterações;