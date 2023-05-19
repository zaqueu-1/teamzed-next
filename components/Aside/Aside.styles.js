import { createGlobalStyle } from "styled-components";

export const AsideStyle = createGlobalStyle`

#aside-container {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 4rem 0;
    background-color: #EB5F28;
  }

  .aside-title {
    font-size: 2.5rem;
    background-color: #333;
    padding: 1rem;
    border-radius: 16px;
  }
  
  .aside-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    padding: 0 4rem;
  }

  .aside-text {
    font-size: 1.5rem;
    max-width: 700px;
    color: white;
  }
  
  .cel {
    opacity: 0.9;
    animation: float 2s infinite;
    width: 300px;
    height: 300px;
  }

  @media only screen and (max-width:899px) {
  #aside-container {
    padding: 4rem 1rem;
  }

  .aside-title {
    font-size: 1.5rem;
  }
  
  .aside-wrapper {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    padding: 2rem 1rem;
  }

  .aside-text {
    font-size: 1.2rem;
    max-width: 700px;
    margin-top: 1rem;
  }
  
  .cel {
    opacity: 0.9;
    animation: float 2s infinite;
    width: 250px;
    height: 250px;
    margin-top: 1rem;
  }
  }

  `;
  