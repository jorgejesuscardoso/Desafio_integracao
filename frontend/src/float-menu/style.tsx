import styled from "styled-components";

export const NavBar = styled.nav`
  background-color: var(--secondary-color-light);
  overflow: hidden;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 9vh;
  right: 1%;
  width: 20%;
  height: 90vh;
  border-radius: 7px;
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
  margin-top: 100%;
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