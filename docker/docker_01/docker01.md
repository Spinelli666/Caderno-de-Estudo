# Docker

Docker é uma plataforma para construir, rodar e transferir aplicações do seu ambiente de teste ou de desenvolvimento para o ambiente em produção.

1. **Contêineres**: Contêineres são pacotes leves e portáteis que incluem tudo o que uma aplicação precisa para rodar, como código, runtime, bibliotecas e dependências do sistema. Isso garante que a aplicação funcione de maneira consistente em diferentes ambientes.

2. **Imagens Docker:** Uma imagem Docker é um modelo imutável de um contêiner que contém o sistema operacional, a aplicação e todas as suas dependências. Imagens são a base a partir da qual os contêineres são instanciados.

3. **Docker Engine:** O Docker Engine é o runtime que permite a execução de contêineres. Ele gerencia a criação, execução e monitoramento dos contêineres.

4. **Docker Hub:** É um registro público onde os usuários podem compartilhar e distribuir imagens Docker. Ele fornece uma vasta biblioteca de imagens prontas para uso, que podem ser baixadas e usadas como base para suas próprias aplicações.

5. **Docker Compose:** Uma ferramenta que permite definir e gerenciar multi-contêineres Docker. Utiliza um arquivo YAML para configurar os serviços, redes e volumes necessários para uma aplicação completa.

6. **Isolamento e Segurança:** Os contêineres Docker fornecem isolamento entre aplicações, garantindo que as dependências de uma aplicação não interfiram com as de outra. Isso também contribui para a segurança, pois cada contêiner opera em seu próprio ambiente isolado.

7. **Portabilidade:** Como os contêineres Docker incluem tudo o que uma aplicação precisa para rodar, eles podem ser facilmente movidos entre diferentes ambientes (como desenvolvimento, teste e produção) sem que haja problemas de compatibilidade.

8. **Desempenho:** Contêineres são mais leves e iniciam mais rapidamente do que máquinas virtuais (VMs) porque compartilham o kernel do sistema operacional host em vez de precisar de um sistema operacional completo para cada instância.

9. **Docker Machine:** Docker Machine é uma ferramenta que permite instalar o Docker Engine em máquinas virtuais. Ele pode criar e configurar máquinas locais ou na nuvem, e depois instalar o Docker nelas. Isso é útil para configurar ambientes de desenvolvimento, teste ou produção de forma automática e consistente.

## Diferença entre VMs e Containers

A diferença entre máquinas virtuais (VMs) e containers reside principalmente na forma como eles compartilham recursos do sistema operacional e no seu isolamento. Aqui estão os principais pontos de distinção:

### 1. Estrutura e Arquitetura
#### Máquinas Virtuais (VMs)
- **Hypervisor**: As VMs são gerenciadas por um hypervisor que permite a execução de múltiplos sistemas operacionais isolados em um único hardware físico.
- **Sistema Operacional Completo**: Cada VM possui seu próprio sistema operacional completo, incluindo um kernel.
- **Isolamento**: Proporcionam um isolamento robusto, com cada VM funcionando como um sistema separado e independente.
- **Recursos**: VMs são geralmente mais pesadas em termos de consumo de recursos (CPU, memória e armazenamento) porque cada uma precisa de um sistema operacional completo e emulação de hardware.

#### Containers
- **Kernel Compartilhado**: Containers compartilham o kernel do sistema operacional do host, mas possuem seu próprio espaço de usuário.
- **Leveza**: São mais leves, pois não requerem um sistema operacional completo, apenas bibliotecas e dependências necessárias para executar a aplicação.
- **Isolamento**: Proporcionam um isolamento de processo e rede, mas compartilham o mesmo kernel, o que pode introduzir algumas vulnerabilidades de segurança em comparação com VMs.
- **Recursos**: Containers são mais eficientes em termos de recursos, permitindo maior densidade de aplicações no mesmo hardware.

### 2. Tempo de Inicialização
- **VMs**: O tempo de inicialização é mais longo porque envolve o boot de um sistema operacional completo.
- **Containers**: Containers iniciam quase instantaneamente, pois só precisam iniciar os processos da aplicação.

### 3. Portabilidade
- **VMs**: Podem ser movidas entre diferentes ambientes, mas isso pode ser complexo devido às diferenças de hypervisores e hardware.
- **Containers**: São altamente portáveis. Podem ser executados em qualquer ambiente que suporte o container runtime (por exemplo, Docker), tornando a migração e a escalabilidade mais fáceis.

### 4. Uso de Recursos
- **VMs**: Geralmente requerem mais recursos do sistema, pois cada VM necessita de seu próprio sistema operacional.
- **Containers**: Utilizam recursos mais eficientemente, permitindo a execução de mais aplicações no mesmo hardware.

### 5. Gerenciamento
- **VMs**: O gerenciamento de VMs é mais complexo devido à necessidade de gerenciar múltiplos sistemas operacionais e configurações de hardware virtual.
- **Containers**: O gerenciamento é mais simples, especialmente com ferramentas como Docker e Kubernetes que facilitam a orquestração e a automação de deployment.

