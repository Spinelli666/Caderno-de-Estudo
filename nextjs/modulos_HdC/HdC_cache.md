# Cache

## Sumário

1. [Como Funciona o Cache no Next.js?](#como-funciona-o-cache-no-nextjs)
2. [Reavalidando o Cache por Tempo](#reavalidando-o-cache-por-tempo)
3. [Removendo Cache](#removendo-cache)
4. [Utilizando o revalidatePath](#utilizando-o-revalidatepath)

### Como Funciona o Cache no Next.js?

- O cache funciona em produção, **no ambiente de desenvolvimento ele não interfere em nada**;
- Memoização de Requisições: O Next **automaticamente memoiza requisições** `fetch` com a mesma URL, permitindo reuso de dados na árvore de componentes durante uma única requisição ao servidor;
- **Data Cache:** O Next.js possui um cache de dados integrado que armazena o resultado das requisições de dados entre requisições ao servidor;
- **Full Route Cache:** Rotas são automaticamente renderizadas e armazenadas em cache no momento da construção, reduzindo o custo de renderização e melhorando a performance;
- **Router Cache:** Um cache do lado do cliente que armazena a carga de componentes do servidor, reduzindo requisições ao servidor durante a navegação;

---

### Reavalidando o Cache por Tempo

- Nos arquivos de página, podemos **exportar a constante revalidate**, que aceita valores numéricos;
- O valor determina **quantos segundos o cache deve durar**;
- Exemplo:
  - ```javascript
    export const revalidate = 100;
    ```
- O cache dura 100 segundos, depois os dados novos são trazidos;
- Vamos aplicar no nosso `page.js` de todos!

---

### Removendo Cache

- Para **remover o cache** de uma página completamente, utilizamos a seguinte instrução:

```javascript
  export const dynamic = "force-dynamic";
```

- Desta maneira a página irá sempre buscar os dados mais recentes;
- Podemos colocar na mesma área onde utilizamos a instrução de cache por tempo;

---

### Utilizando o revalidatePath

- O **revalidatePath** do Next nos permite excluir o cache em uma rota determinada como argumento da função;
- E é uma abordagem interessante pois podemos **utilizar em uma função específica**, por exemplo: na remoção;
- Então não precisamos trabalhar com remoção de cache na página toda por tempo, e sim baseada em uma ação;
