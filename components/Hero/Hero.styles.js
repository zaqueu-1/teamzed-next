import { createGlobalStyle } from "styled-components";

export const HeroStyle = createGlobalStyle`

#teamzed {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 700px;
  }

  .more {
    color: white;
    transition: all 0.3s ease-in-out;
    animation: pulse 2.5s infinite;
    font-size: 2.5rem;
    cursor: pointer;
  }

  .more:hover {
    color: #E95E27;
  }
  
  .big-logo {
      background: transparent;
      object-fit: contain;
      height: 100%;
  }

  @keyframes pulse {
	0% {
		transform: scale(0.8);
    opacity: 0.5;
	}

	50% {
		transform: scale(1.2);
    	opacity: 1;
	}

	100% {
		transform: scale(0.8);
    opacity: 0.5;
	}
}

  @media only screen and (max-width:899px) {
    #teamzed {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 700px;
  }
    
    .big-logo {
        width: 80%;
    }


    
  }

`;