import { createGlobalStyle } from "styled-components";

export const HeaderStyle = createGlobalStyle`

header {
  display: flex;
  width: 100%;
  padding: .5rem 1rem;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
}

.logo {
  font-weight: bold;
  color: #e96029;
  font-size: 2rem;
}

#plans {
  color: rgb(233, 96, 41);
  text-decoration: none;
  transition: all 0.3s;
  font-size: 1.2rem;
}

#plans:hover {
  opacity: 0.6;
}

@media only screen and (max-width:899px) {
  
  .logo {
    font-size: 1.5rem;
  }

  #plans {
    font-size: 1rem;
  }
  
}


`;