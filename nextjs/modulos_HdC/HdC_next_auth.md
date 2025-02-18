# Autenticação com Next Auth

## Sumário

1. [O que é NextAuth.js?](#o-que-é-nextauthjs)
2. [Criando Projeto com NextAuth.js](#criando-projeto-com-nextauthjs)
3. [Criando o Arquivo .env](#criando-o-arquivo-env)
4. [Obtendo Secret e ID do Google Console](#obtendo-secret-e-id-do-google-console)
5. [Configurando Handlers](#configurando-handlers)
6. [Protegendo Componentes do Cliente](#protegendo-componentes-do-cliente)
7. [Protegendo Páginas do Servidor](#protegendo-páginas-do-servidor)
8. [Protegendo com Middleware](#protegendo-com-middleware)
9. [Integrando NextAuth.js com Prisma](#integrando-nextauthjs-com-prisma)
10. [Concluido a Integração do Banco de dados](#concluido-a-integração-do-banco-de-dados)


---

### O que é NextAuth.js?

- É um dos pacotes mais utilizados para fazer autenticação com o Next;
- Possui várias integrações fáceis com os chamados **Providers**, que são: Google, LinkedIn, GitHub e outros;
- Como também integração com **DBs** e **ORMs**, os chamados **Adapters**;
- Este recurso serve para fazer autenticação via credencial (**e-mail e senha**);

*Observações: ORMs (Object-Relational Mappers - Mapeadores Objeto-Relacional):
ORMs são bibliotecas ou ferramentas que facilitam a comunicação entre a aplicação e um banco de dados relacional, permitindo que você manipule dados usando objetos ao invés de escrever diretamente SQL. Isso torna o código mais organizado e reutilizável. Exemplos de ORMs incluem SQLAlchemy (Python), Prisma (JavaScript/TypeScript), Sequelize (JavaScript), e Django ORM (Python).*

---

### Criando Projeto com NextAuth.js

- Vamos criar um projeto do zero, este com **TypeScript**;
- Instalaremos os pacotes do **Next Auth**, com:  
```bash
  npm install next-auth@beta
```
- O beta significa versão 5, pois ainda está em fase beta;
- Talvez no momento que você esteja assistindo a versão 5 já seja a oficial, verifique na documentação!
- Precisamos de um arquivo auth.ts na raiz do projeto que será o core da configuração de toda a autenticação do projeto;

---

### Criando o Arquivo .env

- No projeto farei um login social através da API do Google;
- Agora será necessário importar alguns auxiliares do pacote de Auth e também o provider do Google em `auth.ts`;
- Todo Provider segue um padrão nas chaves que precisamos no `.env` da aplicação, exemplo: `AUTH_GOOGLE_ID` e `AUTH_GOOGLE_SECRET`, para ID e secret, respectivamente;
- Teremos um arquivo `.env.local` para estas chaves, que obteremos mais tarde do próprio **Google Console**;
- Há também a necessidade de inserir um valor aleatório em `AUTH_SECRET`, que é a chave do **NextAuth** para autenticações;

---

### Obtendo Secret e ID do Google Console

- Agora vamos entrar em [Google Cloud Console](https://console.cloud.google.com/) e obter as nossas chaves para o projeto;
- Primeiramente precisamos criar um novo projeto (se já tem projetos, clique no select da barra superior e crie um novo);
- Insira um nome;
- Selecione **APIs e Serviços** > **Telas de permissão OAuth** > **Externo** > **Criar**;

- Coloque o nome do App e insira os e-mails de suporte e de desenvolvedor (podem ser o mesmo);
- Clique em próximo várias vezes, até voltar à tela inicial, depois clique em **"Publicar aplicativo"** e depois **"Confirmar"**;
- Agora vá para a tela de **Credenciais** e clique em **"Criar credenciais"**;
- E por fim **"ID do cliente OAuth"**;
- Selecione **"Aplicativo da Web"**;
- Em **URI de redirecionamento**, preencha com:
  - [http://localhost:3000/api/auth/callback/google](http://localhost:3000/api/auth/callback/google)
- Supondo que o Next.js inicie na porta **3000**;
- **Copie o ID e a Chave secreta** para o seu arquivo `.env.local`, e (graças a Deus) terminamos a configuração!
- O seu **VS Code** deve finalizar desta maneira:

---

### Configurando Handlers

- Precisamos agora criar um **arquivo `route.ts`**, em uma pasta específica;
- Ele guardará os métodos de rotas utilizados na autenticação;
- A pasta é: `src/app/api/auth/[...nextauth]/route.ts`
- Dentro de `route.ts` criaremos constantes que são extraídas dos **handlers** do arquivo `auth.ts`;
- Esta é uma configuração necessária para as comunicações entre aplicação e **providers**;
- Para importar o que está em `auth.ts` podemos criar um **alias** em `tsconfig.json` com o valor: `"auth": ["./auth.ts"]` dentro da chave `paths`;

---

### Protegendo Componentes do Cliente

- Primeiramente criaremos uma página com **use client**, simulando uma página sem interação com actions;
- Nesta página será necessário usar o hook **useSession**, onde extraímos os dados da sessão;
- Com uma verificação na session é possível bloquear usuários que não estão autenticados;
- Esta abordagem requer que todas as páginas estejam utilizando o contexto **SessionProvider**, podemos encapsular o layout todo com ele;
- Por fim basta criar um link para acessarmos a página, faremos isso na home;

---

### Protegendo Páginas do Servidor

- Para proteger uma página que não é client, é muito mais fácil!
- Basta chamar a **session de auth novamente**, e fazer as validações;
- **Não precisamos do contexto** nesta situação;
- Para exemplificar esta situação, vamos precisar de: uma página e o link dela na home;

---

### Protegendo com Middleware

- Primeiramente precisamos adicionar uma configuração chamada **callbacks** com uma função **authorized em auth.ts** para definir a lógica do middleware;  
- Depois criar um arquivo **middleware.ts** em `src` exportando `auth` as middleware;  
- Por fim basta criar a página e também o link para acessá-la;

---

### Integrando NextAuth.js com Prisma

- Vamos agora integrar o **Prisma com SQLite** para poder salvar dados do usuário no banco;
- Primeiramente instalamos os **pacotes**:
  - `npm install @prisma/client @auth/prisma-adapter`
  - `npm install prisma --save-dev`
- Iniciamos o cliente do Prisma;
- E incluímos os **adaptadores no arquivo de auth**;
- Vamos configurar a **strategy de sessions como jwt**, pois o Prisma ainda **não** está totalmente integrado com Next Auth 5;
- Esta é a primeira etapa do processo do Prisma no Next com Auth;

---

### Concluido a Integração do Banco de dados

- Agora podemos iniciar os arquivos de configuração do Prisma com:
  - `npx prisma init`
- No arquivo de schema vamos colocar o **schema** sugerido pelo Next Auth, e apontar a URL para o arquivo `"file:./dev.db"` que é o nosso banco SQLite;
- Agora precisamos **rodar as migrations** para efetuar a criação de estrutura do banco, o comando é:
  - `npm exec prisma migrate dev`
- **O arquivo dev.db** é criado com as tabelas necessárias;
- Agora ao fazer o login o usuário é persistido no banco, com: nome, email e imagem!