### 6. Casos de Uso
- **VMs**: Ideal para executar múltiplos sistemas operacionais, simulação de ambientes de hardware e aplicações que requerem um isolamento robusto.
- **Containers**: Ideal para desenvolvimento ágil, microsserviços, aplicações em nuvem e ambientes que exigem rápida escalabilidade e implantação.

### Resumo

| Característica         | Máquinas Virtuais (VMs)              | Containers                                 |
|------------------------|--------------------------------------|--------------------------------------------|
| Estrutura              | Hypervisor, sistema operacional completo | Kernel compartilhado, leve                 |
| Tempo de Inicialização | Mais longo                           | Quase instantâneo                          |
| Portabilidade          | Menos portátil                       | Altamente portátil                         |
| Uso de Recursos        | Mais recursos necessários            | Mais eficiente em recursos                 |
| Gerenciamento          | Mais complexo                        | Mais simples com ferramentas de orquestração |
| Casos de Uso           | Isolamento robusto, múltiplos SOs    | Desenvolvimento ágil, microsserviços, nuvem |

---

## Explicação de Comandos

```sh
sudo docker container run alpine echo "Hello World"
```

O comando `sudo docker container run alpine echo "Hello World"` é usado para criar e executar um container Docker que executa um comando simples. Vamos analisar cada parte deste comando:

1. **`sudo`**: Este comando é usado para executar o comando subsequente com privilégios de superusuário (root). Isso é necessário porque operações do Docker geralmente requerem permissões administrativas para acessar o Docker daemon.

2. **`docker`**: Este é o comando principal do Docker. Ele é usado para interagir com o Docker daemon para gerenciar containers, imagens, volumes, redes, etc.

3. **`container`**: Este subcomando especifica que você está realizando uma operação relacionada a containers.

4. **`run`**: Este subcomando especifica que você deseja criar e executar um novo container.

5. **`alpine`**: Esta é a imagem que você está usando para criar o container. `alpine` refere-se à Alpine Linux, uma distribuição Linux muito leve e popular para containers devido ao seu pequeno tamanho.

6. **`echo "Hello World"`**: Este é o comando que será executado dentro do container. No caso, ele simplesmente imprime "Hello World" na saída padrão.

### O que o comando faz?

Quando você coloca tudo junto, `sudo docker container run alpine echo "Hello World"` faz o seguinte:

1. O `sudo` eleva o comando `docker` para ser executado com privilégios de superusuário.
2. O `docker` cria um novo container baseado na imagem `alpine`.
3. Dentro desse container, o Docker executa o comando `echo "Hello World"`.
4. O container é então iniciado, o comando `echo "Hello World"` é executado, imprimindo "Hello World" no terminal, e o container é finalizado logo após a execução do comando.

Este comando é um exemplo básico de como usar o Docker para executar um comando simples dentro de um container. É útil para testar e demonstrar como os containers Docker funcionam.

---

```sh
docker container ls -l
```

### O que o comando faz?

**Função:**
- Lista os contêineres Docker.

**Detalhamento:**
- `docker`: Chama o Docker.
- `container`: Especifica que estamos trabalhando com contêineres.
- `ls`: Lista os contêineres.
- `-l`: Mostra apenas o contêiner mais recentemente criado (ou atualizado).

**Resumo:**
O comando `docker container ls -l` é usado para mostrar uma lista dos contêineres Docker, mas com a opção `-l`, ele filtra a lista para exibir apenas o contêiner mais recente.

---

```sh
docker rm -f
```

**Função:**
- Força a remoção de um ou mais contêineres Docker, mesmo que estejam em execução.

**Detalhamento:**
- `docker`: Chama o Docker.
- `rm`: Remove contêineres.
- `-f`: Força a remoção, parando os contêineres que estejam em execução.

**Sintaxe:**
```sh
docker rm -f <nome_do_container_ou_ID>
```

---

```sh
docker container ls -a
```

**Função:**
- Lista todos os contêineres Docker no sistema, incluindo aqueles que estão parados.

**Detalhamento:**
- `docker`: Chama o Docker.
- `container`: Especifica que estamos trabalhando com contêineres.
- `ls`: Lista os contêineres.
- `-a`: Mostra todos os contêineres, incluindo os que estão parados.

**Resumo:**
O comando `docker container ls -a` é usado para exibir uma lista completa de todos os contêineres Docker no sistema, não apenas aqueles que estão em execução, mas também os que estão parados.

---

```sh
docker container stop <nome_do_container_ou_ID>
```

**Função:**
- Para um ou mais contêineres Docker em execução.

**Detalhamento:**
- `docker`: Chama o Docker.
- `container`: Especifica que estamos trabalhando com contêineres.
- `stop`: Para os contêineres.

---

```sh
docker container inspect <nome_do_container_ou_ID>
```

**Função:**
- Obtém informações detalhadas sobre um contêiner Docker específico.

