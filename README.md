# Dependências Front-end
### React-test-library
#### Instalação

Utilize o comando
 
`
npm i -D vitest jsdom @testing-library/jest-dom @testing-library/react @testing-library/user-event @types/jest`

Com isso você irá instalar todos as depenências para poder rodar localmente: elas são.
 - React-test-library,
 - jest-dom,
 - user-event, e
 - jest.

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
`<BrouserRouter>
     <App />
</BrouserRouter>
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



Para facilitar o controle dos estados globais, instale a extensão, devtools extension
`npm install --save @redux-devtools/extension`, e instale tambem no seu navegador, se não tiver.

No componente "Main.tsx" envolva o browserRoter pelo provider, para que todos os componentes possam utilizar o estado global.

`<Provider store={store}>
<BrouserRouter>
     <App />
</BrouserRouter>
</Provider>`

Feito isso, é só criar os seus reducers e actions para poder utilizar o redux.

