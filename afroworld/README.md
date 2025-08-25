
# Recomende aqui 🍿

Um catálogo mobile-first de filmes e séries construído com Next.js 14, otimizado para dispositivos móveis com foco em performance e acessibilidade.

## 🚀 Funcionalidades

- **Catálogo Responsivo**: Grade de capas otimizada para celular
- **Busca Avançada**: Campo de busca com debounce e filtros por categoria, tipo e ano
- **Modal Bottom Sheet**: Detalhes dos filmes/séries com CTA "Assista no Android"
- **Tema Dark/Light**: Alternância de tema com persistência local
- **Sistema de Anúncios**: Espaços configuráveis para banner, in-feed e sticky footer
- **Performance**: Lazy loading de imagens, skeletons e otimizações mobile
- **Acessibilidade**: Conformidade AA, navegação por teclado, aria-labels

## 📱 Páginas

- `/` - Home com destaques e categorias
- `/buscar` - Busca com filtros avançados
- `/categorias` - Lista de categorias
- `/categorias/[slug]` - Itens por categoria
- `/sobre` - Informações sobre o site
- `/privacidade` - Política de privacidade
- `404` - Página de erro personalizada

## 🎨 Configuração de Tema

### Variáveis de Ambiente (.env.local)

```bash
# Configuração do Site
SITE_NAME="Recomende aqui 🍿"
SITE_URL="https://seudominio.com"

# Link do Android
UNIT_TV_ANDROID_LINK="https://links.pkggold.shop/ICUCKMW"

# Anúncios
ADS_ENABLED="true"
AD_PROVIDER="custom"
AD_HTML_BANNER_TOP="<div>Seu HTML de banner aqui</div>"
AD_HTML_INFEED="<div>Seu HTML de anúncio in-feed aqui</div>"
AD_HTML_STICKY_FOOTER="<div>Seu HTML de rodapé fixo aqui</div>"

# Tema Padrão
NEXT_PUBLIC_THEME_DEFAULT="dark"

# Paleta de Cores
PALLETE_PRIMARY="#8B5E34"
PALLETE_ACCENT="#D4A373"
PALLETE_BG_DARK="#1C140F"
PALLETE_BG_LIGHT="#FAF7F2"
PALLETE_TEXT_DARK="#EDE6DF"
PALLETE_TEXT_LIGHT="#2A1C14"

# Analytics
GA_MEASUREMENT_ID="G-XXXXXXXXXX"
```

## 📊 Editando o Catálogo

### Adicionando Novos Itens

Edite o arquivo `src/data/catalog.ts`:

```typescript
export const catalogData: CatalogItem[] = [
  {
    id: 'novo-item',
    tipo: 'filme', // ou 'serie'
    titulo: 'Nome do Filme',
    ano: 2024,
    categorias: ['Drama', 'Thriller'],
    tags: ['tag1', 'tag2'],
    descricao_curta: 'Descrição em até 400 caracteres...',
    capa_url: 'https://exemplo.com/capa.jpg',
    destaque: true // aparece no carrossel de destaques
  },
  // ... outros itens
];
```

### Adicionando Categorias

```typescript
export const categories = [
  'Drama',
  'Comédia',
  'Ação',
  'Terror',
  // ... adicione novas categorias aqui
];
```

## 🎯 Configuração de Anúncios

### Anúncios Personalizados (AD_PROVIDER="custom")

Configure o HTML dos anúncios nas variáveis de ambiente:

```bash
AD_HTML_BANNER_TOP="<div style='text-align:center;padding:20px;background:#f0f0f0;'>Banner Topo</div>"
AD_HTML_INFEED="<div style='text-align:center;padding:40px;background:#e0e0e0;'>Anúncio In-feed</div>"
AD_HTML_STICKY_FOOTER="<div style='text-align:center;padding:15px;background:#d0d0d0;'>Rodapé Fixo</div>"
```

### Posições dos Anúncios

- **Banner Top**: Abaixo do header nas páginas principais
- **In-feed**: Entre seções de conteúdo
- **Sticky Footer**: Rodapé fixo (opcional, recolhível)

## 🛠️ Instalação e Desenvolvimento

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/recomende-aqui.git

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env.local
# Edite .env.local com suas configurações

# Execute em modo de desenvolvimento
npm run dev

# Build para produção
npm run build
npm run start
```

## 📈 Analytics e Métricas

O sistema rastreia automaticamente:

- `view_item`: Abertura de modais de detalhes
- `click_assista_android`: Cliques no CTA principal
- `search_performed`: Buscas realizadas
- `ad_impression_*`: Impressões de anúncios

Configure `GA_MEASUREMENT_ID` para ativar o Google Analytics.

## 🎨 Personalização Visual

### Alterando Cores

Edite `src/styles/globals.css` para personalizar a paleta:

```css
:root {
  --primary: #8B5E34;  /* Cor primária */
  --accent: #D4A373;   /* Cor de destaque */
  --bg-dark: #1C140F;  /* Fundo escuro */
  --bg-light: #FAF7F2; /* Fundo claro */
}
```

### Fonte e Tipografia

Modifique `tailwind.config.js` para alterar fontes:

```javascript
fontFamily: {
  sans: ['Sua-Fonte', 'sans-serif'],
},
```

## 📱 SEO Mobile

- Otimizado para Core Web Vitals
- Lazy loading de imagens
- Structured data para rich snippets
- Meta tags otimizadas
- Sitemap automático

## 🔧 Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run start` - Servidor de produção
- `npm run lint` - Verificação de código
- `npm run type-check` - Verificação de tipos

## 📄 Estrutura do Projeto

```
src/
├── components/         # Componentes reutilizáveis
├── data/              # Dados do catálogo
├── hooks/             # React hooks customizados
├── pages/             # Páginas Next.js
├── styles/            # Estilos globais
└── types/             # Definições TypeScript
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para detalhes.

## 🆘 Suporte

Para dúvidas ou problemas:

- 📧 Email: contato@example.com
- 🐛 Issues: GitHub Issues
- 📖 Documentação: Este README

---

Desenvolvido com ❤️ para descobrir sua próxima obsessão cinematográfica! 🍿
