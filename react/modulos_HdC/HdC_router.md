# React Router

## Sumário

1. [O que é React Router?](#o-que-é-react-router)
2. [Configurando  oReact Router](#configurando-o-react-router)
3. [Configurando página de erro](#configurando-página-de-erro)
4. [Criando componente base](#criando-componente-base)
5. [Link entre páginas](#link-entre-páginas)
6. [Carregando dados](#carregando-dados)
7. [Rota dinâmica](#rota-dinâmica)
8. [Rotas aninhadas](#rotas-aninhadas)
9. [Criando link ativo](#criando-link-ativo)
10. [Search params com React Router](#search-params-com-react-router)
11. [Redirecionamento de usuário](#redirecionamento-de-usuário)

## O que é React Router?

- **React Router** é o pacote mais utilizado para criar rotar em uma aplicação React;
- **Cada rota é uma página**, rota é a nomenclatura utilizada;
- Ou seja, permite nosso app SPA ter múltiplas páginas;
- Precisamos instalar e configurar no projeto;
- Há diversas funcionalidades no React ROuter; **redirecionamento, rodas aninhadas, 404** e etc;

## Configurando o React Router

- Para **configurar o React Router** vamos utilizar principalmente o arquivo **main.jsx**;
- Precisamos importar os componentes: **createBrowserROuter, RouterProvider, Router**;
- Eles serão utilizados na configuração e ao longo do projeto;

## Configurando página de erro

- Podemos criar facilmente uma **página de erro**;
- Precisamos criar um componente, que será a página, geralmente o nome é ErrorPAge;
- Depois vamos utilizar o hook **useRouteError** para obter as informações do erro;
- Por último configurar a propriedade **errorElement** em main.jsx como o componente criado;

## Criando componente base

- O **Outlet** é um componente que nos permite reaproveitar a estrutura das páginas;
- Podemos definir que um componente base seja esta **estrutura**;
- E todas páginas ficam dentro dele;
- As configurações de páginas devem ser feitas na propriedade **children** em main.jsx;

## Link entre páginas

- Para criar links vamos utilziar o componente **Link**;
- Ele é configurado com a propriedade **to**, que leva a URL de destino;
- Isso permite uma mudança de páginas sem reloa;

## Carregando dados

- Vamos utilizar nosso hook **useFetch** para exibir os produtos na Home;
- Isso nos dará possibilidade de explorar **outros recursos do React Router**;
- E também a rever os conceitos aprendidos em requisições de HTTP;

## Rota dinâmica

- O recurso de carregar rotas individuais é chamado de **rota dinâmica**;
- Ou seja, como temos vários produtos a URL de cada um vai variar, dependendo de alguma característica, que geralmente é o id;
- O formato de path é: **/product/:id**;

## Rotas aninhadas

- As rotas aninhadas ou **nested routes**, são estruturas mais complexas;
- Onde combinamos rotas dinâmicas e criamso uma estrutura maior para acessar a página;
- Exemplo: **/products/:id/info**

## Criando link ativo

- Para identificar links ativos utilizamos o componente **NavLink** em vex de Link;
- Há uma propriedade isActive que pode **aplicar estilos diferenciados para este link**;

## Search params com React Router

- O recurso de Search Params nos permite pegar **informações da URL**;
- Ele é muito interessante para fazer funcionalidades de busca em um site;
- O hook utilizado para resgatar estes dados é o **useSearchParams**;

## Redirecionamento de usuário

- Podemos criar um redirecionamento de páginas com o componente **Navigate**;
- Exemplo: uma URL que deixa de existir, mas queremos redirecionar o usuário para outra;
- A configuração é feita no próprio **main.jsx**;