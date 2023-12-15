import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const MainContentProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--white-color-2);
  margin-top: 45vh;
  width: 54%;
`;

export const Content = styled.div`
  background-color: var(--secondary-color-light);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30vh;
  width: 100%;
`;

export const FloatMenuIcon = styled.button`
  background-color: var(--secondary-color-dark);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 1vh;
  right: 2%;
  width: 3rem;
  height: 3rem;
  border: none;
  padding: 1rem;
  border-radius: 50%;
  z-index: 11;

  &:hover {
    background-color: var(--white-color-2);
    cursor: pointer;
    border-radius: 50%;
  }

    img {
      width: 30px;
      height: 30px;
    }
`;

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--white-color);
  width: 100%;
`;
export const MainContentAsideLeft = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--white-color-2);
  margin-top: 3vh;
  margin-bottom: 5vh;
  width: 90%;
  gap: 1rem;
  border-bottom: 2px solid var(--aside-border-color);

    p {
      margin-top: 0.2rem;
      margin-bottom: 0.2rem;
    }
`;

export const ProfileImg = styled.div`
  position: absolute;
  top: 7vh;
  left: 42%;
  img {
    width: 15vw;
    height: 30vh;
    border-radius: 50%;
    border: 2px solid var(--secondary-color-light);
  }
`;
export const IconsMenu = styled.div`
  background-color: var(--background-light-color);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 3vh;
  right: 1%;
  width: 10rem;

    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      list-style: none;
    }
`;