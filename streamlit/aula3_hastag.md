## Sumário:

1. [Sidebar no streamlit](#sidebar-no-streamlit)
2. [Filtro de dada no streamlit (slider)](#filtro-de-data-no-streamlit-slider)
3. [Filtro com o intervalo de datas](#sidebar-no-streamlit)

### Sidebar no streamlit

Para colocar a sidebar é bem fácil é simplesmente colocar no início das visualizações o comando:

```py
    st.sidebar
```

E se quiser atribuir um título, só colocar:

```py
    st.sidebar.header()
```

Tudo que quiser colocar na sidebar é só digitar depois da palavra `sidebar`, por exemplo, eu quero passar o `multiselect`  para o sidebar então é:

```py
    st.sidebar.multicelect()
```

### Filtro de data no streamlit (slider)

O `st.slider` no Streamlit é um widget interativo que permite ao usuário selecionar um valor ou um intervalo de valores dentro de uma faixa definida. Ele pode ser usado para ajustar números inteiros, números decimais ou datas.

##### **Funcionamento:**

**Parâmetros principais:**

- `label`: Texto que aparece ao lado do slider, explicando o que ele faz.

- `min_value e max_value`: Definem o intervalo de valores que o slider pode selecionar.

- `value`: Valor inicial do slider. Pode ser um valor único ou um par de valores se for um intervalo.

-`step`: Define o incremento entre os valores possíveis no slider. Pode ser um número ou uma duração em dias se o slider for de datas.

**Exemplo:**

```
valor_selecionado = st.slider("Selecione um número", min_value=0, max_value=100, value=50, step=1)
```

Neste exemplo, o usuário pode selecionar um número entre 0 e 100, começando em 50 e com incrementos de 1.

### Filtro com o intervalo de datas

A parte de **filtro de datas** do código permite ao usuário escolher um intervalo de tempo específico para visualizar os dados das ações. Aqui está como funciona:

1. **Definição das datas mínimas e máximas:**

    - `data_inicial` e `data_final` são extraídas do índice do dataframe dados, que corresponde às datas disponíveis no conjunto de dados (desde 2010 até 2024).

2. **Controle deslizante de datas:**

    - Um controle deslizante (`st.sidebar.slider`) é criado na barra lateral do Streamlit, permitindo ao usuário selecionar o intervalo de datas desejado para análise.

    - Esse slider permite ajustar o intervalo entre a data mínima (`min_value = data_inicial`) e a data máxima (`max_value = data_final`), com um passo de 30 dias.

3. **Filtragem dos dados:**

Com o intervalo de datas selecionado, o dataframe `dados` é filtrado para incluir apenas os registros dentro desse período. Isso é feito usando `dados.loc[intervalo_data[0]:intervalo_data[1]]`, onde `intervalo_data` contém as datas inicial e final selecionadas.

Esse processo permite que o gráfico mostre apenas os dados de preços de ações dentro do período escolhido, facilitando a análise focada em um intervalo de tempo específico.

### Código completo

```py
# Passo1: Importar as bibliotecas

import streamlit as st
import pandas as pd
import yfinance as yf
from datetime import timedelta

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

st.sidebar.header("Filtros")

# filtro de ações
lista_acoes = st.sidebar.multiselect("Escolha as ações para visualizar", dados.columns)
if lista_acoes:
    dados = dados[lista_acoes]
    if len(lista_acoes) == 1:
        acao_unica = lista_acoes[0]
        dados = dados.rename(columns = {acao_unica: "Close"})

#filtro de datas
data_inicial = dados.index.min().to_pydatetime()
data_final = dados.index.max().to_pydatetime()
intervalo_data = st.sidebar.slider("Selecione o período", min_value = data_inicial, max_value = data_final, value=(data_inicial, data_final), step = timedelta(days=30))

dados = dados.loc[intervalo_data[0]:intervalo_data[1]]

# Criar o Gráfico
st.line_chart(dados)

```