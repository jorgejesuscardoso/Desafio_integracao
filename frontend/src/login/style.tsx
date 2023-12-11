import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  width: 100vw;
  background-color: #f5f5f5;
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  color: #333;
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30vw;
    height: 50vh;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
      label {
        width: 15rem;
        margin-bottom: 0.5rem;
      }
      input {
        width: 15rem;
        height: 2rem;
        border: 1px solid #333;
        border-radius: 5px;
        padding-left: 0.5rem;
        &:focus {
          outline: none;
          border: 1px solid #333;
        }
      }

    }
    button {
      width: 10rem;
      height: 2rem;
      border: 1px solid #333;
      border-radius: 5px;
      background-color: #333;
      color: #fff;
      font-weight: bold;
      &:hover {
        cursor: pointer;
        background-color: #fff;
        color: #333;
      }
    }
  }
  @media (max-width: 768px) {
    form {
      width: 80vw;
    }
  }
`;

export const RegisterMsg = styled.p`
  position: absolute;
  bottom: 7rem;
`;

export const Errors = styled.p`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 60vh;
  color: red;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;

export const LoginMsg = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 60vh;
  color: green;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;