**Detalhamento:**
- `docker`: Chama o Docker.
- `container`: Especifica que estamos trabalhando com contêineres.
- `inspect`: Solicita informações detalhadas sobre o contêiner.
- `<nome_do_container_ou_ID`: O nome ou ID do contêiner que você deseja inspecionar.

**O Que É Retornado:**
- **Configuração**: Dados sobre a configuração do contêiner, incluindo a imagem usada, comandos de inicialização, variáveis de ambiente, etc.
- **Estado**: Informações sobre o estado atual do contêiner, como se está em execução, pausado, parado, etc.
- **Rede**: Dados sobre as interfaces de rede do contêiner, incluindo endereços IP, portas expostas, etc.
- **Montagens de Volume**: Informações sobre volumes montados no contêiner.
- **Outros Metadados**: Dados adicionais como o ID do contêiner, nome, tempo de criação, etc.

**Resumo:**
O comando `docker container <nome_do_container_ou_ID` é usado para obter uma visão detalhada e abrangente de todas as configurações e estado atual de um contêiner Docker específico, identificado aqui pelo nome `<nome_do_container_ou_ID`.

---

```sh
docker container logs <nome_do_container>
```

**Função:**
- Visualiza os logs gerados por um contêiner Docker específico.

**Detalhamento:**
- `docker`: Chama o Docker.
- `container`: Especifica que estamos trabalhando com contêineres.
- `logs`: Solicita a exibição dos logs do contêiner.
- `<nome_do_container>`: O nome ou ID do contêiner cujos logs você deseja visualizar.

**Uso:**
- Verificar a saída e os erros gerados por processos dentro do contêiner.
- Depurar problemas que ocorrem dentro do contêiner.
- Monitorar a atividade do contêiner em tempo real.

**Exemplos de Uso:**

1. **Visualizar os logs de um contêiner chamado `my_container`:**
   ```sh
   docker container logs my_container
   ```

2. **Vizualizar os logs em tempo real (modo "follow"):**
    ```sh
    docher container logs -f <nome_do_container>
    ```
3. **Exibir um número específico de linhas do final dos logs:**
    ```sh
    docker container logs --tail 10 my_container
    ```
    *Obs: No caso o exemplo aqui é 10.*

---

```sh
docker volume create <nome>
```

**Função:**
- Cria um novo volume no Docker com o nome especificado por `<nome>`.

**Detalhamento:**
- `docker volume create <nome>`: Comando usado para criar um novo volume Docker.
  - `<nome>`: O nome que você deseja atribuir ao volume criado.

**Uso e Propósito:**
- **Persistência de Dados**: Armazenamento de dados que precisam sobreviver além do ciclo de vida de um contêiner.
- **Compartilhamento de Dados**: Capacidade de ser montado em múltiplos contêineres para compartilhar dados.
- **Backup e Restauração**: Facilita operações de backup e restauração de dados persistentes.

---

```sh
docker volume inspect <nome>
```

**Função:**
- Obtém informações detalhadas sobre um volume Docker específico identificado por `<nome>`.

**Detalhamento:**
- `docker volume inspect <nome>`: Comando usado para consultar informações detalhadas de um volume Docker.
  - `<nome>`: O nome do volume cujas informações você deseja obter.

**Uso e Propósito:**
- **Consulta de Configuração**: Verificar nome, driver de armazenamento e opções configuradas para o volume.
- **Depuração e Monitoramento**: Útil para diagnóstico de problemas e verificação de propriedades do volume.
- **Integração com Ferramentas**: Pode ser utilizado em scripts ou ferramentas de automação para gerenciar volumes Docker.

---

```sh
docker image prune -f
```

**Função:**
- Remove imagens Docker não utilizadas de forma forçada e automática.

**Detalhamento:**
- `docker image prune`: Comando usado para limpar imagens Docker não utilizadas.
  - `-f` ou `--force`: Opção que força a remoção das imagens sem solicitar confirmação interativa.

**Uso e Propósito:**
- **Limpeza de Espaço em Disco**: Remove imagens que não estão associadas a nenhum contêiner em execução, liberando espaço em disco.
- **Manutenção e Otimização**: Mantém o ambiente Docker limpo e otimizado, removendo imagens que não são mais necessárias.

---

```sh
docker volume prune
```

**Função:**
- Remove volumes Docker que não estão sendo usados por nenhum contêiner em execução.

**Detalhamento:**
- `docker volume prune`: Comando usado para limpar volumes Docker não utilizados.
  - Remove volumes "dangling" que não estão associados a nenhum contêiner ativo.

**Uso e Propósito:**
- **Limpeza de Recursos**: Remove volumes não utilizados para liberar espaço de armazenamento.
- **Otimização de Recursos**: Mantém o ambiente Docker limpo e eficiente.

---

```sh
docker images
```

**Função:**
- Lista todas as imagens Docker disponíveis no sistema.

**Detalhamento:**
- `docke`: Chama o Docker.
- `images`: Lista todas as imagens Docker disponíveis.

**Resumo:**
- O comando docker images é usado para exibir uma lista de todas as imagens Docker que estão armazenadas localmente no sistema.