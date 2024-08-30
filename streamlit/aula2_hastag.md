## Sumário:

1. [Dark mode no streamlit](#dark-mode-no-streamlitt)
2. [Código completo](#código-completo)


### Dark mode no streamlit

Para colocar o Dark mode ou o Light mode no streamlit é bem fácil, basta criar uma pasta chamada `.streamlit` (quando executa o projeto, ele procura por essa pasta em específico) que possui alguns arquivos que podem ser de acesso para o projeto do streamlit, e um arquiv oque ele procura é o `config.toml` (cria esse arquivo dentro da pasta).

O arquivo `config.toml` é da linguagem TOML (Tom's Obvious, Minimal Language), que é uma linguagem de serialização de dados, usada principalmente para configurar arquivos. Ela é projetada para ser fácil de ler e escrever, mantendo a simplicidade e a clareza.

### Código completo

#### Arquivo `main.py`

```py
# Passo1: Importar as bibliotecas

import streamlit as st
import pandas as pd
import yfinance as yf

# Passo 2: Criar as funções de carregamento de dados
    # Cotações do Itau - ITUB4 - 2010 a 2024

@st.cache_data # Uma função do python que atribui uma funcionalidade para função logo embaixo dele
def carregar_dados(empresa):
    texto_tickers = " ".join(empresa)
    dados_acao = yf.Tickers(texto_tickers)
    cotacoes_acao = dados_acao.history(period="1d", start="2010-01-01", end="2024-12-31")
    cotacoes_acao = cotacoes_acao["Close"]

    return cotacoes_acao

acoes = ["ITUB4.SA", "BBDC4.SA", "PETR4.SA", "VALE3.SA", "ABEV3.SA", "WEGE3.SA", "MGLU3.SA", "BBAS3.SA"]
dados = carregar_dados(acoes)

# Passo 3: Criar a interface do streamlit

st.write("""
# App Preço de Ações
O gráfico abaixo representa a evolução do preço das ações ao longo dos anos
""") # Formato markdown

# Passo 4: Preparar as visualizações = filtros
lista_acoes = st.multiselect("Escolha as ações para visualizar", dados.columns)
if lista_acoes:
    dados = dados[lista_acoes]
    if len(lista_acoes) == 1:
        acao_unica = lista_acoes[0]
        dados = dados.rename(columns = {acao_unica: "Close"})

# Criar o Gráfico
st.line_chart(dados)

```

#### Arquivo `config.toml`

```
[theme]
base="dark"
```

<br>


[Voltar ao Topo](#sumário)