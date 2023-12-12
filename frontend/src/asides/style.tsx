import styled from "styled-components";

export const Left = styled.aside `
    overflow: hidden;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 8vh;
    left: 0;
    width: 22%;
    height: 92vh;
    border-right: 5px solid var(--aside-border-color);
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
    overflow: hidden;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 8vh;
    right: 0;
    width: 23%;
    height: 92vh;
    border-left: 5px solid var(--aside-border-color);
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
    overflow: hidden;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 30vh;
    left: 0;
    width: 22%;
    height: 70vh;
    border-right: 5px solid var(--aside-border-color);
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
    overflow: hidden;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 30vh;
    right: 0;
    width: 23%;
    height: 70vh;
    border-left: 5px solid var(--aside-border-color);
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
        color: var(--white-color-2);
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
    }
`;