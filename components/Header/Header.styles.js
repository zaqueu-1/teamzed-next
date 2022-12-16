import { createGlobalStyle } from "styled-components";

export const HeaderStyle = createGlobalStyle`

/* menu list */
ul {
  list-style: none;
}

#members {
  color: rgb(233, 96, 41);
  text-decoration: none;
  transition: 0.4s;
}

#members:hover {
  opacity: 0.6;
}

/* header & menus */
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:0 1.2rem 3rem 1.2rem;
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