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
