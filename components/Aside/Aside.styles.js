import { createGlobalStyle } from "styled-components";

export const AsideStyle = createGlobalStyle`

.aside-container {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 4rem 1rem;
    background-color: #333;
    width: 100vw;
  }
  
  .aside-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 2rem;
    margin-top: 1.5rem;
  }

  .deps {
    display: flex;
    gap: 1.5rem;
    background-color: #444;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    padding: 1.5rem 3rem;
  }

  .deps img {
    width: 450px;
    height: 420px;
    border-radius: 8px;
  }

  .aside-list {
    list-style: none;
    color: white;
    font-size: 1.5rem;
    font-weight: 300;
    padding: .5rem 0;
  }

  .aside-list li {
    display: flex;
    align-items: center;
    gap: .25rem;
  }

  .check-icon {
    color: green;
    animation: glow 2s infinite;
  }

  .li-btn {
    background-color: #EB6029;
    color: white;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem .5rem;
    width: 50%;
    margin: 2rem auto;
    border-radius: 8px;
    text-transform: uppercase;
    font-weight: 400;
    transition: all 0.3s ease-in-out;
  }

  .li-btn:hover {
  transform: scale(1.05);
}

  @keyframes glow {
    0% {
      opacity: .5;
      }
    50% {
      opacity: 1;
      }
    100% {
      opacity: .5;
      }

  }
  

  @media only screen and (max-width:899px) {
    .aside-container {
    margin-top: 1rem;
  }
  
  .aside-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 2rem;
    margin-top: 1.5rem;
  }

  .deps {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
  }

  .deps img {
    width: 330px;
    height: 300px;
  }

  .aside-list {
    font-size: 1.1rem;
  }

  .aside-list li {
    display: flex;
    align-items: center;
    gap: .25rem;
  }

  .check-icon {
    color: green;
    font-size: 1.2rem;
    animation: glow 2s infinite;
  }

  .li-btn {
    background-color: #EB6029;
    color: white;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem .5rem;
    width: 80%;
    margin: 2rem auto;
    border-radius: 8px;
    text-transform: uppercase;
    font-weight: 400;
  }

  
  }

  `;
  