## Sumário:

1. [Passo 1: Criação do Projeto:](#passo-1-criação-do-projeto)
2. [Passo 2: Instalar o Streamlit e YFinance, e Importar as bibliotecas](#passo-2-instalar-o-streamlit-e-yfinance-e-importar-as-bibliotecas)
3. [Passo 3: Criar as funções de carregamento de dados](#passo-3-criar-as-funções-de-carregamento-de-dadoso)
4. [Passo 4: Preparar a visualização](#passo-4-preparar-a-viasualização)
5. [Passo 5: Criar a interface do streamlit](#passo-5-criar-a-interface-do-streamlit)
6. [Passo 6: Fazer o aplicativo rodar](#passo-6-fazer-o-aplicativo-rodar)

### Passo 1: Criação do Projeto

A primeira coisa que sempre precisa ser feita é criar um projeto, então para isso comecei criando uma `venv`.

Para criar uma `venv`é bem simples.

- **Passo 1.1:** Abra o Terminal e digite o comando abaixo:

```sh
python -m venv (nomedavenv)
```

- **Passo 1.2:** Digite o caminho da sua venv:

Caso você esteja fazendo no Windows:

```
.\(nomedavenv\Scripts\Activate.bat)
```

Caso você esteja fazendo no Linux:

```sh
source (nomedavenv)/bin/activate
```

- **Passo 1.3:** Para instalar as dependências que faltam do projeto, só digitar o seguinte comando no Terminal (Eu não usei esse comando no projeto):

```
pip install -r requirements.txt
```

- **Desativar a `venv`:** (Caso queira)

```
deactivate
```
<br>

[Voltar ao Topo](#sumário)

### Passo 2: Instalar o Streamlit e YFinance, e Importar as bibliotecas

Depois que ativar a `venv` e entrar nelas, cria um arquivo chamado `main.py` e instalar o Streamlit e YFinance com os seguintes comandos.

```sh
pip install streamlit
```
*Observação: Ao instalar o Streamlit, já vem o `pandas` junto.*

```sh
pip install yfinance
```

Depois que instalar tudo, só importar elas para seu arquivo `main.py`.


```py
import streamlit as st
import pandas as pd
import yfinance as yf
```

#### Bibliotecas Utilizadas

1. **Streamlit (`streamlit`)**: Biblioteca de código aberto em Python para criação rápida de aplicativos web interativos, ideal para dashboards e visualizações de dados.

2. **Pandas (`pandas`)**: Biblioteca poderosa para análise e manipulação de dados em Python, oferecendo estruturas como `DataFrame` e `Series` para trabalhar com dados tabulares de forma eficiente.

3. **Yahoo Finance (`yfinance`)**: Biblioteca que permite acessar dados financeiros históricos e atuais diretamente do Yahoo Finance, útil para análises financeiras e monitoramento de mercado.

<br>

[Voltar ao Topo](#sumário)

### Passo 3: Criar as funções de carregamento de dados

Nessa aula eu usei as cotações do Itaú (ITUB4) de 2010 até 2024.

```py
@st.cache_data
def carregar_dados(empresa):
    dados_acao = yf.Ticker(empresa)
    cotacoes_acao = dados_acao.history(period="1d", start="2010-01-01", end="2024-12-31")
    cotacoes_acao = cotacoes_acao[["Close"]]

    return cotacoes_acao
```

- `@st.cache_data`: Um decorator do Streamlit que atribui uma funcionalidade de cache à função logo abaixo dele. Isso significa que os dados carregados pela função serão armazenados em cache para evitar recarregamentos desnecessários, melhorando a performance do aplicativo.

- `carregar_dados(empresa)`: Função que carrega os dados históricos de preços de uma ação específica. Ela utiliza a biblioteca yfinance para obter as cotações diárias de fechamento da ação (Close) no período de 01/01/2010 a 31/12/2024.

- `yf.Ticker(empresa)`: Instância um objeto Ticker da biblioteca yfinance para a empresa especificada.

- `dados_acao.history(...)`: Obtém o histórico de preços da ação no período especificado.

- `cotacoes_acao[["Close"]]`: Filtra os dados retornados para manter apenas a coluna de preços de fechamento.

- `return cotacoes_acao`: Retorna o DataFrame com as cotações de fechamento.

<br>

[Voltar ao Topo](#sumário)

### Passo 4: Preparar a viasualização

```py
dados = carregar_dados("ITUB4.SA")
```

 Chama a função carregar_dados para obter os dados históricos de preços de fechamento das ações do Itaú Unibanco, identificadas pelo ticker "ITUB4.SA".

 *Observação: Se você não colocar o `.SA` no final, ele vai pegar os dados da cotação internacional, então o `.SA` significa que ele vai pegar só daqui do BRasil, da Bolsa de São Paulo.*

<br>

[Voltar ao Topo](#sumário)

### Passo 5: Criar a interface do streamlit

```py
st.write("""
# App Preço de Ações
O gráfico abaixo representa a evolução do preço das ações do Itaú (ITUB4) ao longo dos anos
""") # Formato markdown

# Criar o Gráfico
st.line_chart(dados)

st.write("""
# Fim do app
""")
```

- `st.write(...)`: Escreve texto formatado no aplicativo. Neste caso, é utilizado para apresentar o título do aplicativo e uma breve descrição sobre o gráfico exibido.

- `st.line_chart(dados)`: Exibe um gráfico de linha representando a evolução do preço das ações ao longo do tempo, utilizando os dados retornados pela função carregar_dados.

- `st.write("# Fim do app")`: Adiciona um título indicando o fim do aplicativo.

<br>

[Voltar ao Topo](#sumário)

### Passo 6: Fazer o aplicativo rodar

Essa parte é bem simples, dentro do terminal (ainda dentro da `venv`), só digitar:

```sh
streamlit run main.py
```

### Código Completo:

```py
# Passo1: Importar as bibliotecas

import streamlit as st
import pandas as pd
import yfinance as yf

# Passo 2: Criar as funções de carregamento de dados
    # Cotações do Itau - ITUB4 - 2010 a 2024

@st.cache_data # Uma função do python que atribui uma funcionalidade para função logo embaixo dele
def carregar_dados(empresa):
    dados_acao = yf.Ticker(empresa)
    cotacoes_acao = dados_acao.history(period="1d", start="2010-01-01", end="2024-12-31")
    cotacoes_acao = cotacoes_acao[["Close"]]

    return cotacoes_acao

# Passo 3: Preparar as visualizações

dados = carregar_dados("ITUB4.SA")

# Passo 4: Criar a interface do streamlit

st.write("""
# App Preço de Ações
O gráfico abaixo representa a evolução do preço das ações do Itaú (ITUB4) ao longo dos anos
""") # Formato markdown

# Criar o Gráfico
st.line_chart(dados)

st.write("""
# Fim do app
""")
```

<br>


[Voltar ao Topo](#sumário)