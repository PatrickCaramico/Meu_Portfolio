# Portfólio v3 — Patrick Souza

Portfólio pessoal em formato SPA (Single Page Application), atualmente na versão **v3**, com foco em design moderno, performance e experiência do usuário.

## ✨ Visão geral

Este projeto apresenta:

- **Hero** com destaque profissional e CTA.
- **Sobre mim** com foco em trajetória e direcionamento técnico.
- **Projetos recentes** com links de demo e GitHub.
- **Habilidades** com layout visual por grupos (Linguagens & Frameworks, Design & Layout, Ferramentas & Plataformas), incluindo ícones em estilo de referência.
- **Contato** com formulário e links sociais.
- **Tema claro/escuro** com persistência via `localStorage`.
- **Animações de entrada** com `IntersectionObserver`.

## 🧱 Stack utilizada

- HTML5
- CSS3
- JavaScript (ES6+)
- Phosphor Icons
- Devicon (ícones de tecnologias)
- Google Fonts (Inter)

## 📁 Estrutura do projeto

```text
Portfolio_v3/
├── index.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── images/
│   └── js/
│       └── main.js
└── config/
    └── package.json
```

## 🚀 Como executar localmente

### Opção 1 (rápida, sem instalar nada no projeto)

Abra o arquivo `index.html` no navegador.

### Opção 2 (servidor local recomendado)

Na raiz do projeto, execute:

```bash
npx serve .
```

Depois acesse a URL exibida no terminal (geralmente `http://localhost:3000`).

## 🎨 Personalização

- Conteúdo e seções: `index.html`
- Estilos visuais e responsividade: `assets/css/style.css`
- Interações (menu mobile, tema, animações, formulário): `assets/js/main.js`

## 📌 Próximas melhorias sugeridas

- Ajustar links reais de contato (LinkedIn, GitHub e e-mail).
- Integrar envio real do formulário (ex.: EmailJS, Formspree ou backend próprio).
- Otimizar imagens para web (compressão e formatos modernos).

## 📄 Licença

Este projeto está sob licença MIT, conforme definido em `config/package.json`.
