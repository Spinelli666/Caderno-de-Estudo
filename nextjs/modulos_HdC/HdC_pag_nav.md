# Páginas e Navegação

## Sumário

1. [Como funciona o File Based Routing?](#como-funciona-o-file-based-routing)
2. [Navengando entre Páginas](#navengando-entre-páginas)
3. [Rotas dinâmicas](#rotas-dinâmicas)
4. [Parâmetros na URL](#parâmetros-na-url)
5. [Nested Routes](#nested-routes)
6. [Layout de Páginas](#layout-de-páginas)
7. [Componentes no Next.js](#componentes-no-nextjs)
8. [Nested Layouts](#nested-layouts)
9. [Identificando links ativos](#identificando-links-ativos)
10. [Explorando o useRouter](#explorando-o-userouter)
11. [A diferença entre Client e Server Components](#a-diferença-entre-client-e-server-components)
12. [Redirect em server components](#redirect-em-server-components)

### Como funciona o File Based Routing?

- **Conceito de Roteamento Baseado em Arquivos:** Next.js utiliza um roteador baseado na estrutura de arquivos e pastas. Cada pasta dentro do diretório `app` representa um segmento da rota e mapeia para um segmento da URL.

- **Criação de Rotas:** Para criar uma rota, você adiciona pastas dentro do diretório `app`.  
  **Exemplo:** página Sobre a empresa = `app/sobre/page.js`

- **Arquivo `page.js` para Rotas Públicas:** Um arquivo especial chamado `page.js` é usado para tornar os segmentos de rota acessíveis publicamente. A presença deste arquivo define se um caminho de URL é acessível ou não.

- **Pastas sem arquivo `page.js` podem ser usadas para criar uma URL semântica**, exemplo:  
  `users/1/edit` → Se não houver `page.js` em `users`, a URL não é acessível, mas a pasta pode ficar vazia para compor a URL.

---

### Navengando entre Páginas

- **Estrutura de Roteamento no Next.js:** Cada arquivo `page.js` cria uma rota baseada no nome da pasta.  
  **Exemplo:** `app/sobre/page.js` resulta na rota `/sobre`.

- **Criando Páginas Estáticas:** Para criar uma página "Sobre", adicione um arquivo `page.js` na pasta `/sobre`. Este arquivo deve exportar um componente React padrão que renderiza o conteúdo da página.

- **Navegação com Componente Link:** Para interligar páginas, utilize o componente `Link` do Next.js.

  **Exemplo:** Para linkar a página inicial com a página "Sobre", use:  
  ```jsx
  <Link href="/sobre">Sobre</Link>

---

### Rotas dinâmicas

- **Conceito de Rotas Dinâmicas:** No Next.js, rotas dinâmicas são usadas quando os nomes exatos dos segmentos não são conhecidos antecipadamente e precisam ser criados a partir de dados dinâmicos.

- **Convenção de Segmentos Dinâmicos:** Um segmento dinâmico é criado envolvendo o nome de uma pasta em colchetes, como `[id]` ou `[slug]`.

- **Exemplo Prático:**  
  Para um blog, uma rota como `app/blog/[slug]/page.js` onde `[slug]` é o segmento dinâmico para posts do blog.

  O parâmetro `slug` é acessado na página através de `params.slug`.

---

### Parâmetros na URL

- **Leitura da Query String da URL:** `useSearchParams` é um hook de componente cliente que permite ler a string de consulta (query string) da URL atual.

- **Retorno de useSearchParams:** Ele retorna uma versão somente leitura da interface `URLSearchParams`, facilitando a leitura dos parâmetros da URL.

- **Exemplo Prático:**  
  Em uma barra de pesquisa, `useSearchParams` pode ser usado para extrair o termo de pesquisa da URL.  
  **Exemplo:** Se a URL for `/dashboard?search=my-project`, então `searchParams.get('search')` retornará `'my-project'`.

- **Métodos de URLSearchParams:**
  - `.get()`: Retorna o primeiro valor associado ao parâmetro de pesquisa.
  - `.has()`: Retorna um valor booleano indicando se o parâmetro de pesquisa especificado existe.

---

### Nested Routes

- **Conceito de Nested Routes:** Nested Routes permitem criar uma hierarquia de rotas dentro de uma aplicação, onde uma rota é composta por múltiplos segmentos que representam diferentes níveis de aninhamento.

- **Estrutura de Pasta para Nested Routes:** Em Next.js, as rotas aninhadas são criadas por meio da estrutura de pastas.  
  **Exemplo:** A pasta `primeiro/segundo` representa um segmento de rota aninhado, onde o `primeiro` é o segmento pai e o `segundo` é o segmento filho.

- **Exemplo Prático de Nested Routes:** `app/blog/category/[category]/page.js` A rota representa uma categoria específica de um blog.

---

### Layout de Páginas

- **Definição de Layout:** Um layout é a UI compartilhada entre múltiplas rotas. Durante a navegação, os layouts preservam o estado, permanecem interativos e não são re-renderizados. Os layouts também podem ser aninhados.

- No Next temos um arquivo de layout global que é o **layout.js**, ele precisa estar no projeto.

- Podemos adicionar a ele **componentes** como Header e Footer, por exemplo.

---

### Componentes no Next.js

- No Next.js é possível **componentizar igual no React**.

- Um padrão comum é criar em uma **pasta components** fora da pasta de `pages`.

- As demais regras seguem o padrão do React JS para criação de componentes.

- Para importar arquivos distantes da pasta da página, podemos utilizar a **sintaxe de @**, que dá acesso à pasta raiz.

---

### Nested Layouts

- **Conceito de Nesting Layouts:** No Next.js, os layouts são aninhados por padrão, o que significa que eles envolvem layouts filhos através de sua propriedade `children`.  
  Os layouts aninhados permitem criar estruturas hierárquicas de UI.

- **Criação de Layouts Aninhados:** Para aninhar layouts, adicione um arquivo `layout.js` dentro dos segmentos de rota específicos (pastas).  
  **Exemplo:** Para criar um layout para a rota `/dashboard`, adicione um novo arquivo `layout.js` dentro da pasta `dashboard`.

- **Combinação de Layouts:** Ao combinar dois layouts, como um layout raiz (`app/layout.js`) e um layout de dashboard (`app/dashboard/layout.js`), o layout raiz envolverá o layout do dashboard, que por sua vez envolverá os segmentos de rota dentro de `app/dashboard/*`.

- **Boas Práticas e Limitações:** Somente o layout raiz pode conter as tags `<html>` e `<body>`.

---

### Identificando links ativos

- **Uso do Hook usePathname:** usePathname() é um hooke que retorna o caminho atual da URL. è usado para determinar se um link está ativo.

- **Adicionando Classe ao Link Ativo:** PAra destacar um link ativo, você pode comparar o pathname atual com o href do link e adicionar uma classe CSS condicionalmente.

---

### Explorando o useRouter

- **useRouter** é um hook fornecido pelo Next.js que permite manipular a navegação e acessar informações da rota atual dentro de componentes cliente.

- **Navegação Programática:** O `useRouter` oferece métodos como `push`, `replace` e `prefetch` para controlar a navegação de forma programática, permitindo redirecionar o usuário para diferentes rotas com base em ações ou lógica de aplicativo.

---

### A diferença entre Client e Server Components

- **Componentes de Servidor:**
  - Executados exclusivamente no lado do servidor durante a renderização.
  - Não têm acesso a APIs do navegador, como `window` ou `document`.
  - Melhoram a performance ao reduzir a quantidade de JavaScript enviado ao cliente.

- **Componentes com use client:**
  - Marcados com o comentário `'use client'` no início do arquivo.
  - Executados no lado do cliente, permitindo interação dinâmica e acesso a APIs do navegador e hooks do React.
  - Usados para lógicas e interações específicas do lado do cliente, como manipulação de eventos e estados dinâmicos.

- **Diferenças Chave:**
  - Enquanto os **componentes de servidor** focam na renderização inicial e na performance,  
  os **componentes com use client** possibilitam interatividade e funcionalidades dinâmicas no lado do cliente.

---

### Redirect em server components

- **Função redirect para Redirecionamento:** A função `redirect` é usada em Componentes de Servidor no Next.js para redirecionar o usuário para outra rota.

- **Uso em Casos de Falha ou Condições Específicas:** Comumente utilizada para redirecionar usuários em casos de falha de carregamento de dados ou quando determinadas condições não são atendidas, como autenticação falha.

- **Implementação com redirect:** Ao detectar uma condição específica, como a falta de um recurso necessário, a função `redirect` é chamada para levar o usuário para uma rota alternativa, como uma página de login.
