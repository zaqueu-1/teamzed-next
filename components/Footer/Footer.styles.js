import { createGlobalStyle } from "styled-components";

export const FooterStyle = createGlobalStyle`

/* menu list */
ul {
  list-style: none;
}

/* header & menus */
footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:0 1.2rem;
  @media (max-width: 900px) {
    header {
        padding-top: 0.6rem;
        width: 90vw;
      }
      
}

.logo {
  font-weight: bold;
  color: #e96029;
}

nav ul {
  display: flex;
}

nav ul li {
  margin-left: 2.5rem;
}

nav ul li a {
  padding: 0.6rem 0.8rem;
  transition: 0.3s;
  font-size: 1.35rem;
  color: #e96029;
}

nav ul li a:hover {
  opacity: 0.6;
}

`;