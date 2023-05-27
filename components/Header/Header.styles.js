import { createGlobalStyle } from "styled-components";

export const HeaderStyle = createGlobalStyle`

header {
  display: flex;
  width: 100vw;
  padding: .5rem 1rem;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  background-color: #111;
}

.logo {
  font-weight: bold;
  color: #e96029;
  font-size: 2rem;
  cursor: pointer;
}

.small-link {
  color: rgb(233, 96, 41);
  text-decoration: none;
  transition: all 0.3s;
  font-size: 1.2rem;
  padding: .5rem;
  border-radius: 8px;
}

.small-link:hover {
  opacity: 0.6;
}

@media only screen and (max-width:899px) {
  
  .logo {
    font-size: 1.5rem;
  }

  .small-link {
    font-size: 1rem;
  }
  
}


`;