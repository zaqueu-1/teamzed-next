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
  min-width: 100vw;
  min-height: 100h;
  margin: 1rem auto;
  overflow: scroll;
  overflow-x: hidden;
  overflow-y: overlay;
  display: flex;
  flex-direction: column;
}

button {
  cursor: pointer;
}

html {
  scroll-behavior: smooth;
}

.bg {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  overflow: hidden;
  z-index: -1;
  background: #222;
}

.markup {
  margin: 4rem 0 2rem 0;
  padding: 1rem 3rem;
  background: #e96029;
  border-radius: 40px;
  color: white;
}

/*scrollbar*/
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
.titulo, #aside2 h2 {
  font-size: 3rem;
}

.paragrafo, .coach span, #aside2 .forms-button:hover {
  font-size: 1.3rem;
}

.coach h3, .logo {
  font-size: 2.4rem;
}

.titulo-card {
  font-size: 1.3rem;
}

.descricao-card, #aside2 .forms-button {
  font-size: 1.2rem;
}

#legenda, #legenda2 {
  color: white;
  font-size: 1.2rem;
}

a {
  color: rgb(233, 96, 41);
  text-decoration: none;
  transition: 0.4s;
}

a:hover {
  opacity: 0.6;
}

/* section #teamzed */
#teamzed {
  background-color: transparent;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.blob {
	background: transparent;
	animation: pulse 2.5s infinite;
}

#teamzed .titulo {
  margin-top: 1rem;
}

.titulo {
  color: whitesmoke;
  font-weight: bold;
  text-align: center;
}

.paragrafo {
  color: #6b6b6b;
  text-align: center;
  margin-bottom: 2rem;
  width: 100vw;
}

/* #serv1 quem somos */
#serv1 {
  margin-top: 8.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.box-quemsomos {
  margin-top: 7.5rem;
  padding: 3rem;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #444;
  box-shadow: 0px 12px 34px 6px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 45px 45px;
}

.box-quemsomos img {
  margin-top: -11rem;
}

.coach-container {
  display: flex;
  margin-top: -2rem;
}

.coach {
  margin-top: 5.5rem;
  text-align: center;
}

.coach h3 {
  margin-top: 0.6rem;
  margin-bottom: -0.3rem;
  font-weight: bold;
  color: whitesmoke;
  width: 29rem;
}

.coach span {
  color: #777777;
  width: 100vw;
  padding: 0 1.5rem;
}

.avatar-van, .avatar-edu, .avatar-wagner {
  height: 15.5rem;
  width: 15.5rem;
  transition: 0.4s;
  border-radius: 10px;
  box-shadow:  10px 10px 0px #e96029,  /*right*/
                -10px -10px 0px #333; /*left*/
}

.avatar-van:hover, .avatar-edu:hover, .avatar-wagner:hover {
  transform: scale(0.95);
  box-shadow:  20px 20px 0px #e96029,  /*right*/
                -20px -20px 0px #333; /*left*/
}


.contato-info {
  background-color: #e96029;
  border-color: transparent;
  border-radius: 10px;
  padding: 0.3rem 0.6rem;
  margin: 0.3rem 0;
  transition: 0.3s;
}

#legenda2 {
  text-decoration: underline;
}

.contato-info:hover {
  background-color: #913c1b;
}

.cards-box {
  display: flex;
  justify-content: space-between;
  margin-top: 19.5rem;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 0 5.5rem;
}

.titulo-card {
  margin: 0.3rem 0;
  font-weight: bold;
  color: #f5f5f5;
}

.descricao-card {
  color: #777777;
  margin-top: -0.3rem;
  width: 15.5rem;
}

.container-info2 {
  padding-bottom: 4.4rem;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.svg-icon {
  width: 3rem;
  height: 3rem;
}

/* #serv2 o que entregamos */
#serv2 {
  margin-top: 5.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.svg {
  width: 37em;
  height: 37rem;
  padding-top: 0;
}

#serv2 .cards-box {
  margin-top: 5rem;
}

/* aside 1 */
aside {
  background: #e96029;
  justify-content: space-around;
  display: flex;
  width: 100%;
  padding: 0 6rem;
}

.aside-container {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
}

.aside-container .markup {
  background: #333;
  width: 11rem;
  padding-left: 3rem;
  margin-top: 2rem;
}

.aside-container .titulo {
  text-align: left;
  margin: -1.5rem 0;
  font-weight: none;
}

.aside-container .paragrafo {
  margin-top: -0.3rem;
  width: 34.5rem;
  color: whitesmoke;
  text-align:left;
  margin-bottom: 2.5rem;
}

aside img {
  margin-top: 4.5rem;
  opacity: 0.9;
  animation: float 4s infinite;
}

/* aside 2 */
#aside2 {
  background: transparent;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50rem;
}

#aside2 h2 {
  margin-top: 15rem;
  width: 45rem;
  text-align: center;
}

.forms-button {
  padding: 1rem 3rem;
  margin-bottom: 4rem;
  color: white;
  border: none;
  border-radius: 15px;
}

#aside2 .forms-button {
  background-color: white;
  color: black;
  margin-top: -15rem;
  transition: 0.3s ease-in-out;
  animation: pulse2 2s infinite;
}

#aside2 .forms-button:hover {
  background-color: #e96029;
  color: whitesmoke;
  animation-play-state: paused;
}

/*footer*/
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 1.2rem;
  margin-right: 1.2rem;
}

/*animations*/

