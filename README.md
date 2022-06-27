# BIUD FRONTEND CHALLENGE

```
projeto criado com Node.js v16.15.0 e depedências gerenciadas por yarn
```

## Na raíz de seu diretório:

```bash
# Instale as depedências
yarn

# ...ou se preferir
npm install

```

### Para rodar o projeto localmente antes:

você deve criar um arquivo chamado ```.env.local``` na raíz de seu projeto e adicionar as seguintes variáveis de ambiente:

- SALT_KEY: Um valor qualquer aleatório
- MONGOOSE_CONECTION_STRING: A connection string para conexão no Mongo DB, você pode usar o [Mongo DB Atlas para criar um BD em Mongo](https://mlab.com)

### Agora, para iniciar o projeto execute:

```bash
yarn start:dev

# ...ou se preferir
npm run start:dev
```

Se tudo der certo, você deve ser capaz de visualizar uma mensagem semelhante a esta:

```bash
[nodemon] 2.0.16
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): src/**/*
[nodemon] watching extensions: ts
[nodemon] starting `NODE_ENV=development sucrase-node ./src/server.ts ./src/server.ts`
Success connecting to the database...
API started successfully. listening at the port 3333
```
