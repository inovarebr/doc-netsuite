# Markdown to HTML Converter Skill

## Overview
This skill converts Markdown table data into complete HTML pages with the same visual identity, styling, footer, and naming conventions as `modelo.html` from the mapeamento directory.

## When to Use This Skill
- You have table data in Markdown format that needs to be converted to HTML
- Creating new documentation pages that follow the Compliance Netsuite template
- Need to generate multiple HTML files from MD source data with consistent styling
- Want to maintain visual consistency across documentation pages

## Input Requirements
The skill expects:
- **Markdown table**: A properly formatted markdown table with columns and data rows
- **Page title**: The intended title for the HTML page (e.g., "Cadastro de Itens")
- **Section header**: Optional subtitle or section description
- **File name**: The output HTML file name (without extension)
- **File path**: Directory where the HTML file should be created (optional, defaults to current directory)

### Markdown Table Format
```markdown
| # | WS Compliance | Conector | API Netsuite | Condição / Regra |
|---|---|---|---|---|
| 1 | field/code | connector | api/path | Condition or rule |
| 2 | field/code2 | connector2 | api/path2 | Another condition |
```

## What This Skill Does

### 1. **Parse Markdown Table**
- Reads the provided markdown table
- Extracts headers and row data
- Identifies special formatting (italic, bold, line breaks)

### 2. **Generate HTML Structure**
Creates a complete, self-contained HTML file with:
- **DOCTYPE declaration** and proper meta tags
- **Responsive viewport** configuration
- **Favicon reference** to `../favicon.png`
- **Complete CSS styling** matching modelo.html

### 3. **Apply Visual Identity**
Maintains all design elements from modelo.html:
- **Color scheme**:
  - Primary gradient: `linear-gradient(135deg, #4a86e8, #3367d6)` (header)
  - Secondary gradient: `linear-gradient(135deg, #c9daf8, #a4c2f4)` (section headers)
  - Table header: `#e8effb` background with `#1f2937` text
  - Alternating rows: `#f7f9fc` for even rows
  - Body background: `#f8f9fa`
  - White container: `#ffffff`

- **Typography**:
  - Font family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
  - Line height: 1.5
  - Font sizes: Scale appropriately for headers and body

- **Layout Structure**:
  - `.container`: Max-width 1400px, centered, with shadow and border-radius
  - `.header`: Gradient background with white centered title
  - `.section-header`: Gradient background with bold centered text
  - `table`: Full-width, border-collapse, consistent padding
  - `.footer`: Centered with Compliance copyright and Inovare branding

### 4. **Create Footer**
Includes standard footer with:
```html
<div class="footer">
    &copy; 2025 Compliance Soluções. Todos os direitos reservados.
    <p style="font-size: 0.8em;">Integração desenvolvida e mantida por 
    <a href="https://inovarebr.com/"><img src="../favicon_1.png" alt="Inovare" 
    title="Inovare Soluções e Sistemas"></a></p>
</div>
```

### 5. **Handle Special CSS Classes**
Preserves special styling classes:
- `.condicao`: Italic, color `#4b5563` (for conditions/rules)
- `.obrig-sim`: For mandatory fields (can be customized)
- `.obrig-nao`: For optional fields (can be customized)
- Automatically applies classes based on cell content patterns

### 6. **Generate File**
- Creates the HTML file with proper encoding (UTF-8)
- Uses consistent naming convention: `[filename].html`
- Places file in specified directory
- Ready to use immediately without additional formatting

## Naming Conventions
The skill follows these conventions from modelo.html:
- **File names**: lowercase with hyphens (e.g., `cadastro-itens.html`)
- **Page titles**: Capitalized, descriptive (e.g., "Cadastro de Itens")
- **Section headers**: Format as "Mapeamento de campos - [Entity Name]"
- **Meta tags**: Include viewport, charset, and favicon references

## Responsive Design
The generated HTML includes:
- Mobile-first approach with media queries
- Responsive table font sizes (0.82em on screens ≤900px)
- Flexible padding and spacing
- Works on all screen sizes

## Output Example
The skill generates output like:
```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro de Itens</title>
    <link rel="icon" href="../favicon.png" type="image/png">
    <style>
        [Complete styled CSS matching modelo.html]
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Cadastro de Itens</h1>
        </div>
        <div class="section-header">Mapeamento de campos - Itens</div>
        <table>
            [Table with parsed MD data]
        </table>
        <div class="footer">
            [Standard footer]
        </div>
    </div>
</body>
</html>
```

## Special Features
- **Preserves markdown formatting**: Converts markdown italics and bold to HTML appropriately
- **Line break handling**: Converts markdown line breaks to `<br>` tags
- **Empty cell handling**: Replaces empty cells with `&nbsp;` for proper display
- **Character escaping**: Properly escapes special characters for HTML display
- **Accessibility**: Includes proper semantic HTML structure
- **Performance**: Lightweight, single-file design with inline CSS

## Common Use Cases

### Case 1: Create new documentation page
```
Skill Input: Markdown table with field mappings
Skill Output: New HTML file ready for browser viewing
```

### Case 2: Update existing documentation
```
Skill Input: Updated MD table with new fields
Skill Output: HTML file with updated content, same styling
```

### Case 3: Generate multiple pages from dataset
```
Skill Input: Multiple MD tables (one per entity)
Skill Output: Multiple HTML files, all consistent in style
```

## Integration with Project Workflow
This skill integrates with the `.agent.md` workflow:
1. MD file is created/edited in subdirectory
2. Skill converts MD table to HTML structure
3. `.agent.md` agent uses generated structure for page creation
4. Final page maintains complete visual identity and consistency

## Technical Details
- **Language**: HTML5, CSS3
- **Browser Support**: All modern browsers (Chrome, Firefox, Safari, Edge)
- **File Size**: ~8-12KB per file (minimal bloat)
- **Dependencies**: None (pure HTML/CSS, no JavaScript required)
- **Encoding**: UTF-8 with proper meta charset declaration
- **Compatibility**: Works with all subdirectories under `mapeamento/`