@keyframes pulse {
	0% {
		transform: scale(0.92);
    	opacity: 0.6;
	}

	70% {
		transform: scale(1);
    	opacity: 1;
	}

	100% {
		transform: scale(0.92);  
    	opacity: 0.6;
	}
}

@keyframes pulse2 {
	0% {
		transform: scale(0.92);
	}

	50% {
		transform: scale(1);
	}

	100% {
		transform: scale(0.92);  
	}
}

@keyframes float {
	0% {
		transform: translatey(0px);
	}

	50% {
		transform: translatey(-1.2rem);
	}

	100% {
		transform: translatey(0px);
	}
}

/*mobile response*/
@media (max-width: 900px) {
  html {
    overflow-x: hidden;
  }

  .titulo, #aside2 h2 {
    font-size: 2rem;
  }

  .paragrafo, .coach h3 {
    font-size: 1.25rem;
  }

  .markup {
    font-size: 1.2rem;
  }

  #serv1 .paragrafo, #serv1 .titulo, #serv2 .paragrafo, #serv2 .titulo {
    padding: 0.3rem 0.9rem;
    width: 90vw;
  }

  #serv1 {
    flex-direction: column;
  }

  .cards-box {
    margin-top: -5.5rem;
    display: block;
  }

  #serv2 .card {
    padding: 2rem;
  }

  #serv1 .card {
    margin-top: 14rem;
  }

  #serv1 .paragrafo {
    margin-bottom: -0.8rem;
  }

  .coach-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .coach {
    align-items: center;
    margin: 5.5rem 0 6.9rem 0;
    padding-bottom: 0.9rem;
   }

   .card {
    margin: 0 1.8rem;
  }

  aside {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1.5rem;
    border-radius: 20px 20px 45px 45px;
  }

  .aside-container {
    justify-content: center;
    margin: 0 1rem 0 1rem;
    padding: 0 1rem 0 1rem;
  }

  .aside-container .markup {
    width: 7rem;
    padding: 1rem .5rem;
    margin: 2rem 0 1.5rem 0;
  }

  .aside-container .titulo {
    display: flex;
    font-size: 5vw;
    margin: .5rem 0 -1rem 0;
    padding: 0;
  }

  .aside-container p {
    max-width: 100%;
  }

  aside img {
  display: none;
  }
  
  #aside2 h2 {
    margin-top: 15rem;
    width: 35rem;
  }
  
  #aside2 .forms-button {
    margin-top: 1.5rem;
  }
}

/* 500w --------------------------------------------------------------------------------------------------------------------------------*/
@media (max-width: 500px) {
  html {
    overflow-x: hidden;
  }

  header {
    margin: 0 1rem 3rem 1rem;
  }

  nav ul li a {
    padding: 0 0.5rem;
    font-size: 0.9rem;
  }

  .markup {
    font-size: 0.7rem;
    margin-top: 1.3rem;
  }

  .paragrafo {
    font-size: 0.9rem;
  }

  section, aside {
    width: 100vw;
  }

  .box-quemsomos {
    margin-top: 10rem;
    padding: 0 3rem;
  }

  #teamzed {
    padding: 1.2rem;
    margin-top: 2.5rem;
  }

  #teamzed img {
    width: 15rem;
    height: 15rem;
  }

  #serv1 {
    flex-direction: column;
  }

  #serv1 .cards-box {
    margin-top: -8.5rem;
    align-items: center;
  }

  #serv1 .card {
    margin-top: 13.7rem;
  }

  #serv1 .paragrafo, #serv1 .titulo, #serv2 .paragrafo, #serv2 .titulo {
    padding: 0.3rem 0.9rem;
    width: 90vw;
  }

  #serv1 .paragrafo {
    margin-bottom: -0.8rem;
  }

  .coach-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .coach {
    margin: 5rem 3rem 6.5rem 3rem;
    padding-bottom: 1.2rem;
    display: flex;
    flex-direction: column;
   }

   .coach span {
    margin-bottom: -25px;
   }

   .centerme {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    margin: 0 2rem;
    padding: 0 2rem;
    width: 10vw;
   }
 
   .coach h3, .titulo-card, .titulo, .logo {
     font-size: 1.2rem;
   }

  .cards-box {
    flex-direction: column;
  }

  .svg {
    width: 25rem;
    height: 25rem;
  }

  #serv2 .cards-box {
    margin-top: 1.2rem;
  }

  #serv2 .card {
    margin-top: 2.5rem;
  }

  .avatar-van, .avatar-edu, .avatar-wagner {
    height: 13rem;
    width: 13rem;
  }

  aside {
    flex-direction: column;
    padding: 0 1.5rem;
  }
  
  .aside-container {
    justify-content: center;
    align-items: center;
    margin: 0 .5rem 0 .5rem;
    padding: 0 .5rem 0 .5rem;
  }

  .aside-container .markup {
    width: 7rem;
    padding: 1rem .5rem;
    margin: 1rem 0 .5rem 0;
  }

  .aside-container .titulo {
    margin: .5rem 0 -1rem 0;
    padding: 0;
    align-self: flex-start;
  }

  .aside-container p {
    max-width: 100%;
  }

  aside img {
  display:none
  }
  
  #aside2 h2 {
    margin-top: 1.5rem;
    width: 95vw;
    font-size: 1.45rem;
  }
  
  #aside2 .forms-button {
    margin-top: .5rem;
    font-size: 0.8rem;
  }

  #aside2 .forms-button:hover {
    font-size: var(--fs-400);
  }

  #login-button, #signin-button {
    padding: .5rem 3rem;
    font-size: 0.8rem;
  }

  #forgotpass-button {
    font-size: 0.8rem;
  }
}

`;