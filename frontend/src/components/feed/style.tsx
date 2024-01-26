import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100vw;
  min-height: 100vh;
  background-color: var(--color-background);
`;
export const SectionTextArea = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  height: 30vh;
  max-height: 20vw;
  background-color: var(--white-color-2);
  border-radius: 0.5rem;
`;

export const SectionTextAreaIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 25px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    height: 100%;
    width: 16.5%;
    color: var(--color-icons);
    border-left:1px solid; 
    border-radius: 0.5rem 0.5rem 0 0;
    cursor: pointer;
    &:hover {
      color: black;
      background-color: var(--background-light-color);
    }
  }
`;

export const TextArea = styled.textarea`
  background-color: var(--white-color-1);
  width: 100%;
  height: 85%;
  border: 1px solid var(--color-border);
  padding: 0.5rem;
  font-size: 1.2rem;
  outline: none;
  resize: none;
`;
export const IcoContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  button {
    width: 70px;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 0  0 0.5rem 0;
    &:hover {
      background-color: var(--white-color-1);
    }
  }
`;
export const SendIcon = styled.img`
  width: 30px;
  height: 30px;
  margin: 0.5rem;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;
export const Feed = styled.main`
  width: 90%;
  border-radius: 0.5rem;
  margin-top: 2rem;
`;
export const SectionPost = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;
