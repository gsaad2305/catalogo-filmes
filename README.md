# Mini Catálogo de Filmes

O **Mini Catálogo de Filmes** é uma aplicação web desenvolvida como uma **Single Page Application (SPA)** utilizando **Next.js 14**, **TypeScript** e **Tailwind CSS**. O objetivo do projeto é apresentar um catálogo de filmes com uma interface simples, responsiva e intuitiva, permitindo pesquisar títulos, marcar favoritos e visualizar informações detalhadas de cada filme.

Os dados principais dos filmes são armazenados localmente em um arquivo JSON, enquanto os pôsteres são obtidos dinamicamente através da API pública do **OMDb**, mantendo o projeto leve e demonstrando integração com um serviço externo.

---

## Tecnologias utilizadas

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- React
- OMDb API

---

## Funcionalidades

### Catálogo de filmes

A página inicial exibe uma grade responsiva contendo os filmes cadastrados. Cada card apresenta:

- Pôster do filme
- Título
- Ano de lançamento
- Gênero
- Botão para acessar os detalhes

Os pôsteres são carregados automaticamente utilizando a API do OMDb a partir do IMDb ID de cada filme.

---

### Busca em tempo real

O catálogo possui um campo de pesquisa que filtra os filmes instantaneamente conforme o usuário digita, sem necessidade de atualizar a página.

---

### Favoritos

Cada filme pode ser marcado como favorito através do botão de coração presente no card.

Também é possível visualizar apenas os filmes favoritos utilizando o filtro disponível na página inicial.

Os favoritos permanecem apenas durante a execução da aplicação e são reiniciados ao atualizar a página.

---

### Página de detalhes

Cada filme possui uma página exclusiva acessada pela rota dinâmica:

```
/filme/[id]
```

Nela são exibidas informações mais completas, incluindo:

- Pôster
- Título
- Sinopse
- Diretor
- Gênero
- Ano de lançamento
- Duração
- Avaliação

Além disso, existe um botão para retornar ao catálogo principal.

---

### Página 404

Caso seja informado um identificador inexistente na URL, a aplicação exibe uma página personalizada informando que o filme não foi encontrado.

---

## Integração com a OMDb API

Embora os dados dos filmes sejam armazenados localmente, os pôsteres são obtidos dinamicamente através da API do OMDb.

A chave da API é armazenada em um arquivo `.env.local`, evitando sua exposição no código-fonte.

Exemplo:

```env
OMDB_API_KEY=sua_chave
```

---

## Estrutura do projeto

```
app/
├── filme/
│   └── [id]/
│       └── page.tsx
├── layout.tsx
├── not-found.tsx
├── page.tsx
├── globals.css

components/
├── FavoriteButton.tsx
├── Header.tsx
├── HomeClient.tsx
├── MovieCard.tsx
└── SearchBar.tsx

lib/
├── data/
│   └── movies.json
├── services/
│   ├── movies.ts
│   └── omdb.ts
├── types.ts

public/

.env.local
package.json
```

---

## Como executar o projeto

Clone o repositório:

```bash
git clone <url-do-repositorio>
```

Entre na pasta do projeto:

```bash
cd mini-catalogo-filmes
```

Instale as dependências:

```bash
npm install
```

Crie um arquivo `.env.local` contendo sua chave da OMDb:

```env
OMDB_API_KEY=sua_chave
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em:

```
http://localhost:3000
```

Para gerar a versão de produção:

```bash
npm run build
npm start
```

---

## Organização do código

O projeto foi dividido em responsabilidades para facilitar manutenção e reutilização.

- **app/** contém as páginas da aplicação utilizando o App Router do Next.js.
- **components/** reúne todos os componentes reutilizáveis da interface.
- **lib/data/** armazena os dados locais dos filmes.
- **lib/services/** concentra funções responsáveis pelo acesso aos dados e pela integração com a API do OMDb.
- **lib/types.ts** define as interfaces utilizadas em toda a aplicação.

---

## Responsividade

A interface foi desenvolvida para funcionar em diferentes tamanhos de tela.

O layout adapta automaticamente a quantidade de colunas do catálogo para dispositivos móveis, tablets e desktops utilizando os recursos responsivos do Tailwind CSS.

---

## Objetivo do projeto

Este projeto foi desenvolvido para demonstrar conhecimentos em:

- Desenvolvimento de aplicações com Next.js
- Organização de projetos utilizando o App Router
- Componentização com React
- Tipagem utilizando TypeScript
- Consumo de APIs externas
- Gerenciamento de estado no cliente
- Criação de interfaces responsivas utilizando Tailwind CSS
- Estruturação de código para facilitar manutenção e escalabilidade
