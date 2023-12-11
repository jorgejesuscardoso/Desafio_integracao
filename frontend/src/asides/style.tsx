import styled from "styled-components";

export const Left = styled.aside `
    background-color: var(--secondary-color-dark);
    overflow: hidden;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 7vh;
    left: 0;
    width: 17%;
    height: 93vh;
    border-right: 5px solid var(--aside-border-color);
    border-top: 5px solid var(--aside-border-color);
    z-index: 1;
    ul {
        display: flex;
        justify-content: space-around;
        list-style-type: none;
        margin: 0;
        padding: 0;
        width: 30%;
    }
    a {
        color: var(--white-color);
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
    }
`;

export const Right = styled.aside `
    background-color: var(--secondary-color-dark);
    overflow: hidden;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 7vh;
    right: 0;
    width: 20%;
    height: 93vh;
    border-left: 5px solid var(--aside-border-color);
    border-top: 5px solid var(--aside-border-color);
    z-index: 1;
    ul {
        display: flex;
        justify-content: space-around;
        list-style-type: none;
        margin: 0;
        padding: 0;
        width: 30%;
    }
    a {
        color: var(--white-color);
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
    }
`;

export const LeftProfile = styled.aside `
    background-color: var(--secondary-color-dark);
    overflow: hidden;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 30vh;
    left: 0;
    width: 20%;
    height: 70vh;
    border-right: 5px solid var(--aside-border-color);
    border-top: 5px solid var(--aside-border-color);
    z-index: 1;
    ul {
        display: flex;
        justify-content: space-around;
        list-style-type: none;
        margin: 0;
        padding: 0;
        width: 30%;
    }
    a {
        color: var(--white-color);
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
    }
`;

export const RightProfile = styled.aside `
    background-color: var(--secondary-color-dark);
    overflow: hidden;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 30vh;
    right: 0;
    width: 20%;
    height: 70vh;
    border-left: 5px solid var(--aside-border-color);
    border-top: 5px solid var(--aside-border-color);
    z-index: 1;
    ul {
        display: flex;
        justify-content: space-around;
        list-style-type: none;
        margin: 0;
        padding: 0;
        width: 30%;
    }
    a {
        color: var(--white-color);
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
    }
`;