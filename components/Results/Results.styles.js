import { createGlobalStyle } from "styled-components";

export const ResultsStyle = createGlobalStyle`

#results-container {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem;
    overflow-x: hidden;
    width: 100vw;
}

.svg {
  width: 37rem;
  height: 37rem;
}

.cards-container {
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
}

@media only screen and (max-width: 899px) {

.svg {
  width: 32rem;
  height: 32rem;
}

.cards-container {
  flex-direction: column;
  gap: 2.5rem;
}
  
}
`;