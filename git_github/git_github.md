# Git e GitHub

## Comandos do Git

**Ver o commit mais recente:**
```sh
git log -1
```
Exibe o log de commits, mostrando apenas o commit mais recente. Inclui informações como o autor, a data, a mensagem do commit e o hash do commit.

**Mostrar o status do arquivo:**
```sh
git status
```
Mostra o estado atual do diretório de trabalho e da área de stage. Exibe quais mudanças foram registradas, quais não foram e quais arquivos não estão sendo rastreados pelo Git.

**Exibir o conteúdo do commit mais recente de uma forma legível:**
```sh
git cat-file -p HEAD
```
O comando git `cat-file -p HEAD` exibe o conteúdo do commit mais recente de uma forma legível para humanos.

Aqui está uma explicação detalhada dos componentes do comando:

    git: Chama o sistema de controle de versão Git.
    cat-file: Comando do Git que fornece informações sobre os objetos armazenados no repositório. Pode ser usado para examinar objetos como blobs, trees, commits, etc.
    -p: Opção que significa "pretty-print" ou "impressão bonita". Formata o conteúdo do objeto de uma forma legível.
    HEAD: Ponteiro que aponta para o commit mais recente na branch atual.

Quando você executa `git cat-file -p HEAD`, o Git exibe o conteúdo do commit mais recente, incluindo informações como:

    O tree associado ao commit, que representa o estado do diretório do projeto nesse ponto.
    O(s) commit(s) pai(s) (se houver), que são os commits anteriores no histórico.
    O autor do commit e o timestamp (data e hora) em que o commit foi feito.
    A mensagem de commit, que descreve as mudanças feitas.

**Adicionar arquivos ao stage:**
```sh
git add [arquivo]
```
Adiciona o arquivo especificado à área de stage, preparando-o para ser incluído no próximo commit. Pode ser usado com `.` para adicionar todos os arquivos modificados.

**Fazer commit das mudanças:**
```sh
git commit -m "[mensagem]"
```
Registra as mudanças adicionadas à área de stage em um novo commit. A opção `-m` permite adicionar uma mensagem descritiva ao commit.

**Enviar commits para o repositório remoto:**
```sh
git push
```
Envia os commits locais para o repositório remoto, atualizando a branch remota com as mudanças feitas localmente.

**Atualizar o repositório local com as mudanças do repositório remoto:**
```sh
git pull
```
Baixa as mudanças do repositório remoto e as integra ao repositório local, mantendo-o atualizado com a versão mais recente.

**Criar uma nova branch:**
```sh
git checkout -b [nome-da-branch]
```
Cria uma nova branch com o nome especificado e muda para essa branch.

**Mudar para uma branch existente:**
```sh
git checkout [nome-da-branch]
```
Muda para a branch especificada.

**Mesclar uma branch com a branch atual:**
```sh
git merge [nome-da-branch]
```
Mescla a branch especificada com a branch atual, integrando as mudanças de ambas as branches.

**Ver o histórico de commits:**
```sh
git log
```
Exibe o histórico de commits, mostrando todos os commits feitos no repositório em ordem cronológica inversa.

**Reverter um commit:**
```sh
git revert [hash-do-commit]
```
Cria um novo commit que desfaz as mudanças introduzidas pelo commit especificado.

## Comandos do GitHub

**Clonar um repositório do GitHub:**
```sh
git clone [url]
```
Cria uma cópia local de um repositório remoto hospedado no GitHub. A URL pode ser obtida na página do repositório no GitHub.

**Adicionar um repositório remoto:**
```sh
git remote add origin [url]
```
Associa o repositório local a um repositório remoto no GitHub, permitindo que você envie e receba mudanças. A URL pode ser obtida na página do repositório no GitHub.

**Listar repositórios remotos:**
```sh
git remote -v
```
Exibe uma lista dos repositórios remotos associados ao repositório local, mostrando as URLs para fetch e push.

**Remover um repositório remoto:**
```sh
git remote remove [nome]
```
Remove a associação com um repositório remoto especificado pelo nome.

**Criar um novo repositório no GitHub usando a linha de comando:**
```sh
gh repo create [nome]
```
Cria um novo repositório no GitHub. Requer que a GitHub CLI esteja instalada e autenticada.