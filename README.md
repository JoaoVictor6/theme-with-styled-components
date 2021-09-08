# Organizando temas no react com Styled-components
Nesse repositório aprenderemos como manipular o tema da nossa aplicação utilizando do `ThemeProvider` e da `context API`.

# Tecnologias 🛠️
- [ReactJS](https://pt-br.reactjs.org/)
- [Styled components](https://styled-components.com/)

# Contexto
Como dito no primeiro tópico, temos como objetivo manipular o tema da aplicação de forma dinâmica. Para isso, criei uma aplicação simples onde existe um botão escrito: _"change theme for `${currentTheme}` mode"_. Cada vez que clicarmos nesse botão o tema padrão da página deve mudar, nesse caso, o background.

[clique aqui para ver o resultado final](https://joaovictor6.github.io/theme-with-styled-components/)

# Styled-components
Por que utilizaremos do styled-components? Bem, acredito que ele seja um dos melhores "pré-processadores" de CSS quando se usa React. A forma que ele trabalha é extremamente simples e deixa o código muito limpo.
## Sem `className`, apenas componentes
Como o próprio nome diz, trabalhamos basicamente com componentes de estilo e usamos nossos estilos da mesma forma que usamos um componentes, veja este exemplo:

```jsx
function Header({children}){
  return(
    <div>
      {children}
    </div>
  )
}

function App(){
  return(
    <Header>
      Header element!
    </Header>
  )
}
```

> Um componente padrão react, nada de novo.
> Agora, observe como é o styled-components

```jsx
const Header = styled.div``

function App(){
  return(
    <Header>
      Header element!
    </Header>
  )
}
```
Pronto! super simples né?🥳

# Configurando o projeto
Agora que entedemos mais sobre como o styled-components funcionam, iremos começar nosso projeto.
## Configurando o ambiente
Aqui é "feijão com arroz", iniciaremos com :
```npx create-react-app nome-do-projeto```

Logo após itemos instalar o styled components:

`yarn add styled-components` ou `npm i styled-components`

Pronto, o ambiente temos que "limpar" vem pré configurado.
Teoricamente, sua pasta terá essa configuração:
<div align="center" >
<img src="https://user-images.githubusercontent.com/68869379/132251074-d26ffb1d-decf-4253-808b-aa1c6404ea40.png">
</div>

### Limpando tudo
Começaremos com a pasta `public/`. No nosso contexto, a unica coisa util la dentro é o index.html, já que é la onde tudo renderiza kkkk.

A pasta ficará assim:

![image](https://user-images.githubusercontent.com/68869379/132251570-6d9a34cf-e88e-4f8a-893a-b45ce7b938ab.png)

Temos que limpar o código do `index.html` também, ele vai ficar assim:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>
```

Agora, partiremos para a pasta `src/`, ela ficará da seguinte forma:

![image](https://user-images.githubusercontent.com/68869379/132251866-9beb97a7-906b-4d07-99a4-89084b510278.png)

Agora, que limpamos a pasta, também limparemos o arquivo `App.js` e `index.js`:
```jsx
// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```
```jsx
// App.js

function App() {
  return (
    <div>
      App
    </div>
  );
}

export default App;
```

Pronto, agoram estamos pronto para codar!🎇
# Mãos a obra

## Criando o estilo global
Em todo projeto, é muito recomendado "resetarmos" algumas configurações do css. com `styled-components` faremos isso utilizando do _createGlobalStyle_. ELe vai ficar assim:
```js
// src/GlobalStyle.js

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

export default GlobalStyle
```
> Essas são as minhas config padrão, você poder mudar☺️

Lembra que eu disse que no _styled-components_ os estilos são aplicados em forma de componentes? Então, o estilo global também! para aplicarmos ele, temos que executalo como um componente dentro do arquivo mais importante do projeto, o `index.js`. Vai ficar assim:

```jsx
// src/index.js
import GlobalStyle from './GlobalStyle'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```
> Pronto, nosso tema global ja está sendo aplicado!

## Componentes de estilo
Nesse projeto, precisaremos de dois componentes. _Button_ e _Main_:
  - Button deverá ter que mudar o tema da página ao ser clicado
  - O main simplemsente será onde o button vai ficar 
### Criando o arquivo de estilos
O componente main e button serão bem simples, olha como ficou:
```js
import styled from "styled-components";

export const Main = styled.main`
  background: ${(props) => props.theme.backgroundColor};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .2s;
`;

export const Button = styled.button`
  border-style: none;
  background: #006eed;
  padding: 1rem 1.6rem;
  color: #fff;
  font-weight: 600;
  border-radius: 10px;
  box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.51);
  transition: all .2s;
  &:hover {
    cursor: pointer;
    box-shadow: 1px 2px 10px 0px rgba(0,0,0,0.71);
  }
`;
```
> você deve ter estranhado o `${(props) => props.theme.backgroundColor};` né? mas não se preocupe, explicarei isso daqui a pouco.
Nosso `app.js` vai ficar assim:
```jsx
import { Button, Main } from "./styles";

function App() {
  return (
    <Main>
      <Button>
        Clique aqui para trocar o tema
      </Button>
    </Main>
  );
}

export default App;
```
> Pronto, a estilização já está pronta 😃

## Configurando o tema padrão
Criaremos um objeto com as configurações dos nossos temas no arquivo `app.js`, olha como é simples:
```js
const themeValues = {
  Light: {
    backgroundColor: '#fefefe'
  },
  Dark: {
    backgroundColor: '#1C2128'
  }
}

function App(){
  //code
}
```

### Temas e contexto, tem a ver?
Os temas no styled-compoenents funcionam como a context API do ReactJS, o tema global é um componente onde seus valores só podem ser acessados pelo seus filhos(children), olha como que fica:
```jsx
function App() {
  return (
    <ThemeProvider theme={themeValues.Dark}>
    <Main>
      <Button>
        Clique aqui para trocar o tema
      </Button>
    </Main>
    </ThemeProvider>
  );
```
> Pronto, agora temos um tema na noss aplicação

### Criando interruptor
Nosso interruptor(button) vai ter que alterar o tema sempre que for clicado, isso é muito simples. Iremos capiturar o evento de click do button e mudar o tema.  Para isso ocorrer usaremos o `useState`, faremos o seguinte:
```js
const [ currentTheme, setCurrentTheme] = useState('Light') // Light, ou Dark
```

função que captura o click: 
```js
function handleClick(){
    if(currentTheme === 'Dark')
      return setCurrentTheme('Light')
    return setCurrentTheme('Dark')
}
```
> Poderiamos usar um boolean mas acredito que no futuro isso vá deixar o código mais simples.

### Ativando o interruptor 💡
Ainda não passamos o tema para o theme provider, e também, como ele vai saber se é o tema claro ou escuro? muito simples, se olha só:

```jsx
  function App() {
  const [ currentTheme, setCurrentTheme] = useState('Light') // Light, ou Dark
  
  function handleClick(){ 
    // function code
  }
  return (
    <ThemeProvider theme={themeValues[currentTheme]}>
    <Main>
      <Button onClick={handleClick}>
        Clique aqui para trocar o tema
      </Button>
    </Main>
    </ThemeProvider>
  );
}

```
> Pronto, aplicamos o tema.
> Você conhecia esse modo de chamar objetos? `obj['methodName']`?
