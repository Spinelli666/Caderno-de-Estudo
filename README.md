# Caderno-de-Estudo
Um caderno de estudo que eu fiz para me auxiliar quand oestiver na dúvida ou esquecer de algum assunto.

COMANDOS TERMINAL LINUX

sudo -i - entra pelo root

pwd - Saber o diretório que se encontra
touch [nome] - Criar um arquivo
rm [nome] - Remover arquivo
mkdir [nome] - Criar diretórios
rmdir [nome] - Remover diretório
ls / ls -l - Ver os arquivos atuais e ver o que tem
ls -a - Ver os arquivos ocultos
ls - R - mostra o diretório atual além de todos os subdiretórios
ll - VEr arquivos

ps - exibir informações sobre os processos em execução no sistema
tail - lista as últimas linhas de arquivo
head- lista as primeiras linhas do arquivo

locate - comando para localizar (localizar comandos por nome)
find - comando para localizar (localizar arquivoz com base em um ou vários outros atributos diferentes)
grep - comando para localizar (localizar arquivos de texto)
--------
TRABALHANDO COM O COMANDO GZIP E GUNZIP

gzip [nome] - compactar o arquivo
gzip -c [nome] > [criar nome] - para contatenar arquivo
gzip -d [nome] OU gzip [nome] - descompactar arquivo
cat [nome] > [nome] - contatenar para um único arquivo
-------
GIT

git log -1 - Ver o commit mais recente
git status - mostra o status do arquivo

git cat-file -p HEADE:

O comando git cat-file -p HEAD é utilizado no Git para exibir o conteúdo de um objeto especificado de uma maneira que é fácil de ler para humanos. No caso do comando git cat-file -p HEAD, ele está especificamente mostrando o conteúdo do commit mais recente (referido por HEAD) no formato legível.

Aqui está uma explicação detalhada dos componentes do comando:

    git: Chama o sistema de controle de versão Git.
    cat-file: É um comando do Git que fornece informações sobre os objetos armazenados no repositório. O comando cat-file pode ser usado para examinar objetos como blobs, trees, commits, etc.
    -p: É uma opção que significa "pretty-print" ou "impressão bonita". Quando usada com cat-file, ela formata o conteúdo do objeto de uma forma legível.
    HEAD: É um ponteiro que aponta para o commit mais recente na branch atual.

Quando você executa git cat-file -p HEAD, o Git exibe o conteúdo do commit mais recente, incluindo informações como:

    O tree associado ao commit, que representa o estado do diretório do projeto nesse ponto.
    O(s) commit(s) pai(s) (se houver), que são os commits anteriores no histórico.
    O autor do commit e o timestamp (data e hora) em que o commit foi feito.
    A mensagem de commit, que descreve as mudanças feitas.


blob - Arquivos binários grandes
tree - Árvore
-----------------