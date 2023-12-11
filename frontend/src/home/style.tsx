import styled from 'styled-components';

export const Main = styled.main`
  height: 93vh;
  width: 100%;
  margin-top: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &::after {
      content: "";
      position: fixed;
      width: 63%;
      top: 7vh;
      right: 20%;
      border-top: 5px solid var(--aside-border-color);
      z-index: 2;
    }
`;