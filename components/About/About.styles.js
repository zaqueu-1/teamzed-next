import { createGlobalStyle } from "styled-components";

export const AboutStyle = createGlobalStyle`

.about-container {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  overflow-x: hidden;
  width: 100vw;
}

.about-wrapper {
  margin-top: 7.5rem;
  padding: 2rem;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #444;
  border-radius: 0px 0px 45px 45px;
  gap: 8rem;
}

.coach-container {
  display: flex;
  margin-top: -8rem;
  justify-content: space-evenly;
  width: 100%;
}

.coach {
  text-align: center;
}

.coach h3 {
  margin-top: .5rem;
  margin-bottom: -.25rem;
  font-weight: bold;
  color: whitesmoke;
}

.coach span {
  color: #777777;
  font-size: 1.3rem;
}

.avatar{
  height: 180px;
  width: 180px;
  object-fit: contain;
  transition: all 0.3s ease-in-out;
  border-radius: 50%;
  box-shadow:  3px 3px 0px #e96029,  /*right*/
                -3px -3px 0px #333; /*left*/
}

.avatar:hover {
  transform: scale(0.95);
  box-shadow:  8px 8px 0px #e96029,  /*right*/
                -8px -8px 0px #333; /*left*/
}

.cards-wrapper {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.titulo-card {
  font-weight: bold;
  color: #f5f5f5;
  margin-top: .5rem;
}

.descricao-card {
  color: #777777;
  margin-top: .5rem;
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
  width: 48px;
  height: 48px;
  object-fit: contain;
}

@media only screen and (max-width:899px) {

.about-container {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.about-wrapper {
  margin-top: 7.5rem;
  padding: 3rem;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8rem;
}

.avatar{
  height: 140px;
  width: 140px;
}

.coach-container {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin-top: -8rem;
  justify-content: space-evenly;
  width: 100%;
}

.cards-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-evenly;
  width: 100%;
}

.coach h3 {
  font-size: 1.5rem;
}

.coach span {
  font-size: 1.2rem;
}

    
}

`;