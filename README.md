# Meu Segundo App React Native - Backend

Este é o backend para o aplicativo [Meu Segundo App React Native](https://github.com/brandaowalison/meu-segundo-app-react-native), desenvolvido em Node.js e Express, com integração para upload de arquivos e uso do Cloudinary.

## Estrutura do Projeto

```
src/
  controllers/
    ocorrencia.controller.js
  db/
    connect.js
  midllewares/
    upload.js
  models/
    ocorrencia.js
  routes/
    ocorrencia.route.js
  utils/
    cloudinary.js
server.js
package.json
README.md
```

## Funcionalidades

- API REST para gerenciamento de ocorrências.
- Upload de arquivos (imagens) com integração ao Cloudinary.
- Conexão com banco de dados (configuração em `src/db/connect.js`).

## Instalação

1. Clone o repositório:
   ```
   git clone <url-do-repo>
   ```
2. Instale as dependências:
   ```
   npm install
   ```
3. Configure as variáveis de ambiente (Cloudinary, banco de dados, etc).

## Uso

Inicie o servidor:
```
npm start
```
O backend estará disponível em `http://localhost:3000` (ou porta configurada).

## Endpoints Principais

- `POST /ocorrencias` - Cria uma nova ocorrência (com upload de imagem).
- `GET /ocorrencias` - Lista todas as ocorrências.
- Outros endpoints podem ser consultados em `src/routes/ocorrencia.route.js`.

## Tecnologias Utilizadas

- Node.js
- Express
- MongoDB (ou outro banco, conforme configuração)
- Cloudinary
- Multer (upload de arquivos)

## Licença

Este projeto é apenas para fins educacionais.