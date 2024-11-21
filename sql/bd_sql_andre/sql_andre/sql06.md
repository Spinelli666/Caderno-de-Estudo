# SubQueries

## Sumário

1. [Criando uma Subquery](#criando-uma-subquery)
2. [Trabalhando com o MAX em SubQueries](#trabalhando-com-o-max-em-subqueries)
3. [Utilizando o IN](#utilizando-o-in)
4. [Utilizando o ANY](#utilizando-o-any)

## Criando uma Subquery

```sql
USE sakila;

SELECT * FROM payment
WHERE amount > (
    SELECT AVG(amount) FROM payment
)
```

![Foto 05](/sql/img/foto5.png)

## Trabalhando com o MAX em SubQueries

```sql
USE sakila;

SELECT * FROM payment
WHERE amount = (
    SELECT MAX(amount) FROM payment
    WHERE customer_id = 1
)
``` 

## Utilizando o IN

```sql
USE sakila;

SELECT * FROM customer
WHERE customer_id IN (
    SELECT customer_id FROM payment
    GROUP BY customer_id
    HAVING COUNT(*) > 35
)
```

## Utilizando o ANY

```sql
USE sakila;

SELECT * FROM customer
WHERE customer_id = ANY (
    SELECT customer_id FROM payment
    GROUP BY customer_id
    HAVING COUNT(*) > 35
)
```