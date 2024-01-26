# Bem-vindo ao SocialBush! 🚀

Olá, amigo(a)!

Seja muito bem-vindo(a), este projeto é uma simulação de uma rede social que estou construindo com paixão e dedicação.

### Visão Geral do Projeto:
A SocialBush é uma projeto que busca recriar a dinâmica de uma rede social, proporcionando uma experiência envolvente e interativa para seus usuários.

### Status Atual:
Atualmente, o projeto está hospedado no [Netlify](https://socialbushido.netlify.app/), permitindo um rápido e fácil acesso ao deploy. No entanto, por favor, note que a visualização completa do funcionamento pode ser limitada, pois o banco de dados ainda não foi migrado para a nuvem. Estou trabalhando para implementar essa etapa crucial, e em breve você poderá explorar todas as funcionalidades que estou desenvolvendo.

### Como Contribuir:
Esta aberto a colaboradores e contribuições! Se você está animado para fazer parte deste projeto, sinta-se à vontade para explorar e contribuir com suas habilidades. Sua ajuda é fundamental para o sucesso deste empreendimento.

# Instruções para Visualização Local:
Caso queira explorar o projeto localmente, siga as instruções abaixo:

    Clone o repositório: git clone git@github.com:jorgejesuscardoso/Desafio_integracao.git
    Instale as dependências: npm install ou yarn install
    Inicie o servidor local: docker-compose up -d


# Dependências Front-end

Para instalar todas as dependências, basta que na raiz do projeto, "/socialBush" ou no diretório do front-end, "socialBush/frontend", vocẽ abra o terminal e digite o comando `npm install`. Caso aja algum problema siga as instruções abaixo para instalar e configurar as dependências uma a uma.


### React-test-library
#### Instalação

Utilize o comando
 
`
npm i -D vitest jsdom @testing-library/jest-dom @testing-library/react @testing-library/user-event @types/jest`

Com isso você irá instalar todos as depenências para poder rodar localmente: elas são.
 - React-test-library,
 - jest-dom,
 - user-event,
 - jest, e
 - vitest.

#### Configuração

Na pasta do frontend crie um arquivo chamado `setupTests.ts` e adicione o seguinte código, `import '@testin-library/jest-dom';`

Altere também o arquivo `src/vite-env.d.ts`, adicionando a seguinte linha. `
/// <reference types="@testing-library/jest-dom" />`

No arquivo `vite.config.ts` na raiz da pasta frontend, adicione uma nova chave ao objeto que está sendo exportado. 
` test: {  
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    css: true,
    reporters: ['verbose'],
    coverage: {
      reporter: ['text', 'json', html'],
      provider: 'v8'
    }
  },`

  Depois, adicione `/// <reference types="vitest" />` no topo do arquivo

  No package.json adicione o script de teste e de coveage.
  `
"scripts": {
  [...],
  "test": "vitest",
  "coverage": "vitest run --coverage"
},`

Provavelmente na primeira vez que você executar o comando `npm run coverage`, será perguntado se deseja instalar o pacote `'@vitest/coverage-v8'`. Aperte Y para confirmar.

### React-Router-DOM
#### Instalação

Para instalar a react-router-dom, utilize o comando abaixo:
`npm i react-router-dom `

No arquivo `main.tsx` na pasta src/, adicione o BrowserRouter, envolvendo o componente `<App />`;
`<BrowserRouter>
     <App />
</BrowserRouter>
`
No componente App deve-se criar as rotas, substitua o conteudo de retorno do componente App e crie as rotas dentro dele.
`
return (
  <>
    <Routes>
      <Route index Element={...} />
      <Route path="/profile" Element={...}>
      [...]
    </Routes>
  </>
)
`

### Styled Components
#### Instalação

Para instalar use o comando no terminal `npm install styled-components`

Para utilizar bastar criar um arquivo .tsx e estilizar.

### Redux
#### Instalação

Para instalar essa maravilhosa ferramenta, basta inserir no seu terminal o comando `npm install redux react-redux`

Para poder utilizar é necessário criar um "Store". Na pasta src/, crie um diretorio "redux" e um arquivo "index.ts" ou o nome q preferir. Depois é só criar o codigo que seu redux já esta funcionando:

`import { createStore } from 'redux';
import { compositWithDevTools } from '@redux-devtools/extension';
const initialState = {count: o};
const reducer = (state: initialState, action: AnyAction) => state;
const store = createStore(reducer, compositWithDevTools());
export default store;
`


BrouserRouter
BrouserRouter
Para facilitar o controle dos estados globais, instale a extensão, devtools extension
`npm install --save @redux-devtools/extension`, e instale tambem no seu navegador, se não tiver.

No componente "Main.tsx" envolva o browserRoter pelo provider, para que todos os componentes possam utilizar o estado global.

`<Provider store={store}>
<BrowserRouter>
     <App />
</BrowserRouter>
</Provider>`

Feito isso, é só criar os seus reducers e actions para poder utilizar o redux.

Com isso você conseguirá montar localmente o frontend, caso você tenha algum problema ao clonar este projeto e rodar o comando `npm install`.

# Dependências Back-end

Para instalar todas as dependências, basta que na raiz do projeto, "/socialBush" ou no diretório do back-end, "socialBush/backend", vocẽ abra o terminal e digite o comando `npm install`. Caso aja algum problema siga as instruções abaixo para instalar e configurar as dependências uma a uma.

### Express
#### Instalação

Primeiro abra o terminal e digite `npm init -y` para iniciar o Node.js.

Após iniciar o pacote Node.js, rode o comando `npm i express@4.17.1 --save-exact`, pois esse projeto usa express na sua versão 4.17.1. Um arquivo package-lock-json e o diretório node_modules deverá aparecer.

#### Criando Servidor

Primeiro crie um arquivo chamado app.js e import o express da seguinte maneiroa. `const express = require('express');`

##### App
Crie a variável app que recebe a função 'express()', `const app = express()` para poder ter acessos as rotas do endpoint que estará no arquivo "backend/routes/usersRoutes".

##### Express.json()
Habilite a leitura json com `app.use(express.json())`, pois o express em si não consegue converter dados .json.

##### Cors
Para poder rodar o servidor localmente sem problemas de cors, instale o cors, `npm i cors` e em seguida `app.use(cors())` e então já poderá criar as rotas, por exemplo, `app.use('/user', userRoutes);`. 

Exporte o constante app no final do arquivo `module.exports = app;`

##### Server.js
Após configurar o arquivo app.js é hora de criar o servidor de fato.
Crie no mesmo diretório, um arquivo, exemplo server.js, e import o app.js deste jeito `const app = require('./app');` 

##### Porta

Determine a porta que o servidor irá utilizar, no caso desse projeto e a porta 3001, `const port = process.env.PORT || 3001;`, dessa forma podemos usar a porta 3001 ou uma variável de ambiente.

#### Listen

Com a porta definida, crie o escultador para essa porta desta maneira, `app.listen(port, () => {
  console.log(`O servidor está rodando na porta: ${port}`)
});`

#### Node sc/server.js

Após feito isso, ao digitar no terminal o comando `node src/server.js` aparecerá a mensagem, "O servidor está rodando na porta: 3001", se tudo estiver correto.

#### Nodemon

Para ganho de produtividade e não precisar ficar dropando e subindo o servidor todo momento que fizer alteração, utilizei o Nodemon.
Para isso instale com `npm i nodemon@2.0.15 -D --save-exact`, feito isso vá no package.json e crie duas chaves no objeto de script, `"start": "node src/server.js", "dev": "nodemon src/server.js"`, assim ao rodar pela `npm run dev` o nodemon vai execultar o servidor e reiniciará toda vez que for feito uma mudança no arquivo "server.js" 

Com isso o servidor está rodando e pronto para uso.

### Criando Rotas , "Middlewares"
Resumindo, os middlewares servem como uma espécie de intermediário entre a requisição feita pelo cliente e a resposta enviada pelo servidor, oferecendo a capacidade de realizar ações prévias ou posteriores ao processamento da requisição.
Nos middlewares podemos fazer validações filtrando os dados da requisição para garantir que venha no formato correto, impedindo que dados inválidos seja processado pelo servidor.

OBS: Primeiro mandamento de TI; Sempre filtre e trate as entradas do usuário.


#### Rota user + alguns exemplo de como criar-las

Crie uma pasta chamada routes. É dentro desta pasta que terá todas as rotas do projeto.

Para criar a rota users, primeiro crie o arquivo usersRoutes e importe o express, `const express = require('express);` e crie uma constante router com ela, `const router = express.Router();`
##### Post
Rota "/user/login"
`router.post('/login', async (req, res) => { res.status(201).json('Crie a logica para validar o login') });`

##### Get
Rota "/user/profile"
`router.get('/profile', async (req, res) => { res.status(201).json('Dados do usuario') });`

##### Put
Rota "/user/profile"
`router.put('/profile', async (req, res) => { res.status(201).json('Dados do usuario atualizado') });`
##### Delete
Rota "/user/profile"
`router.delete('/profile', async (req, res) => { res.status(201).json('Dados do usuario deletado') });`

Com isso implementamos API RESTfull utilizando todos os verbos CRUD, "Create: POST, Read: GET, Update: PUT, Delete: DELETE"

Agora o arquivo App poderá acessar esses middlewares através das solicitações HTTP. Servidor concluído.

## Banco de dados

Para o banco de dados utilizei de uma imagem docker do mysql12 na versão 8.0.29.

### Instalação

É bem simples, basta rodar o comando no seu terminal `docker-compose up -d`, que a imagem será baixada e um container com ela estará pronto para ser usado.

### Conexão backend

A conexão é feita através do arquivo "connection.js" no diretório "backend/src/db"

Para fazer a conexão import o mysql `mysql = require('mysql12'/promise)`

Após isso, crie o objeto com as validações da conexão.

`const connection = mysql.createPool({
    host: process.env.MYSQL_HOST || 'localhost',
    port: process.env.MYSQL_PORT || 3306,
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '8309',
    database: process.env.DB_NAME || 'socialbush',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
`
E exporte-o no final do arquivo
`module.exports = connection;`
E import no arquivo que fará as conexões com o banco de dados.

### Create

Para inserir novos dados no banco de dados via verbo HTTP POST, crie um arquivo, exemplo "postDB.js". Import a conexão `cosnt conn = require('./connection');`, agora crie a função para inserir os dados, exemplo, 

`const insertPost = async (content) => {
  try {
    const sql = `
    INSERT INTO post (content) VALUES (?, NOW())`;

    const [result] = await conn.query(sql. [content, created_at]);
    return result;
  } catch (err) {
    throw new Error("Erro ao inserir dados")
  }
}`

Utilizando placeholders, (?), para poder evitar injeção de sql e inserir dados corretamente.Utiliza-se a mesma logica para criação de nova conta de usuário.

### Read

`async function getPosts(id) {
 try {
  if (id) {
    const sql = `
    SELECT post.content as 'content', post.create_time as created_at, user_data.first_name as 'user_name', user_data.last_name as 'last_name',user_data.photo as 'photo', user.id as 'user_id', post.post_id as 'post_id'
    FROM post
    INNER JOIN user ON post.user_id = user.id
    INNER JOIN user_data ON user.id = user_data.user_id
    WHERE post.user_id = ?
    `;
    const [posts] = await conn.query(sql, [id]);
    if (posts.length === 0) {
      return [{ post_id: 0, content: "Você ainda não fez uma postagem!", user_id: 0, created_at: " " }];
    }
    return posts;
  }
  if (!id) {
    const sql = `
    SELECT post.content as 'content', post.create_time as created_at, user_data.first_name as 'user_name', user_data.last_name as 'last_name',user_data.photo as 'photo', user.id as 'user_id', post.post_id as 'post_id'
    FROM post
    INNER JOIN user ON post.user_id = user.id
    INNER JOIN user_data ON user.id = user_data.user_id
    `;
    const [posts] = await conn.query(sql);

    if (posts.length === 0) {
      return [{ post_id: 0, content: "Não há novas postagens no momento!", user_id: 0, created_at: " " }];
    }

  return posts;
  }
 } catch (err) {
  throw new Error("Erro ao buscar posts");
  return null;
 }
}`

A logica de obteção dos post é um pouco extensa pois tem dois tipos de logica, uma para os pots gerais, de todos os usuários e outra para os post de um determiinado usuário. Assim, na page de perfil haverá apenas os post que o usuário que está logado fez e no feed da page inicial, os posts de todos os usuários.

### Update

A atualização dos dados tambem são bem simples
`
  const updatePost = async (content, id) => {
  try {
    const sql = `
    UPDATE post
    SET content = ?
    WHERE post_id = ?
    `;
    const [result] = await conn.query(sql, [content, id]);
    return result;
  } catch (err) {
    throw new Error("Erro ao atualizar post");
  } 
}
`
Utiliza a Id do usuário e o novo conteúdo que será inserido. É a mesma função utilziada para atualizar os dados da conta de usuário.

### Delete 
`
const deletePost = async (id) => {
  try {
    const sql = `
    DELETE FROM post
    WHERE post_id = ?
    `;
    const [result] = await conn.query(sql, [id]);
    return result;
  } catch (err) {
    throw new Error("Erro ao deletar post");
  }
}
`
A deleção é mais simples ainda. Utiliza-se o ID do post a ser deletado. Esse mesmo paramentro utilizado para deletar conta de usuário.
São alguns exemplos de como funciona a conexão com o banco de dados. As demais conexão como inserir e atualizar dados do perfil, foto e banners seguem a mesma lógica, algumas leve mudança é o uso do 'multer()'para poder pegar a foto e armazena-la no diretório de uploads.

### Utilizando o banco de dados

Apois Criar as funções de manipulação do banco de dados, você pode exporta-las ` Module.exports = {
  getPosts,
  insertPost,
  deletePost,
  updatePost,
};`, e chama-las nos Middlewares para fazer a manipulação toda vez que o endpoint for chamado.