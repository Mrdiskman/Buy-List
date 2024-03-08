import styled from "styled-components";

export const TotalStyled = styled.div`
    display: flex;
    width: 95%;
    height: 250px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #3f3e40;
    border-radius: 15px;
    gap: 30px;

    p{
        font-size: 20px;
        font-family: "Roboto", sans-serif;
        font-weight: 600;
        font-style: normal;
        color: #ffffff;
    }
    @media (min-width: 1024px) {
        width: 50%;
    }
`