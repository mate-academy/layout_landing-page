# 🚴 MyBike Landing Page

Uma landing page moderna e responsiva para uma marca de bicicletas elétricas urbanas. Desenvolvida com foco em performance, animações fluidas, acessibilidade e boas práticas de CSS moderno com arquitetura SCSS 7-1.

![Status do Projeto](https://img.shields.io/badge/Status-Concluído-green)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?logo=sass&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6.3.6-646CFF?logo=vite&logoColor=white)
![Cypress](https://img.shields.io/badge/Cypress-13.13-17202C?logo=cypress&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-3.3.2-F7B93E?logo=prettier&logoColor=black)
![ESLint](https://img.shields.io/badge/ESLint-8.57-4B32C3?logo=eslint&logoColor=white)
![Stylelint](https://img.shields.io/badge/Stylelint-16.7-263238?logo=stylelint&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Mobile%20First-blue)

---

## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Demo](#-demo)
- [Tecnologias](#-tecnologias-e-ferramentas)
- [Funcionalidades](#-funcionalidades-implementadas)
- [Arquitetura](#-arquitetura-do-projeto)
- [Estrutura de Pastas](#-estrutura-de-pastas)
- [Design System](#-design-system)
- [Componentes SCSS](#-componentes-scss)
- [JavaScript](#-javascript)
- [Acessibilidade](#-acessibilidade)
- [Testes](#-testes)
- [Instalação](#-instalação-e-execução)
- [Scripts](#-scripts-disponíveis)
- [Design de Referência](#-design-de-referência)
- [Licença](#-licença)
- [Autor](#-autor)

---

## 🎯 Visão Geral

Este projeto é uma landing page promocional para **MyBike**, uma marca fictícia de bicicletas elétricas urbanas. A página apresenta os produtos, características e informações de contato de forma elegante e interativa.

### Principais Características:

- ✅ **100% Responsivo** (Mobile First)
- ✅ **Menu Mobile Interativo** com animações suaves
- ✅ **Animações de Scroll** usando Intersection Observer
- ✅ **Arquitetura SCSS 7-1** para organização de estilos
- ✅ **Acessibilidade** (ARIA, focus trap, prefers-reduced-motion)
- ✅ **Smooth Scroll** para navegação por âncoras
- ✅ **Formulário de Contato** com validação HTML5
- ✅ **Performance Otimizada** com Vite
- ✅ **Código Limpo** com ESLint, Prettier e Stylelint

---

## 🌐 Demo

**Produção:** [https://glauccoeng-prog.github.io/layout_landing-page/](https://glauccoeng-prog.github.io/layout_landing-page/)

---

## 🚀 Tecnologias e Ferramentas

### Core
| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| [HTML5](https://developer.mozilla.org/pt-BR/docs/Web/HTML) | 5 | Estrutura semântica da página |
| [SCSS/Sass](https://sass-lang.com/) | 1.93.2 | Pré-processador CSS com variáveis, mixins e modularização |
| [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) | ES6+ | Interatividade e animações |
| [Vite](https://vitejs.dev/) | 6.3.6 | Build tool ultra-rápida |

### Estilização
| Tecnologia | Descrição |
|------------|-----------|
| [Poppins Font](https://fonts.google.com/specimen/Poppins) | Tipografia principal (Google Fonts) |
| CSS Grid | Layout da seção de bikes |
| Flexbox | Layouts flexíveis |
| CSS Variables | Temas e consistência |
| CSS Transitions | Animações suaves |

### Qualidade de Código
| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| [ESLint](https://eslint.org/) | 8.57.0 | Linter para JavaScript |
| [Prettier](https://prettier.io/) | 3.3.2 | Formatador de código automático |
| [Stylelint](https://stylelint.io/) | 16.7.0 | Linter para CSS/SCSS |
| [LintHTML](https://linthtml.vercel.app/) | 0.9.6 | Linter para HTML |

### Testes
| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| [Cypress](https://www.cypress.io/) | 13.13.0 | Testes E2E automatizados |
| [Jest](https://jestjs.io/) | 29.7.0 | Framework de testes |
| [Mochawesome](https://adamgruber.github.io/mochawesome/) | 7.1.3 | Relatórios de testes |

---

## ✨ Funcionalidades Implementadas

### 1. 🍔 Menu Mobile Interativo
- **Hamburger animado** com transição para ícone X
- **Overlay escuro** com blur de fundo
- **Focus trap** para navegação por teclado
- **Fecha com tecla Escape**
- **Bloqueia scroll** do body quando aberto
- **Links navegáveis** para seções da página

### 2. 🎬 Animações de Scroll
- **Fade-in** no título principal (Hero)
- **Scroll Reveal** para seções ao entrar na viewport
- **Stagger Animation** nos cards de bicicletas (efeito cascata)
- **Intersection Observer** para performance otimizada
- **Fallback** para navegadores sem suporte

### 3. 📱 Design Responsivo
- **Mobile First** (320px → 768px → 1024px+)
- **Breakpoints estratégicos**: 768px (tablet), 1024px (desktop)
- **Grid adaptativo** na seção de bikes (1 → 2 → 3 colunas)
- **Imagens responsivas** com aspect-ratio

### 4. 📝 Formulário de Contato
- **Campos validados** com HTML5 (required, type=email)
- **Reset automático** após envio
- **Placeholders informativos**
- **Estilização consistente**

### 5. 🎨 UI/UX
- **Hover effects** em links, botões e cards
- **Glow effect** nos botões (efeito de brilho)
- **Lift effect** nos cards (elevação no hover)
- **Transições suaves** (300ms padrão)
- **Cores contrastantes** para acessibilidade

---

## 🏗️ Arquitetura do Projeto

O projeto segue a **Arquitetura SCSS 7-1**, um padrão para organização de estilos em projetos de grande escala.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         ARQUITETURA SCSS 7-1                                 │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌──────────────┐                                                           │
│  │   main.scss  │ ◀── Arquivo principal (imports)                           │
│  └──────┬───────┘                                                           │
│         │                                                                    │
│         ▼                                                                    │
│  ┌──────────────────────────────────────────────────────────────────────┐   │
│  │ abstracts/  │ base/  │ layout/  │ components/ │ sections/ │ utilities│   │
│  │ (variáveis) │(reset) │(header)  │ (buttons)   │ (hero)    │(animações│   │
│  │ (mixins)    │        │(footer)  │ (cards)     │ (contact) │          │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Fluxo de Dados JavaScript

```
┌─────────────┐      ┌─────────────┐      ┌─────────────────┐
│  DOMContent │─────▶│   main.js   │─────▶│ initMobileMenu  │
│   Loaded    │      │ (Entry)     │      │ initScrollReveal│
└─────────────┘      └─────────────┘      │ initSmoothScroll│
                                          └─────────────────┘
                                                   │
                                                   ▼
                                          ┌─────────────────┐
                                          │ Intersection    │
                                          │ Observer API    │
                                          │ (Animações)     │
                                          └─────────────────┘
```

---

## 📂 Estrutura de Pastas

```
layout_landing-page/
├── 📄 index.html                    # Página principal HTML
├── 📄 package.json                  # Dependências e scripts npm
├── 📄 cypress.config.js             # Configuração do Cypress
├── 📄 checklist.md                  # Checklist de implementação
├── 📄 LICENSE                       # Licença GPL-3.0
├── 📄 README.md                     # Esta documentação
│
├── 📁 cypress/                      # Testes E2E
│   └── 📁 integration/
│       └── 📄 page.spec.js          # Testes da página
│
└── 📁 src/                          # Código fonte
    │
    ├── 📁 images/                   # Assets de imagens
    │   ├── 🖼️ favicon.svg          # Ícone do site
    │   ├── 🖼️ mybike.svg           # Logo branco
    │   ├── 🖼️ mybike-dark.svg      # Logo escuro
    │   ├── 🖼️ icon-phone-call.svg  # Ícone telefone
    │   ├── 🖼️ bike-black.jpg       # Hero image
    │   ├── 🖼️ footer-down.jpg      # Footer image
    │   ├── 🖼️ bike-mini-1.png      # Sporty 4
    │   ├── 🖼️ bike-mini-2.png      # Ride in town ST
    │   ├── 🖼️ bike-mini-3.png      # Agile ride 3
    │   ├── 🖼️ unlock-1.png         # Auto Unlock feature
    │   ├── 🖼️ unlock-2.png         # Auto Unlock detail
    │   ├── 🖼️ battery-1.png        # Battery feature
    │   ├── 🖼️ battery-2.png        # Lights detail
    │   ├── 🖼️ hydraulic-1.png      # Lightweight frame
    │   └── 🖼️ hydraulic-2.png      # Hydraulic brakes
    │
    ├── 📁 scripts/
    │   └── 📄 main.js               # JavaScript principal
    │
    └── 📁 styles/                   # Estilos SCSS
        │
        ├── 📄 main.scss             # Arquivo de imports
        │
        ├── 📁 abstracts/            # Configurações globais
        │   ├── 📄 _variables.scss   # Cores, breakpoints, espaçamentos
        │   └── 📄 _mixins.scss      # Funções reutilizáveis
        │
        ├── 📁 base/                 # Estilos fundamentais
        │   └── 📄 _reset.scss       # Reset CSS moderno
        │
        ├── 📁 layout/               # Estrutura da página
        │   ├── 📄 _container.scss   # Container principal
        │   ├── 📄 _header.scss      # Cabeçalho
        │   ├── 📄 _nav.scss         # Navegação desktop
        │   ├── 📄 _mobile-menu.scss # Menu mobile
        │   └── 📄 _footer.scss      # Rodapé
        │
        ├── 📁 components/           # Componentes reutilizáveis
        │   ├── 📄 _buttons.scss     # Estilos de botões
        │   └── 📄 _bike-card.scss   # Card de produto
        │
        ├── 📁 sections/             # Seções específicas
        │   ├── 📄 _section.scss     # Estilos base de seção
        │   ├── 📄 _hero.scss        # Seção hero
        │   ├── 📄 _move-free.scss   # Seção "Move Free"
        │   ├── 📄 _bikes-grid.scss  # Grid de bicicletas
        │   ├── 📄 _detail.scss      # Seção de detalhes
        │   └── 📄 _contact.scss     # Seção de contato
        │
        └── 📁 utilities/            # Classes auxiliares
            ├── 📄 _animations.scss  # Animações CSS
            └── 📄 _accessibility.scss # Acessibilidade
```

---

## 🎨 Design System

### Paleta de Cores

| Variável | Valor | Uso |
|----------|-------|-----|
| `$color-primary` | `#1d1d1d` | Fundo principal, textos escuros |
| `$color-white` | `#ffffff` | Texto sobre fundos escuros |
| `$color-input-bg` | `#f8f8fa` | Fundo dos inputs |
| `$color-input-text` | `#7d7d82` | Placeholder dos inputs |
| `$color-focus` | `#4a90e2` | Indicador de foco (a11y) |
| `$color-overlay` | `rgba(0,0,0,0.5)` | Overlay do menu mobile |
| `$color-menu-bg` | `#c4c4c4` | Fundo do menu mobile |

### Tipografia

| Propriedade | Valor |
|-------------|-------|
| Font Family | `'Poppins', Helvetica, sans-serif` |
| Font Weights | 400 (regular), 500 (medium), 600 (semibold), 700 (bold) |
| Line Height | 1.6 (base) |

### Espaçamentos

| Variável | Valor | Descrição |
|----------|-------|-----------|
| `$space-xs` | `0.5rem` (8px) | Espaçamento mínimo |
| `$space-sm` | `1rem` (16px) | Espaçamento pequeno |
| `$space-md` | `1.5rem` (24px) | Espaçamento médio |
| `$space-lg` | `2rem` (32px) | Espaçamento grande |
| `$space-xl` | `3rem` (48px) | Espaçamento extra grande |

### Breakpoints

| Variável | Valor | Dispositivo |
|----------|-------|-------------|
| Base | < 768px | Mobile (padrão) |
| `$bp-md` | 768px | Tablets |
| `$bp-lg` | 1024px | Laptops/Desktop |

### Transições

| Variável | Valor | Uso |
|----------|-------|-----|
| `$transition-fast` | `0.2s` | Hover rápido |
| `$transition-base` | `0.3s` | Transições padrão |
| `$transition-slow` | `0.5s` | Animações longas |
| `$ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | Curva suave |

---

## 🧩 Componentes SCSS

### Mixins Disponíveis

| Mixin | Descrição | Uso |
|-------|-----------|-----|
| `respond-to($bp)` | Media query responsiva | `@include respond-to($bp-md) { ... }` |
| `container-padding` | Padding lateral responsivo | `@include container-padding;` |
| `hover-lift` | Elevação no hover | `@include hover-lift;` |
| `glow-effect($color, $intensity)` | Brilho no hover/active | `@include glow-effect(#fff, 0.4);` |

### Classes de Animação

| Classe | Descrição |
|--------|-----------|
| `.fade-in` | Animação de entrada com fade e slide up |
| `.scroll-reveal` | Revelação quando entra na viewport |
| `.stagger-item` | Animação escalonada (para grids) |
| `.is-visible` | Estado visível (adicionada via JS) |

### Componentes Principais

| Componente | Arquivo | Descrição |
|------------|---------|-----------|
| `.btn` | `_buttons.scss` | Botão base |
| `.btn--primary` | `_buttons.scss` | Botão principal (branco) |
| `.btn--full` | `_buttons.scss` | Botão largura 100% |
| `.bike-card` | `_bike-card.scss` | Card de produto |
| `.contact__form` | `_contact.scss` | Formulário estilizado |
| `.contact__input` | `_contact.scss` | Campo de entrada |
| `.mobile-menu` | `_mobile-menu.scss` | Menu lateral mobile |

---

## 📜 JavaScript

### Funções Principais

| Função | Arquivo | Descrição |
|--------|---------|-----------|
| `initMobileMenu()` | `main.js` | Controla menu mobile (abrir/fechar) |
| `initScrollReveal()` | `main.js` | Animações ao scroll com Intersection Observer |
| `initSmoothScroll()` | `main.js` | Navegação suave para âncoras |

### Funcionalidades do Menu Mobile

```javascript
// Abre menu
openMenu() → adiciona .is-active, bloqueia scroll, foca primeiro link

// Fecha menu
closeMenu() → remove .is-active, libera scroll, retorna foco

// Event Listeners
- Clique no botão hamburger
- Clique no botão X
- Clique no overlay
- Tecla Escape
- Clique em links de navegação
```

### Intersection Observer

```javascript
// Configuração
const observerOptions = {
  root: null,           // Viewport
  rootMargin: '0px 0px -150px 0px',  // Margem inferior
  threshold: 0          // Qualquer visibilidade
};

// Comportamento
- Observa elementos .scroll-reveal e .stagger-item
- Adiciona .is-visible quando entra na viewport
- Respeita prefers-reduced-motion
- Fallback para scroll events em navegadores antigos
```

---

## ♿ Acessibilidade

### Recursos Implementados

| Recurso | Implementação |
|---------|---------------|
| **ARIA Labels** | Todos os botões e links interativos |
| **ARIA Expanded** | Estado do menu mobile |
| **ARIA Hidden** | Menu oculto quando fechado |
| **Focus Trap** | Foco fica dentro do menu quando aberto |
| **Keyboard Navigation** | Escape fecha menu, Tab navega |
| **Focus Visible** | Indicador visual de foco |
| **Prefers Reduced Motion** | Desabilita animações se preferido |
| **Semantic HTML** | `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` |
| **Skip Links** | Navegação rápida por âncoras |
| **Color Contrast** | Texto branco sobre fundo escuro |

### Classes Utilitárias

```scss
// Oculta visualmente mas mantém acessível para leitores de tela
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  // ...
}

// Respeita preferência de movimento
@media (prefers-reduced-motion: reduce) {
  scroll-behavior: auto;
}
```

---

## 🧪 Testes

### Cypress E2E

O projeto utiliza **Cypress** para testes end-to-end.

#### Configuração (`cypress.config.js`)

```javascript
module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'cypress/integration/**/*.spec.{js,ts,jsx,tsx}',
  },
  video: true,
  viewportHeight: 1920,
  viewportWidth: 1080,
  reporter: 'mochawesome',
});
```

#### Executar Testes

```bash
# Modo interativo (abre navegador)
npm run test:only

# Com lint antes dos testes
npm run test
```

---

## 🔧 Instalação e Execução

### Pré-requisitos

- **Node.js** v18 ou superior
- **npm** v9 ou superior

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/glauccoeng-prog/layout_landing-page.git
cd layout_landing-page

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm start

# 4. Acesse no navegador
# http://localhost:3000
```

### Build de Produção

```bash
# Gerar build otimizado
npm run build

# Deploy para GitHub Pages
npm run deploy
```

---

## 📜 Scripts Disponíveis

| Script | Comando | Descrição |
|--------|---------|-----------|
| `npm start` | `mate-scripts start -l` | Inicia servidor de desenvolvimento |
| `npm run build` | `mate-scripts build` | Gera build de produção |
| `npm run deploy` | `mate-scripts deploy` | Deploy para GitHub Pages |
| `npm run lint` | `style-format + format + lint` | Executa todos os linters |
| `npm run format` | `prettier --write` | Formata arquivos HTML/CSS/SCSS |
| `npm run style-format` | `stylelint --fix` | Corrige estilos SCSS |
| `npm run test` | `lint + test:only` | Lint + testes Cypress |
| `npm run test:only` | `mate-scripts test` | Apenas testes Cypress |

---

## 🎨 Design de Referência

Este projeto foi implementado baseado no design **MYBIKE** do Figma:

**Design:** [MYBIKE Landing Page (Figma)](https://www.figma.com/file/NZQAIydtHo5QkINyGLHNcq/BIKE-New-Version?node-id=0%3A1)

### Seções Implementadas

1. **Header** - Logo + telefone + menu hamburger
2. **Hero** - Imagem principal + título animado
3. **Move Free** - Texto descritivo da marca
4. **Compare Bikes** - Grid de 3 produtos
5. **The Details** - 3 features com imagens
6. **Contact** - Formulário + informações
7. **Footer** - Imagem de fechamento

---

## 📄 Licença

Este projeto está sob a licença **GPL-3.0**. Veja o arquivo [LICENSE](./LICENSE) para mais detalhes.

---

## � Changelog

### v1.1.0 (2026-01-12) - PR Fix

#### 🐛 Correções
- **Formulário de Contato**: Todos os campos agora são obrigatórios (`required`)
  - Campo `name` - adicionado `required`
  - Campo `email` - já possuía `required`
  - Campo `message` - adicionado `required`

- **Hero/Banner Full Screen**: Ajustado para ocupar tela cheia
  - Altura: `100vh` (viewport completa)
  - Largura: `100vw` (borda a borda)
  - Imagem responsiva com `object-fit: cover`

- **Header Alinhado**: Corrigido posicionamento do header
  - Header movido para dentro do hero
  - Padding responsivo usando `@include container-padding`
  - Alinhamento consistente com o restante da página

#### 📁 Arquivos Modificados
- `index.html` - Campos required + estrutura do header/hero
- `src/styles/sections/_hero.scss` - Hero 100vh full-width
- `src/styles/layout/_header.scss` - Padding alinhado

---

## �👨‍💻 Autor

**Glaucco Siqueira**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/glaucco-siqueira/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/glauccoeng-prog)

---

<div align="center">
  <sub>Desenvolvido com 💚 durante o curso da Mate Academy</sub>
</div>
