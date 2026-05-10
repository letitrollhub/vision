# Vision Consultores — Site Institucional

Este repositório contém o site institucional da **Vision Consultores**, desenvolvido como uma aplicação React estática com Vite.

## Como executar localmente

Instale as dependências e inicie o ambiente de desenvolvimento:

```bash
pnpm install
pnpm run dev
```

## Build de produção

Para gerar a build padrão, adequada para deploy em provedores como Vercel:

```bash
pnpm run build
```

A saída estática é gerada em `dist/public`.

## Build para GitHub Pages

Como este repositório é um site de projeto em `letitrollhub.github.io/vision`, existe um script específico que aplica o base path `/vision/` e gera `404.html` para suportar rotas internas da SPA:

```bash
pnpm run build:github
```

O workflow em `.github/workflows/deploy.yml` usa esta build para publicar automaticamente no GitHub Pages quando houver push na branch `main`.

## Deploy no Vercel

O arquivo `vercel.json` já define a saída `dist/public` e o fallback de rotas internas para `index.html`.
