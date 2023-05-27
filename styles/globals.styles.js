import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400&display=swap');

* {
  margin: 0;
  padding: 0;
  font-family: 'Oswald', sans-serif;
  box-sizing:border-box;
}

body {
  background: #222;
  overflow-x: hidden;
}

button {
  cursor: pointer;
}

html {
  scroll-behavior: smooth;
}

h2 {
  color: white;
}

a {
  text-decoration: none;
}

::-webkit-scrollbar {
  width: 0.3rem;
  height: 0.3rem;
}

::-webkit-scrollbar-track {
  border-radius: 0.6rem;
}

::-webkit-scrollbar-thumb {
  border-radius: 0.6rem;
  background: #e96029;
}

::-webkit-scrollbar-thumb:hover{
  background: rgb(233, 96, 41, 0.7);
}

::-webkit-scrollbar-thumb:active{
  background: rgb(233, 96, 41, 0.7);
}

/* fonts */
.about-title, .aside-title {
  font-size: 2rem;
}

.paragrafo, .coach span, .descricao-card {
  font-size: 1.2rem;
}

.coach h3, .logo {
  font-size: 2rem;
}

.titulo-card {
  font-size: 1.3rem;
}

#legenda, #legenda2 {
  color: white;
  font-size: 1.2rem;
}

`;