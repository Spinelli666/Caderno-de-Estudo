# Estilização

## Sumário

1. [Opções de estilização no Next.js](#opções-de-estilização-no-nextjs)
2. [Estilização Global com CSS](#estilização-global-com-css)
3. [Utilizando CSS Modules](#utilizando-css-modules)
4. [Utilizando o Tailwind](#utilizando-o-tailwind)
5. [SASS no Next.js](#sass-no-nextjs)
6. [CSS Modules com Sass](#css-modules-com-sass)
7. [Styled components no Next.js](#styled-components-no-nextjs)

### Opções de estilização no Next.js

- **Diversas Opções de Estilização:** Next.js suporta várias formas de estilização, incluindo CSS Global, CSS Modules, Tailwind CSS, Sass e CSS-in-JS.

- **CSS Global:** Estilos aplicados em toda a aplicação. Simples e familiar, mas pode resultar em conflitos de estilo.

- **CSS Modules:** Estilos com escopo local que evitam conflitos de nomeação. Cada módulo CSS é aplicado apenas ao componente específico.

- **Tailwind CSS:** Framework CSS de utility-first para designs rápidos e personalizados através da composição de classes de utilidade.

- **Sass:** Pré-processador CSS que adiciona funcionalidades como variáveis, regras aninhadas e mixins.

- **CSS-in-JS:** Estilização diretamente em componentes JavaScript, proporcionando estilos dinâmicos e com escopo.

---

### Estilização Global com CSS

- **Definição de CSS Global:** CSS Global é uma folha de estilo que define regras CSS aplicadas a toda a aplicação, proporcionando consistência no design em todas as páginas e componentes.

- **Criação do Arquivo CSS Global:** O Next já vem com o arquivo `globals.css`, que é usado para este fim.

- **Importação do CSS Global:** O arquivo de estilos já está importado no arquivo de layout padrão. Apenas precisamos escrever as regras de CSS que vamos aplicar.

---

### Utilizando CSS Modules

- **O que são CSS Modules**: CSS Modules oferecem suporte integrado no Next.js usando a extensão `.module.css`. Eles permitem criar estilos com escopo local para componentes, evitando conflitos de nomes de classes entre diferentes arquivos.

- **Escopo Local Automático**: CSS Modules geram automaticamente nomes de classe únicos, permitindo usar o mesmo nome de classe em diferentes arquivos sem preocupação com sobreposição.

- **Ideal para Estilos de Componentes**: Esta abordagem é ideal para incluir estilos específicos de componente, mantendo a organização e a modularidade do código.

- **Nomenclatura**: o arquivo vai ficar sempre com o nome de `<componente>.module.css`.

---

### Utilizando o Tailwind

- **Introdução ao Tailwind CSS**: Tailwind CSS é um framework de CSS *utility-first* que permite construir designs rápidos e personalizáveis através da composição de classes utilitárias.

- **Facilidade de Configuração no Next.js**: No Next.js, configurar Tailwind CSS é simplificado, basta optar por utilizar a *lib* no processo de instalação.

- **Princípios do Utility-First**: Tailwind utiliza classes utilitárias para estilização, permitindo um desenvolvimento ágil e flexível sem a necessidade de escrever CSS customizado.

---

### SASS no Next.js

- **Suporte Integrado para Sass**: Next.js possui suporte integrado para Sass após a instalação do pacote, permitindo o uso de extensões `.scss` e `.sass`.

- **Instalação do Pacote Sass**: Para começar, é necessário instalar o Sass no projeto com o comando: `npm install --save-dev sass`


- **Sintaxes Sass:** Sass oferece duas sintaxes diferentes - SCSS (extensão .scss), mais parecido com CSS, e Sass Indentado (extensão .sass).

- **Personalização de Opções Sass:** É possível configurar o compilador Sass usando sassOptions no next.config.js, como definir caminhos de inclusão.

---

### CSS Modules com Sass

- O Next permite utilizar **SASS com CSS Modules**.

- **Nomenclatura do arquivo**: O arquivo deve seguir o padrão `<componente>.module.scss`

- Então podemos utilizar os recursos de SASS no arquivo de modules.

---

### Styled components no Next.js

- **Habilitando Styled Components**: No `next.config.js`, habilite o suporte a Styled Components configurando o compilador com `styledComponents: true`.

- **Configuração do Registro Global de Estilos**: Crie um componente de registro global em `lib/registry.tsx` ou `registry.jsx` para coletar todas as regras de estilo geradas durante a renderização.

- **Uso do Hook useServerInsertedHTML**: Utilize `useServerInsertedHTML` para injetar os estilos coletados na tag `<head>` do layout raiz.

- **Gestão de Estilos Durante a Renderização no Servidor**: Durante a renderização no servidor, os estilos são extraídos para um registro global e inseridos no `<head>` do HTML, garantindo que as regras de estilo sejam colocadas antes de qualquer conteúdo que as utilize.

