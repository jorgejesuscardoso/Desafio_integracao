import styled from "styled-components";

export const UserPhoto = styled.img`
  width: 45px;
  height: 45px;
`;

export const Nav = styled.nav`
  background-color: var(--secondary-color);
  overflow: hidden;
  position: fixed;
  display: flex;
  justify-content: end;
  align-items: center;
  top: 0;
  width: 100%;
  height: 7vh;
  z-index: 1;
    ul {
      display: flex;
      justify-content: space-around;
      list-style-type: none;
      margin: 0;
      padding: 0;
      width: 25%;

        li {
          cursor: pointer;
        }
    }
    a {
      color: var(--white-color);
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 1rem;
    }
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 7vh;
      width: 20%;
      transition: background-color 0.5s ease;
    }
    li:hover {
      background-color: var(--secondary-color-dark);
    }
`;

export const ImgMenuIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;