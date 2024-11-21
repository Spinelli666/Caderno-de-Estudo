# Funções

## Sumário

1. [Introdução a funções](#introdução-a-funções)
2. [Aplicando funções básicas](#aplicando-funções-básicas)
3. [Utilizando o COUNT e SUM](#utilizando-o-count-e-sum)
4. [Agrupando os Clientes](#agrupando-os-clientes)
5. [Ordenando os Clientes](#ordenando-os-clientes)
6. [Filtrando os valores com o HAVING](#filtrando-os-valores-com-o-having)

## Introdução a funções

- [Funções de SQL](https://www.w3schools.com/sqL/sql_ref_mysql.asp)

## Aplicando funções básicas

```sql
USE sakila;

SELECT 
    MAX(amount) AS Maior,
    MIN(amount) AS Menor,
    AVG(amount) AS 'Media de Valores'
FROM payment
```

- `AVG` vai pegar a média

## Utilizando o COUNT e SUM

```sql
USE sakila;

SELECT 
    MAX(amount) AS Maior,
    MIN(amount) AS Menor,
    AVG(amount) AS 'Media de Valores',
    SUM(amount) AS 'Total de Vendas',
    COUNT(amount) AS 'Número de Vendas'
FROM payment
WHERE staff_id = 1
```

## Agrupando os Clientes

```sql
USE sakila;

SELECT 
    customer_id,
    SUM(amount) AS total

FROM payment
GROUP BY customer_id
ORDER BY total DESC
```

## Ordenando os Clientes

```sql
USE sakila;

SELECT 
    cus.customer_id AS ID,
    cus.first_name AS Nome,
    cus.last_name AS Sobrenome,
    SUM(amount) AS Total

FROM payment pay
JOIN customer cus USING(customer_id)
GROUP BY customer_id
ORDER BY Total DESC
```

- `USING()` faz com que utilizar uma referência entre as tabelas

## Filtrando os valores com o HAVING

```sql
USE sakila;

SELECT 
    cus.customer_id AS ID,
    cus.first_name AS Nome,
    cus.last_name AS Sobrenome,
    SUM(amount) AS Total,
    COUNT(amount) AS Compras
FROM payment pay
JOIN customer cus USING(customer_id)
GROUP BY customer_id
HAVING Total >= 150 AND Compras >= 35
ORDER BY Total DESC
```