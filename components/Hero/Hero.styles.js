import { createGlobalStyle } from "styled-components";

export const HeroStyle = createGlobalStyle`

#teamzed {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }

  .more {
    padding: .5rem 1rem;
    background-color: #6b6b6b;
    color: white;
    border-radius: 8px;
    border: 2px solid transparent;
    transition: all 0.3s ease-in-out;
    animation: pulse 2s infinite;
    font-size: 1rem;
  }

  .more:hover {
    background-color: #333;
  }
  
  .big-logo {
      background: transparent;
      object-fit: contain;
  }

  @keyframes pulse {
	0% {
		transform: scale(0.95);
    	opacity: 0.8;
	}

	70% {
		transform: scale(1);
    	opacity: 1;
	}

	100% {
		transform: scale(0.95);  
    	opacity: 0.8;
	}
}
  
  #teamzed p {
    color: #6b6b6b;
    text-align: center;
    margin-bottom: 2rem;
    color: #6b6b6b;
    font-size: 1.5rem;
  }

  @media only screen and (max-width:899px) {
    #teamzed {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100vh;
  }
    
    .big-logo {
        width: 80%;
    }


    
  }

`;