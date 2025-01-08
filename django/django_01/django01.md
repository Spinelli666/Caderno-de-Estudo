# Django no Python - Básico

## Sumário

1. [Iniciando um projeto com django-admin startproject](#iniciando-um-projeto-com-django-admin-startproject)
2. [O que é o Django?](#o-que-é-o-django)
3. [Conheça os arquivos do Django, django-admin e manage.py](#conheça-os-arquivos-do-django-django-admin-e-managepy)
4. [Primeira URL e function based view + HttpRequest e HttpResponse + Status Codes](#primeira-url-e-function-based-view--httprequest-e-httpresponse--status-codes)
5. [Etenda os motivos de uma VIEW receber uma Request e retornar uma Response](#etenda-os-motivos-de-uma-view-receber-uma-request-e-retornar-uma-response)


## Iniciando um projeto com django-admin startproject

**Criar um ambiente virutal primeiro:**

```bash
python -m venv venv
```

**Entrar na venv:**
```bash
. venv/bin/activate
```

**Instalar django:**
```bash
pip install django
```

**Sair da venv:**
```bash
deactivate
```

**Iniciar um projeto:**
```bash
django-admin startproject (nome_do_projeto)
```

```bash
django-admin startproject (nome_do_projeto) .
```

*- A segunda linha de comando joga na raiz do projeto.*

**Rodar o projeto:**
```bash
python manage.py runserver
```

## O que é o Django?

- Django é um web framework que ajuda na facilidade da criação de um site.
- Ele é um código aberto
- Criado em 2005

## Conheça os arquivos do Django, django-admin e manage.py

- O arquivo `setting.py` é praticamente o coração da aplicação
- O arquivo da `urls.py` na pasta principal, é basicamente onde coloca os domínios e os sub-domínios

## Primeira URL e function based view + HttpRequest e HttpResponse + Status Codes

HTTP Request <-> HTTP Response
MVT (MVC) - Model View Template (Controller)

[Códigos de status de respostas HTTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)

![Foto 01](/django/img/foto1.png)

## Etenda os motivos de uma VIEW receber uma Request e retornar uma Response

- Se qusier fazer modificação da home, precisa colocar a url vazio, assim: `''`

![Foto 02](/django/img/foto2.png)