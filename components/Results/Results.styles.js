import { createGlobalStyle } from "styled-components";

export const ResultsStyle = createGlobalStyle`

#results-container {
    margin-top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem 4rem 1rem;
    overflow-x: hidden;
    width: 100vw;
}

.cards-container {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.cards-subwrapper {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  gap: 4rem;
  padding: 0 4rem;
}

.card-r {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-r .svg-icon {
  width: 55px;
  height: 55px;
  margin-right: 1rem;
}

.card-text-r {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0;
}

.card-text-r .descricao-card {
  line-height: 120%;
}

.card-r p {
  margin-top: -.25rem;
}

@media only screen and (max-width: 899px) {

  #results-container {
    padding: 2rem 1rem;
}

.about-title {
  font-size: 1.5rem;
  text-align: center;
}

.cards-container {
  margin: 2rem auto;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.cards-subwrapper {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
}

.devices {
  width: 330px;
  height: 220px;
  margin-bottom: 2rem;
}

.card-r {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-r .svg-icon {
  width: 55px;
  height: 55px;
  margin-right: 1rem;
}

.card-text-r {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0;
}

.card-text-r .descricao-card {
  line-height: 120%;
}

.card-r p {
  margin-top: -.25rem;
}
  
}

`;