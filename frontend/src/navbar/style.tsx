import styled from "styled-components";

export const UserPhoto = styled.img`
  width: 45px;
  height: 45px;
`;

export const Nav = styled.nav`
  background-color: var(--background-dark-grey-2);
  overflow: hidden;
  position: fixed;
  display: flex;
  justify-content: end;
  align-items: center;
  top: 0;
  width: 100%;
  height: 8vh;
  z-index: 1;
    ul {
      display: flex;
      justify-content: space-around;
      list-style-type: none;
      padding: 0;
      width: 15%;

        li {
          cursor: pointer;
        }
    }
    a {
      color: var(--white-color-2);
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      font-size: 1rem;
    }
    li {
      background-color: var(--secondary-color);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 5.5vh;
      width: 17%;
      border-radius: 50%;
    }
    li:hover {
      background-color: var(--secondary-color-dark);
    }
`;
export const ImgMenuIcon = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export const ProfileIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const HomeIcon = styled.img`
  width: 30px;
  height: 30px;
`;