# Portfólio v4 — Patrick Souza

Portfólio de **Patrick Souza**, desenvolvedor Full-Stack e Analista de Sistemas. Página única em HTML, CSS e JavaScript puro, **sem frameworks e sem bibliotecas de terceiros em JS**. Foi feita para carregar rápido no celular (o link costuma ser aberto pelo LinkedIn ou WhatsApp).

## O que tem na página

| Seção | Objetivo |
|---|---|
| **Hero** | Proposta de valor, CTAs (Ver projetos, Baixar CV, GitHub, LinkedIn) e faixa de prova |
| **Projetos** | Case studies no formato *Problema → Solução técnica → Stack → Links* (FocoWave, ClickTime V3, ClickColor) + Automação & IA |
| **Diferencial** | Como a experiência em suporte, redes e infra melhora o código, com exemplos reais |
| **Stack** | Tecnologias agrupadas, indicando **onde** cada uma foi usada (sem barras de "%") |
| **Trajetória** | Suporte & Infra → Sistemas de Informação → Full-Stack |
| **Contato** | E-mail (com botão copiar), LinkedIn e GitHub |

## Destaques técnicos

- **Acessibilidade:** HTML semântico, link "pular para o conteúdo", foco visível, botões reais com `aria-label`/`aria-expanded`, contraste AA nos dois temas e respeito a `prefers-reduced-motion`.
- **Tema claro/escuro:** segue o sistema operacional, guarda a escolha do usuário e não pisca ao carregar (script inline no `<head>`).
- **Performance:**
  - ícones em sprite SVG inline (sem CDN de ícones)
  - imagens em WebP com `width`/`height` e `loading="lazy"`
  - uma única requisição de fontes
  - JS com `defer`
- **SEO e compartilhamento:** meta description, Open Graph/Twitter Card com `og-image.png` (1200×630) e JSON-LD `Person`.
- **Conteúdo visível sem JS:** as animações de entrada só escondem elementos quando o JS está ativo.

## Estrutura

```text
.
├── index.html              # conteúdo e marcação (comentado por seção)
├── assets/
│   ├── css/style.css       # tokens de design, temas e layout mobile-first
│   ├── js/main.js          # tema, menu, link ativo, animações, copiar e-mail
│   ├── images/             # WebP otimizados, favicon e og-image
│   └── cv/                 # coloque aqui Patrick-Souza-CV.pdf
└── package.json            # script de servidor local (opcional)
```

## Antes de publicar (checklist)

Procure por `TODO` no `index.html`:

- [ ] Coloque o currículo em `assets/cv/Patrick-Souza-CV.pdf`.
- [ ] Troque `SEU-EMAIL@exemplo.com` (2 ocorrências) pelo seu e-mail.
- [ ] Troque `https://SEU-DOMINIO.com/` pela URL final (canonical, Open Graph e JSON-LD).
- [ ] (Opcional) Inclua o ano de conclusão do curso e o tempo de experiência em suporte na faixa de prova e na trajetória.

Depois de publicar, teste a prévia do link no [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/).

## Rodar localmente

```bash
npx serve .
```

Ou abra o `index.html` direto no navegador.

## Licença

MIT.
