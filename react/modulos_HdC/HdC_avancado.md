# Introdução

## Sumário

1. [Inserindo imagens](#inserindo-imagens)
2. [Importando imagens](#importando-imagens)
3. [O que são hooks?](#o-que-são-hooks)
 - 3.1. [Conhecendo o useState](#conhecendo-o-usestate)
 - 3.2. [Propriedade key na repetição de elementos](#propriedade-key-na-repetição-de-elementos)

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

## Conhecendo o useState

- O **useState** é um dos mais utilizados;
- Podemos **gerenciar o estado de um ou mais dados**, é como se fosse um getter/setter;
- Utilizamos este hook pois as **variáveis não funcionam como esperado**, elas não re-renderizam o componente;
- Para guardar um dado vamos utilizar o **setNomeDoDado**;

## Renderização de lista

- Dados do **tipo array** são muito comuns em aplicações;
- Geralmente recebemos um **array de objetos**, e precisamos iterar nele e exibir os elementos;
- O método **map** fará iteração;
- É possível inserir **JSX na execução**;

## Propriedade key na repetição de elementos

- Iterar uma lista sem a **propriedade key**, gera um erro no console;
- O React precisa de uma **chave única** para cada elemento;
- Isso serve para ajudar a **renderização do componente**;
- O React utiliza isso para manipulação dos itens;