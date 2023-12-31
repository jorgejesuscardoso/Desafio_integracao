import styled from "styled-components";

export const Cards = styled.div`
  background-color: var(--black-color-1);
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 300px;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;
export const HeaderCard = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 15%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  gap: 0.5rem;
  
  p {
    font-size: 0.8rem;
    color: var(--secondary-color);
  }
  h3 {
      font-size: 1rem;
      color: var(--whit-color-1);
      font-weight: bold;
    }
  div {
    display: flex;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      margin-right: 0.5rem;
    }
    
  }
  button {
    width: 70px;
    height: 30px;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 0.5rem;
    &:hover {
      background-color: var(--white-color-1);
    }
  }
`;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: 80%;
  margin-top: 2.5rem;
  margin: 0 auto;
  p {
    font-size: 1.2rem;
    color: var(--whit-color-1);
  }
`;

export const MenuCard = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white-color);
  border: 1px solid var(--secondary-color) !important;  
  width: 25px !important;
  height: 20px !important;
    &:hover {
      background-color: var(--secondary-color) !important;
    }
`;

export const DisplayMenuCard = styled.div`
  background-color: var(--secondary-color) !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--white-color);
  width: 70px !important;
  height: 50px !important;
     &:hover {
        button {
        border-radius: 0;
      }
    }
`;

export const TextAreaEditPost = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 25vh;
  z-index: 100;
  textArea {
    background-color: var(--white-color-1);
    width: 100%;
    height: 85%;
    border: 1px solid var(--color-border);
    padding: 0.5rem;
    font-size: 1.2rem;
    outline: none;
    resize: none;
  }
  button {
    width: 70px;
    height: 30px;
    margin-top: 0.5rem;
    background-color: transparent;
    border: none;
    outline: none;
    color: var(--white-color);
    border: 1px solid var(--secondary-color) !important;
    cursor: pointer;
    border-radius: 0.5rem;
    &:hover {
      background-color: var(--white-color-1);
    }
  }
`;

export const BtnProfileLink = styled.button`
  min-width: 25% !important;
  max-width: 30% !important;
  color: var(--white-color-1);
  text-align: start;

    &:hover {
      color: var(--secondary-color);
      background-color: transparent !important;
    }
`;

export const TumbPostBtn = styled.button`
  width: 51px !important;
  height: 51px !important;
  border-radius: 50% !important;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;