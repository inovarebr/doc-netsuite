# Exemplo de Uso - MD to HTML Converter

## Entrada (Markdown Table)

```markdown
# Cadastro de Itens

| # | WS Compliance | Conector | API Netsuite | Condição / Regra |
|---|---|---|---|---|
| 1 | itens/codigoItem | codigoitem | results/itemid | Se for nulo, usar results/sku |
| 2 | itens/descricao | descricao | results/displayname | Campo obrigatório |
| 3 | itens/unidadeMedida | unidade | results/unit | De-para com tabela de conversão |
| 4 | itens/tipo | tipo | results/itemtype | Pode ser 'InvtPart' ou 'Service' |
| 5 | itens/ativo | ativo | results/isinactive | Inverter booleano |
```

## Saída (HTML Gerado)

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de Itens</title>
    <link rel="icon" href="../favicon.png" type="image/png">
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.5;
            margin: 0;
            padding: 20px;
            color: #333;
            background-color: #f8f9fa;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            background-color: white;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0,0,0,0.08);
            border-radius: 8px;
            flex: 1;
        }

        .header {
            background: linear-gradient(135deg, #4a86e8, #3367d6);
            color: white;
            padding: 22px;
            margin: -20px -20px 24px -20px;
            border-radius: 8px 8px 0 0;
            text-align: center;
        }

        .header h1 {
            margin: 0;
            font-size: 1.9em;
        }

        .section-header {
            background: linear-gradient(135deg, #c9daf8, #a4c2f4);
            color: #000;
            padding: 12px 15px;
            margin: 20px 0 10px 0;
            border-radius: 4px;
            font-weight: bold;
            font-size: 1.05em;
            text-align: center;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin: 15px 0;
            font-size: 0.95em;
        }

        th, td {
            border: 1px solid #d1d5db;
            padding: 12px 10px;
            vertical-align: top;
        }

        th {
            background-color: #e8effb;
            color: #1f2937;
            font-weight: 700;
            text-align: left;
        }

        tr:nth-child(even) {
            background-color: #f7f9fc;
        }

        .condicao {
            color: #4b5563;
            font-style: italic;
        }

        .footer {
            margin-top: 32px;
            padding: 18px 16px;
            background-color: #f5f5f5;
            border-radius: 8px;
            color: #6b7280;
            text-align: center;
            font-size: 0.95em;
        }

        @media (max-width: 900px) {
            body {
                padding: 12px;
            }

            .container {
                padding: 16px;
            }

            table {
                font-size: 0.82em;
            }

            th, td {
                padding: 10px 8px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Cadastro de Itens</h1>
        </div>

        <div class="section-header">Mapeamento de campos - Itens</div>

        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>WS Compliance</th>
                    <th>Conector</th>
                    <th>API Netsuite</th>
                    <th>Condição / Regra</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>itens/codigoItem</td>
                    <td>codigoitem</td>
                    <td>results/itemid</td>
                    <td class="condicao">Se for nulo, usar results/sku</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>itens/descricao</td>
                    <td>descricao</td>
                    <td>results/displayname</td>
                    <td class="condicao">Campo obrigatório</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>itens/unidadeMedida</td>
                    <td>unidade</td>
                    <td>results/unit</td>
                    <td class="condicao">De-para com tabela de conversão</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>itens/tipo</td>
                    <td>tipo</td>
                    <td>results/itemtype</td>
                    <td class="condicao">Pode ser 'InvtPart' ou 'Service'</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>itens/ativo</td>
                    <td>ativo</td>
                    <td>results/isinactive</td>
                    <td class="condicao">Inverter booleano</td>
                </tr>
            </tbody>
        </table>

        <div class="footer">
            &copy; 2025 Compliance Soluções. Todos os direitos reservados.
            <p style="font-size: 0.8em;">Integração desenvolvida e mantida por <a href="https://inovarebr.com/"><img src="../favicon_1.png" alt="Inovare" title="Inovare Soluções e Sistemas"></a></p>
        </div>
    </div>
</body>
</html>
```

## Como Usar

### Passo 1: Preparar dados em Markdown
Crie um arquivo `.md` com uma tabela markdown bem formatada contendo:
- Coluna de ID/número
- Coluna de mapeamento WS Compliance
- Colunas de integração (Conector, API, Condições)

### Passo 2: Invocar a Skill
Forneça à skill:
```
Markdown Table: [table content]
Page Title: "Cadastro de Itens"
Section Header: "Mapeamento de campos - Itens"
Output File: "cadastro-itens.html"
Output Path: "/mapeamento/cadastros/"
```

### Passo 3: Arquivos Gerados
A skill cria um arquivo HTML completo com:
- ✅ Identidade visual do modelo.html
- ✅ Cores e gradientes consistentes
- ✅ Footer com branding Compliance e Inovare
- ✅ Responsive design
- ✅ Tabela com dados do MD
- ✅ Semântica HTML correta
- ✅ Acessibilidade

## Padrões de Nomenclatura

### Títulos de Página
- "Cadastro de Participantes"
- "Cadastro de Itens"
- "Cadastro de Centros de Custo"
- "Mapeamento NF-e"

### Headers de Seção
- "Mapeamento de campos - Participantes"
- "Mapeamento de campos - Itens"
- "Estrutura de Documento - NF-e"

### Nomes de Arquivo
- `cadastro-participantes.html`
- `cadastro-itens.html`
- `nfe-cabecalho.html`
- `lancamento-contabil.html`

## Caracteres Especiais Suportados

A skill suporta e converte corretamente:
- Acentos: á, é, í, ó, ú, ã, õ, ç
- Símbolos: → (seta), ≠ (diferente), • (bullet)
- Quebras de linha no markdown (convertidas para `<br>`)
- **Bold** e *italic* em markdown (convertidos para HTML)
- URLs (mantidas como plain text ou links conforme necessário)

## Estrutura Esperada de Diretórios

```
mapeamento/
├── modelo.html
├── cadastros/
│   ├── cadastro-itens.html (gerado pela skill)
│   └── cadastro-itens.md (origem)
├── nfe/
│   ├── nfe-cabecalho.html (gerado pela skill)
│   └── nfe-cabecalho.md (origem)
└── ...
```

## Resultado Visual

Todos os arquivos gerados pela skill apresentam:
- ✨ Cabeçalho com gradiente azul
- 📊 Tabela com linhas alternadas
- 🎨 Cores consistentes em toda a aplicação
- 📱 Design responsivo para mobile
- 🏢 Footer com branding profissional
- ♿ HTML semântico e acessível
