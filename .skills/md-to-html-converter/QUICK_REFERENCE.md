---
# YAML Frontmatter - Configuração da Skill
name: "MD to HTML Converter"
version: "1.0.0"
description: "Converte tabelas Markdown em páginas HTML com identidade visual do modelo.html"
category: "Documentation"
tags: ["markdown", "html", "conversion", "documentation"]
---

# Quick Reference - MD to HTML Converter

## 📋 Uso Rápido

### Entrada Mínima Necessária
```
Markdown Table Data
↓
[Skill Process]
↓
HTML File (completo com estilos)
```

### Comando Básico
```
1. Prepara tabela MD com colunas consistentes
2. Define título da página
3. Define caminho de saída
4. Skill gera HTML com todas estilos, cores e footer
```

## 🎨 Elementos Visuais Mantidos

| Elemento | Cor/Estilo | Uso |
|----------|-----------|-----|
| Header | `linear-gradient(135deg, #4a86e8, #3367d6)` | Título principal |
| Section Header | `linear-gradient(135deg, #c9daf8, #a4c2f4)` | Subtítulo |
| Table Header | `#e8effb` bg, `#1f2937` text | Cabeçalhos tabela |
| Alternate Rows | `#f7f9fc` | Linhas pares |
| Condições | `#4b5563` italic | Regras especiais |
| Footer | `#f5f5f5` bg | Copyright + Inovare |

## 📐 Estructura HTML Gerada

```
<!DOCTYPE html>
<html>
  <head>
    └─ CSS completo (todos estilos)
  <body>
    <div class="container">
      <div class="header">
        <h1>[Page Title]</h1>
      </div>
      <div class="section-header">[Section Header]</div>
      <table>
        <thead>...</thead>
        <tbody>[Dados do MD]</tbody>
      </table>
      <div class="footer">[Compliance + Inovare]</div>
    </div>
</html>
```

## ✅ Checklist Pré-uso

- [ ] Tabela MD com formatação correta (pipes e dashes)
- [ ] Título da página definido
- [ ] Header de seção preparado
- [ ] Caminho de saída especificado
- [ ] Nome do arquivo sem extensão (será .html)
- [ ] Verificar caracteres especiais (acentos, símbolos)

## 🎯 Casos de Uso Comuns

### Cenário 1: Novo documento
```
MD source → HTML novo com estilos completos
```

### Cenário 2: Atualizar conteúdo
```
MD atualizado → HTML com estrutura preservada, conteúdo novo
```

### Cenário 3: Múltiplos documentos
```
N arquivos MD → N arquivos HTML com identidade visual consistente
```

## 📂 Locais de Saída Padrão

```
/mapeamento/
  /cadastros/       ← Documentação de cadastros
  /nfe/             ← Documentação NF-e
  /cte/             ← Documentação CT-e
  /nfse/            ← Documentação NFS-e
  /contabil/        ← Documentação contábil
  /inventario/      ← Documentação inventário
  /bloco_k/         ← Documentação Bloco K
  /retidos/         ← Documentação impostos retidos
```

## 🚀 Fluxo Típico

```
1. User cria/edita arquivo.md
   ↓
2. Invoca skill com dados MD
   ↓
3. Skill parseia tabela
   ↓
4. Skill gera HTML completo
   ↓
5. HTML salvo com nome correto
   ↓
6. Página pronta no navegador
```

## 💾 Outputs Garantidos

Cada arquivo gerado inclui:
- ✅ DOCTYPE e meta tags corretos
- ✅ CSS inline completo (não depende de arquivos externos)
- ✅ Responsive design (mobile-friendly)
- ✅ Favicon reference: `../favicon.png`
- ✅ Footer com copyright e logo Inovare
- ✅ Tabela com dados do MD
- ✅ Cores e gradientes padronizados
- ✅ Typography consistente (Segoe UI)
- ✅ Accessibility features (semantic HTML)

## 🔄 Integração com Workflow

```
.agent.md (orquestra)
    ↓
Detecta novo/atualizado MD
    ↓
Invoca MD-to-HTML Converter Skill
    ↓
Gera HTML automaticamente
    ↓
Valida contra modelo.html
    ↓
Salva em local apropriado
```

## 📝 Formato MD Esperado

```markdown
| Col1 | Col2 | Col3 | Col4 | Col5 |
|------|------|------|------|------|
| Data | Data | Data | Data | Data |
```

**Requisitos:**
- Linha de cabeçalho com pipes `|`
- Linha de divisor com hífens `-` e pipes `|`
- Dados das linhas com pipes separando colunas
- Sem requisito de número mínimo/máximo de colunas

## 🎓 Exemplo Mínimo

**Entrada:**
```markdown
| ID | Campo | Valor |
|---|---|---|
| 1 | nome | João |
| 2 | email | joao@test.com |
```

**Saída:**
Arquivo `exemplo.html` com:
- Header azul gradiente
- Tabela com dados
- Footer Compliance
- Totalmente estilizado
- Pronto para usar

## ⚙️ Configurações Disponíveis

| Parâmetro | Tipo | Obrigatório | Default |
|-----------|------|-------------|---------|
| markdown_table | string | Sim | - |
| page_title | string | Sim | - |
| section_header | string | Não | "Mapeamento de campos" |
| output_file | string | Sim | - |
| output_path | string | Não | . |
| apply_styles | boolean | Não | true |
| include_footer | boolean | Não | true |
| responsive | boolean | Não | true |

## 🔗 Referências

- Modelo visual: `/mapeamento/modelo.html`
- Cores padrão: Gradiente azul (#4a86e8 → #3367d6)
- Font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- Max-width container: 1400px
- Shadow: 0 0 10px rgba(0,0,0,0.08)
- Border-radius: 8px

## 📞 Suporte

Para usar a skill:
1. Acesse o arquivo MD com a tabela
2. Invoque a skill via Copilot
3. Forneça os parâmetros necessários
4. Aguarde a geração do HTML
5. Verifique o arquivo na saída especificada

---

**Versão:** 1.0.0  
**Última atualização:** 2025-06-20  
**Compatibilidade:** VS Code 1.90+
