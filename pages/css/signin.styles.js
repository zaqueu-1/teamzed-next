import { createGlobalStyle } from "styled-components";

export const SignInStyle = createGlobalStyle`

#signin {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  width: 70%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.membersArea {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.minilogo {
  width: 7%;
  height: 7%;
  margin-right: 0.5rem;
}

.login-titulo {
  font-size: 1.5rem;
  color: #e96029;

}

#login-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.inputs-control {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: .5rem;
  gap: .3rem;
}

.inputs-control p {
  color: #f5f5f5;
  font-size: 1rem;
  margin: .2rem 0;
}

input {
  width: 100%;
  height: 2rem;
  border-radius: 8px;
  padding: 1rem;
  background-color: #999;
  border: none;
}

.buttons-control {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#login-button, #signin-button {
  margin-top: .5rem;
  padding: .5rem 5rem;
  border-radius: 6px;
  background-color: #e96029;
  font-size: 1.2rem;
  color: #f5f5f5;
  border: none;
}

#signin-button {
    background-color: #333;
}

#backtomembers-button {
  padding: .5rem;
  background-color: transparent;
  border: none;
  color: #999;
  font-size: 1rem;
}

`;