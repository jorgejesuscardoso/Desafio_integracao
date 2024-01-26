import styled from "styled-components";

export const NavBar = styled.nav`
  overflow: hidden;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 9vh;
  right: 1%;
  width: 20%;
  height: 90vh;
  border-radius: 0.5rem;
  z-index: 10;
    ul {
      background-color: var(--background-dark-grey-2);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      list-style-type: none;
      border-radius: 7px;
      margin: 0;
      padding: 0;
      width: 99%;
      height: 99%;
      gap: 1rem;
    }
    a {
      color: var(--secondary-color-light);
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 1.3rem;
      width: 100%;
    }
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 7vh;
      width: 95%;
      border: 1px solid var(--secondary-color-light);
      border-radius: 0.5rem;
      transition: background-color 0.1s ease;
    }
    li:hover {
      background-color: var(--secondary-color-dark);
      border-radius: 7px;
      a {
         color: var(--white-color);
      }
    }
`;

export const Lis = styled.li`
  margin-top: 50%;
  border: none !important;
`;

export const Logout = styled.button`
  background-color: var(--logout-color);
  border: none;
  color: var(--logout-color-text);
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;
  height: 7vh;
  width: 100%;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: var(--green-color);
    color: var(--white-color);
  }
`;

export const Menusettings = styled.div`
  background-color: var(--background-dark-grey-2);
  position: fixed;
  top: 9.5%;
  right: 21%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 15%;
  border-radius: 0.5rem;
  transition: background-color 0.1s ease;
  gap: 1.5rem;
  
    button {
      background-color: var(--secondary-color-dark);
      border: 1px solid var(--secondary-color-light);
      border-radius: 7px;
      color: var(--secondary-color-light);
      text-align: center;
      width: 70%;
      height: 5vh;
      font-size: 1.3rem;

      &:hover {
        background-color: red;
        font-weight: bold;
        color: var(--white-color-2);
        border-radius: 7px;
      }
    }
    p {
      color: var(--white-color);
      text-align: center;
      height: 5vh;
    }
`;