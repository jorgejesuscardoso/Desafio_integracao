import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  background-color: #f5f5f5;
  width: 100%;
  height: 100vh;
`;

export const Banner = styled.header`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary-color);
  width: 100%;
  height: 30vh;

    img {
      width: 15vw;
      height: 30vh;
      border-radius: 50%;
      border: 2px solid var(--secondary-color-light);
    }
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
  position: fixed;
  top: 1vh;
  right: 2%;
  width: 3rem;
  border: none;
  padding: 1rem;
  z-index: 11;

  &:hover {
    cursor: pointer;
  }

    img {
      width: 30px;
      height: 30px;
    }
`;