import styled from "styled-components";

export const Mainregister = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--color-background);
`;

export const FormRegister = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid var(--white-color);
  border-radius: 0.5rem;
  height: 60vh;
  width: 25vw;
  gap: 1rem;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 1rem;
  padding: 1rem;
  font-weight: bold;

  div {
      text-align: start;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      width: 100%;
    }

    input {
      width: 100%;
      height: 2rem;
      border-radius: 0.5rem;
      border: 1px solid var(--white-color);
      padding: 0.5rem;
    }
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row !important;
  justify-content: space-between;
  width: 70% !important;
  margin: 1rem;
  
    
  button {
      width: 150px;
      height: 2rem;
      border-radius: 0.5rem;
      background-color: var(--green-color);
      color: var(--white-color);
      font-weight: bold;
      transition: 0.5s;
      margin: 1rem;

      &:hover {
        background-color: var(--primary-color);
        color: var(--white-color);
        font-weight: bold;
      }
    }
`;

export const Peh = styled.p`
  font-size: 0.8rem;
  text-align: center;
  margin-top: 1rem;
  a {
    color: var(--primary-color);
    font-weight: bold;
    transition: 0.5s;

    &:hover {
      color: var(--green-color);
    }
  }
`;

export const Erro = styled.p`
  position: absolute;
  top: 60vh;
  color: var(--color-error);
  font-weight: bold;
  text-align: center;
  margin-top: 1rem;
`;