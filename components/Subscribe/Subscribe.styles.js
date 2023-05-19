import { createGlobalStyle } from "styled-components";

export const SubscribeStyle = createGlobalStyle`

#subscribe-container {
    margin-top: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 4rem 0;
}

#subscribe-container h2 {
  text-align: center;
  font-size: 2.5rem;
}

.plans-button {
  background-color: #EB5F28;
  color: white;
  padding: 1rem;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
  animation: pulse 2s infinite;
  margin-top: 1rem;
  font-size: 1.5rem;
}

.plans-button:hover {
  animation-play-state: paused;
}

@media only screen and (max-width: 899px) {
#subscribe-container {
    padding: 4rem 1rem;
}

#subscribe-container h2 {
  font-size: 1.5rem;
}

.plans-button {
  background-color: #EB5F28;
  color: white;
  padding: 1rem;
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
  animation: pulse 2s infinite;
  margin-top: 1rem;
  font-size: 1.2rem;
}
}

`;
