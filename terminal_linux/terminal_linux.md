# Comandos do Terminal (Usados no Linux)

Esses comandos são os que usei no terminal à medida que aprendi a mexer no Linux.

## Comandos Básicos:

**Acessar o terminal commo root:**
```sh
sudo -i
```
Permite acessar o terminal com privilégios de administrador, permitindo executar comandos com permissões elevadas. Muito útil para realizar tarefas de administração do sistema que exigem acesso root.

**Exibir o diretório atual:**
```sh
pwd
```
Mostra o caminho completo do diretório de trabalho atual. É útil para verificar em qual diretório você está trabalhando no momento.

**Criar um arquivo:**
```sh
touch [name]
```
Cria um novo arquivo vazio com o nome especificado. Pode ser usado para criar rapidamente um arquivo novo.

**Remover um arquivo:**
```sh
rm [nome]
```
Remove o arquivo especificado. Use com cuidado, pois os arquivos removidos não vão para a lixeira e são deletados permanentemente.

**Criar um diretório:**
```sh
mkdir [nome]
```
Cria um novo diretório com o nome especificado. É usado para organizar arquivos em diferentes pastas.

**Remover um diretório vazio:**
```sh
rmdir [nome]
```
Remove o diretório vazio especificado. Se o diretório contiver arquivos ou outros diretórios, ele não será removido.

## Listagem de Arquivos:

**Listar arquivos e diretórios no diretório atual:**
```sh
ls
```
Exibe os arquivos e diretórios no diretório atual. É o comando mais básico para listar o conteúdo de um diretório.

**Listar arquivos com detalhes adicionais:**
```sh
ls -l
```
Mostra uma listagem detalhada de arquivos e diretórios, incluindo permissões, número de links, proprietário, grupo, tamanho e data/hora da última modificação.

**Listar arquivos com formato longo (detalhado) e incluindo ocultos:**
```sh
ll
```
É uma abreviação comum para `ls -alF`, que exibe uma listagem detalhada e inclui arquivos ocultos (aqueles cujo nome começa com um ponto).

**Listar todos os arquivos, incluindo ocultos:**
```sh
ls -a
```
Mostra todos os arquivos e diretórios, incluindo os ocultos (nomes que começam com um ponto).

**Listar arquivos recursivamente (incluindo subdiretórios):**
```sh
ls -R
```
Exibe os arquivos no diretório atual e todos os subdiretórios. Útil para ver toda a estrutura de diretórios e arquivos.

## Informações do Sistema:

**Exibir informações sobre os processos em execução:**
```sh
ps
```
Mostra uma lista dos processos em execução no sistema. Inclui informações como PID (ID do processo), TTY (terminal associado), tempo de execução e o comando que iniciou o processo.

## Visualização de Arquivos:

**Exibir as últimas linhas de um arquivo:**
```sh
tail [nome]
```
Mostra as últimas 10 linhas do arquivo especificado. Pode ser usado com a opção `-n` para especificar um número diferente de linhas.

**Exibir as primeiras linhas de um arquivo:**
```sh
head [nome]
```
Mostra as primeiras 10 linhas do arquivo especificado. Pode ser usado com a opção `-n` para especificar um número diferente de linhas.

## Localização de Arquivos:

**Localizar arquivos por nome:**
```sh
locate [nome]
```
Encontra arquivos no sistema que correspondem ao nome especificado. O comando `locate` utiliza um banco de dados atualizado periodicamente para localizar arquivos rapidamente.

**Localizar arquivos com base em atributos específicos:**
```sh
find [caminho] -name [nome]
```
Busca arquivos no diretório especificado com base no nome ou outros critérios, como tamanho, data de modificação, etc. Muito poderoso para buscas detalhadas.

**Procurar por texto dentro de arquivos:**
```sh
grep [texto] [arquivos]
```
Procura por uma string de texto específica dentro dos arquivos. Pode ser usado com várias opções para buscas mais refinadas, como busca recursiva em diretórios (-r) ou exibição do número da linha (-n).

## Comandos GZIP e GUNZIP

**Compactar um arquivo:**
```sh
gzip [nome]
```
Compacta o arquivo especificado, substituindo-o por uma versão comprimida com a extensão .gz. Economiza espaço de armazenamento.

**Compactar e redirecionar a saída para um novo arquivo:**
```sh
gzip -c [nome] > [novo_nome]
```
Compacta o arquivo e salva a saída comprimida em um novo arquivo, mantendo o arquivo original inalterado.

**Descompactar um arquivo:**
```sh
gzip -d [nome]
```
Descompacta o arquivo especificado, restaurando-o ao seu formato original.

## Comandos CAT

**Concatenar arquivos em um único arquivo:**
```sh
cat [arquivo1] [arquivo2] > [novo_arquivo]
```
Une o conteúdo de vários arquivos em um único arquivo. Pode ser usado para visualizar o conteúdo de arquivos diretamente no terminal ou para combinar arquivos.