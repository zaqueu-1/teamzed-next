import { createGlobalStyle } from "styled-components";

export const LinksStyle = createGlobalStyle`

.links-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 0;
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
    margin-top: .75rem;
}

.links-container p {
    font-size: 1.2rem;
    margin-top: -1.2rem;
    font-weight: 200;
    color: #EB5F28;
}

.links-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-width: 330px;
    padding: 0 1rem;
    margin-top: .5rem;
    gap: 1rem;
}

.links-card {
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in-out;
    filter: contrast(0.9) drop-shadow(2px 2px 0px #EB5F28);
    object-fit: contain;
}

.links-card:hover {
    transform: scale(1.03);
}

@media only screen and (max-width:899px) {
    .links-container h1 {
    font-size: 1.5rem;
}

.links-container p {
    font-size: 1rem;
    margin-top: -1rem;
}

.links-avatar {
    height: 90px;
    width: 90px;;
}

  
}`;