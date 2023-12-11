import styled from "styled-components";

export const NavBar = styled.nav`
  background-color: var(--secondary-color-light);
  overflow: hidden;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 7vh;
  right: 0;
  width: 20%;
  height: 93vh;
  z-index: 10;
    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      list-style-type: none;
      margin: 0;
      padding: 0;
      width: 50%;
    }
    a {
      color: var(--secondary-color-dark);
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 1.3rem;
    }
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 7vh;
      width: 100%;
      transition: background-color 0.2s ease;
    }
    li:hover {
      background-color: var(--secondary-color-dark);
      a {
         color: var(--white-color);
      }
    }
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