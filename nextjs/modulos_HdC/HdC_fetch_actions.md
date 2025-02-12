# Fetch e Server Actions

## Sumário

1. [O que são Fetch e Server Actions](#o-que-são-fetch-e-server-actions)
2. [Configurando o Prisma no Next.js](#configurando-o-prisma-no-nextjs)
3. [Componente Client com Server Action](#componente-client-com-server-action)
4. [Refatorando Actions](#refatorando-actions)

### O que são Fetch e Server Actions

- Fetch é a **ação de resgatar dados do sistema**, uma operação de GET nos dados do banco.
- **Server Actions:** São operações executadas no lado do servidor do Next.js, permitindo interações dinâmicas e atualizações de dados sem a necessidade de uma API externa.
- Server Actions são desencadeadas por eventos no lado do cliente (como envio de formulários ou cliques em botões) e **processadas no servidor**, onde podem interagir com bancos de dados, sistemas de arquivos, ou outros serviços back-end.
- Proporcionam uma **camada adicional de segurança** ao ocultar a lógica de negócios do lado do cliente, reduzem a latência ao minimizar as chamadas de API externas e simplificam a arquitetura ao combinar front-end e back-end em uma única plataforma.

---

### Configurando o Prisma no Next.js

- Primeiramente será necessário criar um projeto de **Next.js com Prisma**, que é a ORM que utilizaremos com o banco de dados SQLite.

- Após iniciar o projeto, vamos **instalar o Prisma**:  
```sh
    npm install prisma @prisma/client
```

- Depois é necessário iniciar a estrutura inicial, com:
```sh
    npx prisma init
```

- Cheque se o banco está configurado no **.env**, por exemplo:
```sh
    DATABASE_URL="file:./dev.db"
```

- Inclua a estrutura do banco no arquivo **schema.prisma**.

- Execute a criação de tabelas com base no schema, com:
```sh
    npx prisma migrate dev
```

### Componente Client com Server Action

- Utilizar Client componentes é muito comum, geralmente **como componentes de layout** ou que precisam alterar algum state sem sincronia com o backend;

- Para isso precisamos declarar o componente com `'use client'`, e colocá-lo no layout;

- Se precisarmos que ele execute uma função que acesse o backend, precisamos analisar o caso e tomar utilizar uma **abordagem que mescle server com client** component;

### Refatorando Actions

- É muito comum o projeto ter **várias actions**, e elas serem reutilizáveis;

- Por isso, um padrão que é adotado é **criar um arquivo `actions.js` ou `ts`**, que contém todas as funções que interagem com o backend;

- No arquivo novo não precisamos de um **`use server`** para cada função, só para o arquivo completo;

- Nos componentes/páginas teremos a **abstração** dessa parte da regra de negócios;