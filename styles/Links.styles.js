import { createGlobalStyle } from "styled-components";

export const LinksStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  font-family: 'Oswald', sans-serif;
  box-sizing:border-box;
}

body {
    overflow-x: hidden;
}

a {
    text-decoration: none;
    color: white;
}

.links-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6rem 0;
    width: 100%;
    min-width: 330px;
    background: rgb(34,34,34);
    background: linear-gradient(184deg, #222 14%, #111 86%);
    height: 100vh;
}

.links-avatar {
    border-radius: 50%;
    border: 2px solid #EB5F28;
    animation: float 2s infinite;
}

@keyframes float {
    0% {
        transform: translatey(0px);
        }
        50% {
            transform: translatey(-5px);  
            }
            100% {
                transform: translatey(0px);
                }
}

.links-container h1 {
    font-size: 2rem;
    color: white;
    margin-top: .5rem;
}

.links-container p {
    font-size: 1rem;
    margin-top: -.25rem;
    font-weight: 200;
    color: #EB5F28;
}

.links-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    min-width: 330px;
    padding: 0 1rem;
    gap: 1rem;
}

.links-card-w {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

.links-card {
    width: 95%;
    height: 95%;
    transition: all 0.3s ease-in-out;
    filter: contrast(0.9) drop-shadow(2px 2px 0px #EB5F28);
    object-fit: contain;
}

.links-card:hover {
    transform: scale(1.03);
}

.links-footer{
    padding-top: 4rem;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #EB5F28;
    font-size: .9rem;
    background-color: #111;
}

@media only screen and (max-width:899px) {
    .links-container h1 {
    font-size: 1.5rem;
}

.links-container p {
    font-size: .9rem;
}

.links-avatar {
    height: 90px;
    width: 90px;;
}

  
}`;