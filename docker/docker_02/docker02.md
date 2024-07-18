## Seção 4: Criando Imagens Docker

### Aula 35: O que são Imagens e Containers

Docker Images:

- Image: 
  - É uma CUT-DOWN OS
  - Libraries
  - Arquivos da Aplicação
  - Variáveis de Ambiente

  Uma image contém tudo que é necessário para a sua aplicação funcionar.

- Container:
  - VM (Isolado)
  - Start/Stop
  - Considerado como um Processo

  Passo 1: Primeiro cria uma aplicação
  Passo 2: Você converte ela para uma imagem, por meio do arquivo Dockerfile
  Passo 3: Você cria um Container, que é criado a partir da imagem, onde ele roda a aplicação que está dentro.

### Aula 37: Instruções no Dockerfile

Primeira coisa que precisa especificar dentro do arquivo Dockerfile é o **FROM**

Logo depois tem o **WORKDIR**, que é como se ele dissesse que vai trablhar tudo dentro da pasta ou diretório selecionado

Temos o **COPY** / **ADD**, esses dois servem para copiar ou adicionar todos os arquivos que fazem parte da minha aplicação para dentro da imagem.

Temos o **RUN**, serve para colocar a aplicação em funcionamento

Temos o **ENV**, environment, são as configuração do ambiente

Temos o **EXPOSE**, é o responsável para colocar o número da porta.

Temos o **USER**, o usuário que irá executar a aplicação

Temos o **CMD** / **ENTRYPOINT**, serve para rodar alguns comandos, caso precise.

### Aula 38: Escolhendo a imagem

**Comando usados na aula:**

```sh
docker build -t [nome_da_imagem] .
```

O comando de cima irá construir a imagem.

```sh
docker images
```

O comando de cima irá mostrar as imagens construídas

```sh
docker run -it [nome_da_imagem] sh
```
O comando de cima irá criar um container a partir dessa imagem

### Aula 39: Copiando arquivos na imagems

**COPY** x **ADD**

- Se for uma cópia simples, utilizar o COPY
- Se for uma cópia de um website ou arquivo zip, utilizar o ADD

### Aula 40: Utilizando o RUN

Ele serve para instalar as depedências da aplicação e utiliza para rodar os programas no terminal

### Aula 41: Configurando Variáveis

o comando **ENV** define variáveis de ambiente que são usadas tanto durante a construção da imagem quanto na execução do contêiner. Essas variáveis ajudam a configurar parâmetros, caminhos, e outras informações necessárias para o funcionamento da aplicação.

### Aula 43: Utilizando o CMD

O comando CMD em um Dockerfile especifica o comando padrão que será executado quando um contêiner é iniciado a partir da imagem.

RUN x CMD

- Utlizar o RUN quando está criando a imagem
- Utliza o CMD depois que você cria a aimagem e está executando a sua aplicação

### Aulda 44: Adicionando um usuário na imagem

```docker
RUN addgroup dev && adduser -S -G andre dev
```
- Colocar sempre no início, depois do WORKDIR.
- O comando fala que está add um grupo e depois add o usuario andre no grupo dev
- `-S` é uma opção do comando adduser que cria um novo usuário do sistema. Um usuário do sistema geralmente tem um UID (User ID) abaixo de um determinado valor (como 1000) e é usado para executar serviços ou daemons em vez de para login interativo.
- `-G` é uma opção do comando adduser que especifica o grupo primário ao qual o novo usuário será adicionado. No caso deste comando, `andre` será adicionado ao grupo `dev`.

```docker
USER andre
```

- Está falando para utilizar o usuário andre

### Aula 45: Rodando a sua aplicação

```sh
docker run -dp 3000:3000 app
```
- Utilizou esse comando para rodar na porta indicada

### Aula 47: Adicionando tags as imagens

```sh
docker image remove app:v1.0.0
```
- Usou esse comando para remover uma imagem

```sh
docker image tag app:latest app:v1.0.0
```
- Usou esse comando para renomear uma tag

```sh
docker build -t app:v1.0.1 .
```
- Usou paara criar a imagem com a tag editada

## Seção 5: Containers

### Aula 51: Nomeando containers

```sh
docker run -d [nome_da_imagem]
```
- Usado para rodar o container em background

```sh
docker run -d --name [nome_do_container] [nome_da_imagem]
```
- Usado para colocar um nome no container que quer rodar

### Aula 52: Verificando o log de eventos

```sh
docker logs --help
```
- Para ver os comandos que pode fazer com os logs

```sh
docker logs [OPTION] CONTAINER
```

### Aula 53: Publicando portas de acesso

```sh
docker run -dp host:docker --name [nome] [imagem]
```
- O primeiro número da porta é de host e o segundo é do docker

### Aula 54: Executando comandos em containers

```sh
docker exec [CONTAINER] [COMANDO]
```

### Aula 55: Iniciando e parando containers

```sh
docker stop [CONTAINER]
```
- Parando um container

```sh
docker start [CONTAINER]
```
- Iniciar um container

### Aula 56: Removendo containers

```sh
docker rm --help
```

- Para ver os comandos que pode fazer com os rm

### Aula 57: Volumes persistentes

```sh
docker volume create [NOME_VOLUME]
```
- Criar o nome do volume

```sh
docker volume inspect [NOME_VOLUME]
```
- Inspecionar o volume

```sh
docker run -dp 3000:3000 --name kiwi -v app-dados:/app/dados app:v2
```
- `v`: Adicionando o volume
- `/app/dados`: No caso esse é o diretório que foi adicionado