import { createGlobalStyle } from "styled-components";

export const PlansStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  font-family: 'Oswald', sans-serif;
  box-sizing:border-box;
}

body {
  background: #222;
  overflow-x: hidden;
}

a {
    text-decoration: none;
    color: white;
}

.plans-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-width: 330px;
    background: rgb(34,34,34);
    background: linear-gradient(184deg, rgba(34,34,34,1) 14%, rgba(85,85,85,1) 86%);
    height: 100vh;
}

.plans-info {
    width: 100%;
    padding: 4rem;
    background-color: #111;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
}

.teamzed-logo {
    object-fit: contain;
    width: 30%;
    height: 30%;
}

.plans-info h3 {
    font-weight: 200;
    text-align: center;
    margin-top: 1rem;
    max-width: 900px;
    color: #EB5F28;
}

.plans-info ul {
    font-size: 1.2rem;
    list-style: none;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 1rem;
    width: 600px;
    margin: 0 auto;
    color: white;
}

.plans-info li {
    margin-bottom: .5rem;
    display: flex;
    align-items: center;
}

.plans-info li:before {
    content: '';
    display: inline-block;
    height: 1.4em;
    width: 1.4em;
    margin-right: .5rem;
    background-image: url('/src/images/salad.ico');
    background-size: contain;
    background-repeat: no-repeat;
    transform: rotate(15deg);
}

.join-btn {
    background-color: green;
    padding: 1.2rem;
    border-radius: 8px;
    font-size: 1.2rem;
    font-weight: 500;
    display: flex;
    gap: .25rem;
    align-items: center;
    transition: all 0.3s ease-in-out;
    margin-top: 1rem;
}

.join-icon {
    color: #C1E1C1;
}

.join-btn:hover {
    transform: scale(1.05);
}

.plans-types {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    background-color: #EB5F28;
    width: 100%;
    padding: 4rem;
}

.plans-types a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem;
    background-color: #111;
    border-radius: 0 0 8px 8px;
    margin-top: 2rem;
    font-size: 2rem;
    width: 280px;
    height: 250px;
    transition: all 0.3s ease-in-out;
    border-top: 12px solid whitesmoke;
}

.plans-types a:hover {
    transform: scale(1.05);
    background-color: #222;
    border-top: 12px solid green;
}

.plans-types a span:nth-child(1){
    font-size: 1rem;
    margin-top: .5rem;
    font-weight: 200;
}

.plans-types a span:nth-child(2) {
    font-size: 1.75rem;
    margin-top: 2rem;
    font-weight: 500;
    padding: .5rem;
    background-color: green;
    border-radius: 8px;
}

@media only screen and (max-width:899px) {

.plans-info {
    width: 100%;
    padding: 4rem 1rem;
}

.teamzed-logo {
    width: 60%;
    height: 60%;
}

.plans-info h3 {
    font-size: .85rem;
}

.plans-info ul {
    font-size: 1rem;
    list-style: none;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: .5rem;
    width: 100%;
    margin: 0 auto;
    text-align: center;
}

.plans-info li {
    margin-bottom: .75rem;
}

.join-btn {
    font-size: 1.2rem;
}

.plans-types {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    background-color: #EB5F28;
    width: 100%;
    padding: 4rem 1rem;
}

.plans-types a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 1rem;
    background-color: #111;
    border-radius: 0 0 8px 8px;
    margin-top: 2rem;
    font-size: 2rem;
    width: 280px;
    height: 250px;
    transition: all 0.3s ease-in-out;
    border-top: 12px solid whitesmoke;
}

.plans-types a:hover {
    transform: scale(1.05);
    background-color: #222;
    border-top: 12px solid green;
}

.plans-types a span:nth-child(1){
    font-size: 1rem;
    margin-top: .5rem;
    font-weight: 200;
}

.plans-types a span:nth-child(2) {
    font-size: 1.75rem;
    margin-top: 2rem;
    font-weight: 500;
    padding: .5rem;
    background-color: green;
    border-radius: 8px;
}


  
}


`;