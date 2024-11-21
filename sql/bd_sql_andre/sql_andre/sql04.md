# Manipulando Dados

## Sumário

1. [Adicionando uma linha a tabela](#adicionando-uma-linha-a-tabela)
2. [Adicionando multiplas linhas](#adicionando-multiplas-linhas)
3. [Inserindo em multiplas tabelas](#inserindo-em-multiplas-tabelas)
4. [Copiar uma Tabela completa](#copiar-uma-tabela-completa)
5. [Atualizando um valor](#atualizando-um-valor)
6. [Deletando um valor](#deletando-um-valor)

## Adicionando uma linha a tabela

```sql
USE sakila;

INSERT INTO language
VALUES (DEFAULT, 'Portuguese', '2008-02-10 05:02:19')
```

- `INSERT INTO language` (Inserindo na tabela language)

## Adicionando multiplas linhas

```sql
USE sakila;

INSERT INTO language
VALUES 
    (DEFAULT, 'Portuguese', '2008-02-10 05:02:19'),
    (DEFAULT, 'Spanish', '2009-02-10 05:02:19'),
    (DEFAULT, 'Polish', '2010-02-10 05:02:19')
```
## Inserindo em multiplas tabelas

```sql
USE sakila;

INSERT INTO country
VALUES
    (DEFAULT, 'Brasil2', '2035-02-15 04:44:00')

INSERT INTO city
VALUES
    (DEFAULT, 'Sao Paulo2', last_insert_id(), '2034-02-15 04:44:00')
```
- `last_insert_id()` vai procurar na tabela o último ID inserido

## Copiar uma Tabela completa

```sql
USE sakila;

CREATE TABLE payment_backup AS
SELECT * FROM payment
```

- Vai pegar todas as colunas de `payment` e passar pro `payment_backup`, que foi a tabela criada.

## Atualizando um valor

```sql
USE sakila;

UPDATE payment
SET
    amount = 15.99
WHERE payment_id = 1
```

- Vai atualizar o valor do `amount` na linha que tem o ID 1

## Deletando um valor

```sql
USE sakila;

DELETE FROM payment
WHERE payment_id = 16049
```

- Está deletando na tabela payment o ID 16049