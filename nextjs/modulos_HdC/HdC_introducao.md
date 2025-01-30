# Introdução

## Sumário

1. [O que é Next.js?](#o-que-é-o-next-js)
2. [Vantagens do Next.js sobre o React JS](#vantagens-do-nextjs-sobre-o-react-js)
3. [Criando seu primeiro projeto Next.js](#criando-seu-primeiro-projeto-nextjs)
4. [Estrutura de diretórios e erquivos](#estrutura-de-diretórios-e-erquivos)
5. [Diferença de SSR e CSR (Server Side Rendering e Client Side Redering)](#diferença-de-ssr-e-csr-server-side-rendering-e-client-side-redering)

### O que é o Next JS?

- Framework front-end com base no React JS.

- **Híbrido de Renderização:** O Next.js oferece flexibilidade ao permitir renderização tanto no lado do servidor (SSR) quanto no cliente (CSR). Isso significa que você pode escolher renderizar páginas inteiramente no servidor para otimizar o SEO e o tempo de carregamento.

- **Integração e Melhoria do React:** O Next.js constrói sobre o React, adicionando funcionalidades como roteamento de páginas baseado em arquivos, renderização prévia para cada página (Static Generation), e suporte a APIs REST e GraphQL com facilidade.

- **SEO e Performance:** A renderização no lado do servidor do Next.js melhora significativamente o SEO, pois os motores de busca recebem páginas completamente renderizadas.

- **Desenvolvimento Simplificado:** O Next.js simplifica o processo de desenvolvimento com recursos como hot reloading (recarga rápida), divisão automática de código (code splitting).

---

### Vantagens do Next.js sobre o React JS

- **SEO e Renderização no Servidor:** O Next.js melhora significativamente o SEO ao renderizar páginas no servidor, tornando o conteúdo acessível para motores de busca.

- **Divisão Automática de Código:** Ele otimiza o tempo de carregamento ao dividir automaticamente o código em pacotes menores, carregando apenas o necessário para cada página.

- **Estilização Integrada:** O Next.js oferece suporte integrado para CSS, Tailwind e Sass, permitindo estilização direta e eficiente sem configurações extras.

- **Facilidade de Configuração:** Com sua abordagem de configuração zero, o Next.js simplifica o processo de desenvolvimento, tornando-o mais acessível e rápido.

- **API Routes:** Permite a criação de APIs robustas dentro do próprio projeto, facilitando a integração e comunicação entre front-end e back-end.

---

### Criando seu primeiro projeto Next.js

- **Configurando o Projeto:** Utilize o comando `npx create-next-app nome-do-projeto` para criar um novo projeto Next.js. Este comando configura um projeto básico com todos os arquivos e configurações necessárias para começar.

- **Personalizando a Página Inicial:** Altere a página inicial no diretório /pages adicionando elementos HTML e JSX.

- **Visualização e Desenvolvimento:** Inicie o servidor de desenvolvimento do Next.js com npm run dev e veja sua aplicação em ação.

---

### Estrutura de diretórios e erquivos

- **Visão Geral da Estrutura de Diretórios:** O Next.js organiza o projeto em diretórios específicos para páginas, componentes e assets públicos, cada um com uma função distinta na arquitetura da aplicação.

- **Diretórios/Arquivos Fundamentais Explicados:**
    - **pages:** Diretório para armazenar as páginas da aplicação, onde cada arquivo corresponde a uma rota.
    - **public:** Local para armazenar arquivos estáticos como imagens, que podem ser acessados diretamente na aplicação.
    - **page.js:** Arquivo para páginas.
    - **layout.js:** Arquivos de elementos que se repetem nas páginas.
    - **globals.css:** Usado para estilização global.

- **Importância do `next.config.mjs`:** Este arquivo configura opções avançadas do Next.js, como customização do webpack, variáveis de ambiente e redirecionamentos. É mais avançado e serve para otimização.

---

### Diferença de SSR e CSR (Server Side Rendering e Client Side Redering)

- **SSR – Carregamento Rápido e SEO:** SSR processa HTML no servidor, enviando páginas prontas para o navegador. Ideal para SEO e tempo de carregamento inicial rápido.

- **CSR – Interatividade e SPA:** CSR renderiza o conteúdo no navegador do usuário, útil para Single Page Applications (SPAs) que precisam de interatividade dinâmica sem recarregar a página.

- **Next.js e SSR:** Next.js usa SSR por padrão para cada página, proporcionando melhor desempenho em SEO e tempos de carregamento iniciais.

- **Next.js e CSR Híbrido:** Next.js permite carregar dados no cliente após o carregamento inicial da página, combinando SSR com CSR para experiências de usuário interativas.

- **Escolhendo entre SSR e CSR:** Em Next.js, a decisão entre SSR e CSR depende de fatores como a necessidade de SEO, tempos de carregamento, interatividade do usuário e complexidade do desenvolvimento.
