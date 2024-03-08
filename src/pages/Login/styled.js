import styled from "styled-components";

export const ContainerFormLogin = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0af25f;
    .formLogin{
        width: 90%;
        height: 50%;
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;
        border-radius: 25px;
    }
    input{
        width: 90%;
        height: 30px;
        border-radius: 25px;
        border: 2px solid #000000;
        padding-left: 10px;
        color: black;
        font-family: "Roboto", sans-serif;
        font-weight: 600;
        font-style: normal;
    }
    .loginTitle{
        color: black;
        font-family: "Roboto", sans-serif;
        font-weight: 600;
        font-style: normal;
        font-size: 30px;
    }
    .submitLogin{
        color: #0a91f2;
        font-family: "Roboto", sans-serif;
        font-weight: 600;
        font-style: normal;
        background-color: #0af25f;
        color: #ffffff;
        width: 30%;
        height: 30px;
        border-radius: 25px;
        border: 1px solid #000000;
    }
    @media (min-width: 1024px) {
        .formLogin{
        width: 40%;
    }}
    @media (min-width: 1440px) {
        .formLogin{
        width: 25%;
    }
    }
`