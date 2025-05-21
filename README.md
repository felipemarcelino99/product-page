# 🛍️ Product Page

Este repositório contém uma página de produto com funcionalidades completas de seleção de variações, tamanhos, quantidade e zoom na imagem. Desenvolvido com **React**, **TypeScript**, **TailwindCSS** e armazenamento temporário via `localStorage`.

## 📦 Tecnologias

- React 18
- TypeScript
- TailwindCSS
- Context API
- Local Storage com expiração (`setWithExpiry`, `getWithExpiry`)
- Lib de zoom na imagem (`react-image-magnify`)

## 📸 Funcionalidades

- Listagem de variações do produto (ex: cor, modelo)
- Seleção de tamanhos disponíveis conforme o estoque
- Escolha de quantidade limitada à disponibilidade
- Zoom automático ao passar o mouse sobre a imagem
- Armazenamento temporário da seleção do usuário por 15 minutos

## 🚀 Como rodar o projeto

```bash
git clone https://github.com/felipemarcelino99/product-page.git
cd product-page
npm install
npm run dev
```

Abra `http://localhost:5173` no seu navegador.

## 🧪 Testando produtos diferentes

O produto atualmente exibido está sendo definido manualmente no contexto, usando `PRODUCTS[1]`.

Se quiser alterar o produto exibido (para testar outro conjunto de variações, imagens e tamanhos), basta editar o arquivo:

```ts
// src/contexts/ProductContext.tsx
const [product, setProduct] = useState<Product>(PRODUCTS[1]); // ← aqui
```

Altere para `PRODUCTS[0]` ou outro índice disponível no mock:

```ts
const [product, setProduct] = useState<Product>(PRODUCTS[0]);
```
