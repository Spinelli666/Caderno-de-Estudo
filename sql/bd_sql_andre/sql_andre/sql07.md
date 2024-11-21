# Views

## Sumário

1. [Criando a primeira View](#criando-a-primeira-view)
2. [Realizando o DROP ou REPLACE](#realizando-o-drop-ou-replace)

## Criando a primeira View

- Views são visualização.

![Foto 06](/sql/img/foto6.png)

```sql
USE sakila;

CREATE VIEW vendas_por_cliente AS
SELECT
    cus.customer_id,
    curs.first_name,
    cus.last_name,
    pay.amount
FROM customer cus
JOIN payment pay ON cus.customer_id = pay.payment_id
```

## Realizando o DROP ou REPLACE

```sql
USE sakila;

CREATE OR REPLACE VIEW vendas_por_cliente AS
SELECT
    cus.customer_id,
    curs.first_name,
    cus.last_name,
    pay.amount
FROM customer cus
JOIN payment pay ON cus.customer_id = pay.payment_id
ORDER BY pay.amount DESC
```