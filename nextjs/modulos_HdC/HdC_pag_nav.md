# Páginas e Navegação

## Sumário

1. [Como funciona o File Based Routing?](#como-funciona-o-file-based-routing)
2. [Navengando entre Páginas](#navengando-entre-páginas)
3. [Rotas dinâmicas](#rotas-dinâmicas)
4. [Parâmetros na URL](#parâmetros-na-url)
5. [Nested Routes](#nested-routes)

### Como funciona o File Based Routing?

- **Conceito de Roteamento Baseado em Arquivos:** Next.js utiliza um roteador baseado na estrutura de arquivos e pastas. Cada pasta dentro do diretório `app` representa um segmento da rota e mapeia para um segmento da URL.

- **Criação de Rotas:** Para criar uma rota, você adiciona pastas dentro do diretório `app`.  
  **Exemplo:** página Sobre a empresa = `app/sobre/page.js`

- **Arquivo `page.js` para Rotas Públicas:** Um arquivo especial chamado `page.js` é usado para tornar os segmentos de rota acessíveis publicamente. A presença deste arquivo define se um caminho de URL é acessível ou não.

- **Pastas sem arquivo `page.js` podem ser usadas para criar uma URL semântica**, exemplo:  
  `users/1/edit` → Se não houver `page.js` em `users`, a URL não é acessível, mas a pasta pode ficar vazia para compor a URL.

### Navengando entre Páginas

- **Estrutura de Roteamento no Next.js:**  
  Cada arquivo `page.js` cria uma rota baseada no nome da pasta.  
  **Exemplo:** `app/sobre/page.js` resulta na rota `/sobre`.

- **Criando Páginas Estáticas:**  
  Para criar uma página "Sobre", adicione um arquivo `page.js` na pasta `/sobre`.  
  Este arquivo deve exportar um componente React padrão que renderiza o conteúdo da página.

- **Navegação com Componente Link:**  
  Para interligar páginas, utilize o componente `Link` do Next.js.

  **Exemplo:** Para linkar a página inicial com a página "Sobre", use:  
  ```jsx
  <Link href="/sobre">Sobre</Link>

### Rotas dinâmicas

- **Conceito de Rotas Dinâmicas:**  
  No Next.js, rotas dinâmicas são usadas quando os nomes exatos dos segmentos não são conhecidos antecipadamente e precisam ser criados a partir de dados dinâmicos.

- **Convenção de Segmentos Dinâmicos:**  
  Um segmento dinâmico é criado envolvendo o nome de uma pasta em colchetes, como `[id]` ou `[slug]`.

- **Exemplo Prático:**  
  Para um blog, uma rota como `app/blog/[slug]/page.js` onde `[slug]` é o segmento dinâmico para posts do blog.

  O parâmetro `slug` é acessado na página através de `params.slug`.

### Parâmetros na URL

- **Leitura da Query String da URL:**  
  `useSearchParams` é um hook de componente cliente que permite ler a string de consulta (query string) da URL atual.

- **Retorno de useSearchParams:**  
  Ele retorna uma versão somente leitura da interface `URLSearchParams`, facilitando a leitura dos parâmetros da URL.

- **Exemplo Prático:**  
  Em uma barra de pesquisa, `useSearchParams` pode ser usado para extrair o termo de pesquisa da URL.  
  **Exemplo:** Se a URL for `/dashboard?search=my-project`, então `searchParams.get('search')` retornará `'my-project'`.

- **Métodos de URLSearchParams:**
  - `.get()`: Retorna o primeiro valor associado ao parâmetro de pesquisa.
  - `.has()`: Retorna um valor booleano indicando se o parâmetro de pesquisa especificado existe.

### Nested Routes

- **Conceito de Nested Routes:**  
  Nested Routes permitem criar uma hierarquia de rotas dentro de uma aplicação, onde uma rota é composta por múltiplos segmentos que representam diferentes níveis de aninhamento.

- **Estrutura de Pasta para Nested Routes:**  
  Em Next.js, as rotas aninhadas são criadas por meio da estrutura de pastas.  
  **Exemplo:** A pasta `primeiro/segundo` representa um segmento de rota aninhado, onde o `primeiro` é o segmento pai e o `segundo` é o segmento filho.

- **Exemplo Prático de Nested Routes:**  
  `app/blog/category/[category]/page.js`  
  A rota representa uma categoria específica de um blog.
