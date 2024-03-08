import styled from "styled-components";

export const HomeStyled = styled.section`
    display: flex;
    justify-content:flex-start;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    height: fit-content;
`

export const HeaderStyled = styled.header`
    width: 100%;
    display: flex;
    justify-content:center;
    align-items:center;    
    height: 60px;
    background-color: #0af25f;

    .title{
        font-size: 25px;
        font-family: "Roboto", sans-serif;
        font-weight: 600;
        font-style: normal;
        color: #ffffff;
    }
`
export const MainStyled = styled.main`
    width: 100%;
    min-height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #ffffff;
    
    .openModalContainer{
        width: 92%;
    }
    .openModal{
        cursor: pointer;
        margin-top: 30px;
        border: solid 1px #3f3e40;
        font-size: 15px;
        font-family: "Roboto", sans-serif;
        font-weight: 600;
        font-style: normal;
        width: 100%;
        height: 40px;
        border-radius: 25px;
    }
    
    .cart{
        margin-top: 30px;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 30px;
    }
    @media (min-width: 1024px) {
        .openModalContainer{
        width: 50%;
        display: flex;
        justify-content: flex-end;
        .openModal{
        width: 25%;
    }
    }
}

    @media (min-width: 1162px) {
        .openModalContainer{
        width: 50%;
        display: flex;
        justify-content: flex-end;

        .openModal{
        width: 20%;
    }
    }
    
    }
`