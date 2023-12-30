import styled from "styled-components";

export const Main = styled.main`
  background-color: var(--background-dark-grey);
  position: fixed;
  top: 40vh;
  left: 25%;
  display: flex;
  flex-direction: column;
  width: 50% !important;
  height: 35vh !important;
  border: none !important;
  border-radius: 1rem;
    h1 {
      width: 100%;
      text-align: center;
    }
`;

export const ProfilePic = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 50%;
`;

export const FormSendImg = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 50%;
  margin: auto;
  color: var(--white-color-2);
  
    button {
      color: var(--black-color-2);
      border: none;
      border: 2px solid var(--white-color-2);
      border-radius: 5px;
      padding: 5px;
      margin-top: 5px;
      font-size: 1rem;
      font-weight: bold;
      cursor: pointer;
      transition: 0.2s;
      width: 45%;
      &:hover {
        background-color: var(--background-dark-grey);
        color: var(--white-color);
      }
    }
`;

export const TogglePhotoBtn = styled.button`
  position: absolute;
  top: 1vh;
  right: 1%;
  color: var(--black-color-2);
  border: none;
  border: 2px solid var(--white-color-2);
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;
  width: 4%;
  &:hover {
    background-color: var(--background-dark-grey);
    color: var(--white-color);
  }
`;