# 🧪 FarmaZen — Sistema de Gestão para Farmácia

**FarmaZen** é uma aplicação web desenvolvida com React, TypeScript e Vite, voltada para o gerenciamento de categorias e serviços de uma farmácia. O projeto tem como objetivo oferecer uma interface moderna, acessível e funcional para cadastro e visualização de dados relacionados ao negócio farmacêutico.

---

## 🚀 Tecnologias Utilizadas

- **React** — Biblioteca para construção de interfaces
- **TypeScript** — Tipagem estática para maior segurança
- **Vite** — Ferramenta de build rápida e moderna
- **Axios** — Requisições HTTP
- **React Router DOM** — Navegação entre páginas
- **Tailwind CSS / CSS Modules** — Estilização
- **Render** — Hospedagem do backend

---

## 📦 Funcionalidades

- ✅ Cadastro de categorias
- ✅ Listagem de categorias
- ✅ Edição e exclusão de categorias
- ✅ Layout com Navbar e Footer
- ✅ Integração com API externa (`farmacianest.onrender.com`)
- ✅ Validação de formulários
- ✅ Estilização responsiva e harmoniosa

---

## 🛠️ Como rodar o projeto

```
# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

## 🌐 Backend
Este projeto consome uma API hospedada em farmacianest.onrender.com, que gerencia os dados de categorias. Certifique-se de que a API esteja ativa para que o cadastro funcione corretamente.
```
src/
├── componentes/
│   ├── navbar/
│   ├── footer/
│   ├── categorias/
│   │   ├── ListaCategorias.tsx
│   │   ├── FormCategoria.tsx
├── services/
│   └── Service.ts
├── App.tsx
├── main.tsx
```

## 🧠 Aprendizados
Este projeto foi desenvolvido como parte da formação na Generation Brasil, com foco em boas práticas de desenvolvimento front-end, integração com APIs REST e organização de componentes reutilizáveis.
