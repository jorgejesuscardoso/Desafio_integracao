import styled from "styled-components";

export const Left = styled.aside `
  overflow: hidden;
  position: absolute;
  display: flex;
  justify-content: center;
  top: 8vh;
  left: 0;
  width: 22%;
  height: 92vh;
  border-right: 5px solid var(--aside-border-color);
  z-index: 1;
  overflow-y: scroll;
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    gap: 1rem;
    margin-top: 2rem;

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90%;
        height: 50px;
        background-color: var(--aside-border-color);
        border-radius: 10px;
      
      }
  }
  
`;

export const Right = styled.aside `
  position: absolute;
  display: flex;
  justify-content: center;
  top: 8vh;
  right: 0;
  width: 23%;
  height: 92vh;
  max-height: 200vh;
  border-left: 5px solid var(--aside-border-color);
  z-index: 1;
  overflow-y: scroll;
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
    gap: 1rem;
    margin-top: 2rem;

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90%;
        height: 50px;
        background-color: var(--aside-border-color);
        border-radius: 10px;
      
      }
  }
  
`;

export const LeftProfile = styled.aside `
	overflow: hidden;
	position: absolute;
	display: flex;
	top: 30vh;
	left: 0;
	width: 22%;
	height: 100vh;
	z-index: 1;
	main {
    display: flex;  
    flex-direction: column;
    align-items: start;
    justify-content: start;
    height: 100%;
    width: 100%;
   // border-right: 2px solid var(--aside-border-color);
    gap: 1rem;
	}
	a {
		color: var(--white-color);
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
		font-size: 17px;
  }
  h1 {
    color: var(--white-color-2);
  }
`;

export const RightProfile = styled.aside `
  overflow: hidden;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 30vh;
  right: 0;
  width: 23%;
  height: 100vh;
  z-index: 1;
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
   // border-left: 2px solid var(--aside-border-color);
    gap: 1rem;

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90%;
        height: 50px;
        background-color: var(--aside-border-color);
        border-radius: 10px;
      
      }
  }
  ul {
    display: flex;
    justify-content: space-around;
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 30%;
  }
  a {
    color: var(--white-color-2);
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
`;
export const Chat = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around !important;
  width: 100%;
  height: 300px !important;
  margin-top: 3rem;
  margin-bottom: 2rem;
`;