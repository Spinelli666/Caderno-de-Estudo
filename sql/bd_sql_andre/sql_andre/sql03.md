# JOIN

## Sumário

1. [Utilizando o Inner Join](#utilizando-o-inner-join)
2. [Filtrando com o Join](#filtrando-com-o-join)
3. [Adicionando um Alias](#adicionando-um-alias)
4. [Multiplas Tabelas](#multiplas-tabelas)

## Utilizando o Inner Join

- O `JOIN` vai colocar informações de duas tabelas em uma tela.

```sql
USE sakila;

SELECT * FROM customer
JOIN payment ON customer.customer_id = payment.payment_id
```

- O `ON` vai dizer qual é o critério, no caso ali ele está dizendo que o customer_id será igual ao payment_id

![Foto 03](/sql/img/foto3.png)

## Filtrando com o Join

```sql
USE sakila;

SELECT 
    customer.customer_id, 
    customer.first_name, 
    customer.last_name,
    payment.rental_id,
    payment.amount
FROM customer
JOIN payment ON customer.customer_id = payment.payment_id
```

![Foto 04](/sql/img/foto4.png)

## Adicionando um Alias

- Adiciona uma apelido (uma abreviação)

```sql
USE sakila;

SELECT 
    cus.customer_id, 
    cus.first_name, 
    cus.last_name,
    pay.rental_id,
    pay.amount
FROM customer cus
JOIN payment pay ON cus.customer_id = pay.payment_id
```

## Multiplas Tabelas

```sql
USE sakila;

SELECT 
    cus.customer_id, 
    cus.first_name, 
    cus.last_name,
    adr.address,
    pay.rental_id,
    pay.amount
FROM customer cus
JOIN payment pay 
    ON cus.customer_id = pay.payment_id
JOIN address adr 
    ON cus.customer_id = adr.address_id
```